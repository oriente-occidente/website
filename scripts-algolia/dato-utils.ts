import dotenv from "dotenv";
import axios from "axios";
import { render } from "datocms-structured-text-to-plain-text";

dotenv.config({ path: ".env.local" });
const API_KEY = process.env.NEXT_DATOCMS_API_TOKEN ?? "";
const DATO_ENV = process.env.NEXT_DATOCMS_ENV ?? null;
const PROXY = process.env.NEXT_PUBLIC_DOMAIN_PROXY || "";
const DATO = process.env.NEXT_PUBLIC_DOMAIN_DATO || "";

export function replaceAssetUrlDomain(url: string): string {
  return url.replace(DATO, PROXY);
}

type recurseQueryProps = {
  q: string;
  values: any;
  type: string;

  currentPage: number;
  pageSize: number;

  prevResults: any;
  done: boolean;
};

export async function getCollections(q: string, values: any, type: string) {
  console.info("GET COLLECTIONS", type);
  return recurseQuery({
    q,
    values,
    type,
    pageSize: 100,
    prevResults: [],
    currentPage: 0,
    done: false,
  });
}

export async function recurseQuery({
  q,
  values,
  type,
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
      results = response[type] || [];
    } catch (error) {
      // console.error("ERROR", error);
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
      type,
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
  // console.info("API_KEY", API_KEY);
  console.info("FETCHING DATO", DATO_ENV);
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
    console.info("status", response?.status);
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
