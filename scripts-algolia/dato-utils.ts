import dotenv from "dotenv";
import axios from "axios";
import { render } from "datocms-structured-text-to-plain-text";

dotenv.config({ path: ".env.local" });
const API_KEY = process.env.NEXT_PUBLIC_DATO_APIKEY ?? "";
const DATO_ENV = process.env.NEXT_PUBLIC_DATO_ENV ?? null;

type recurseQueryProps = {
  q: string;
  values: any;
  propertyName: string;

  currentPage: number;
  pageSize: number;

  prevResults: any;
  done: boolean;
};

export async function getCollections(
  q: string,
  values: any,
  propertyName: string
) {
  return recurseQuery({
    q,
    values,
    propertyName,
    pageSize: 100,
    prevResults: [],
    currentPage: 0,
    done: false,
  });
}

export async function recurseQuery({
  q,
  values,
  propertyName,
  pageSize,
  currentPage,
  prevResults,
  done,
}: recurseQueryProps): Promise<any> {
  if (!done) {
    const params = {
      ...values,
      first: pageSize,
      skip: currentPage,
    };
    let results;
    try {
      let response = await fetchData(q, { ...params });
      results = response[propertyName] || [];
      console.log("results", results.length);
    } catch (error) {
      console.error("query error", error);
      throw error;
    }

    done = results?.length === 0;
    let all = [...prevResults, ...results];
    currentPage += pageSize;
    return await recurseQuery({
      q,
      values,
      prevResults: all,
      currentPage,
      done,
      pageSize,
      propertyName,
    });
  } else {
    return prevResults;
  }
}

export const fetchData = async (
  q: string,
  v: any = null,
  preview: boolean = false
) => {
  if (!API_KEY) return null;
  try {
    let url = `https://graphql.datocms.com`;
    if (DATO_ENV) {
      url = `https://graphql.datocms.com/environments/${DATO_ENV}`;
    }
    const response = await axios.post(
      `${url}${preview ? "/preview" : ""}`,
      { query: q, variables: v },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    // console.info("status", response?.status);
    const data = response?.data;
    // console.info("data", data);
    if (data?.errors) {
      // console.error("QUERY ERROR", v, q, data?.errors);
      throw new Error(data?.errors);
    }
    return data?.data;
  } catch (error) {
    console.error("QUERY ERROR", v);
    console.error(q);
    throw error;
  }
};

export function formatStructuredText(text: any) {
  return render(text);
}
