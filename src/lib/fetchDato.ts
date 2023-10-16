import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { print } from "graphql";

export default async function fetchDato<
  TResult = unknown,
  TVariables = Record<string, any>
>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables,
  isDraft?: boolean
): Promise<TResult> {
  const headers: any = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Exclude-Invalid": "true",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_APIKEY}`,
  };
  const hasEnv = process.env.NEXT_PUBLIC_DATO_ENV || null;
  if (hasEnv)
    headers["X-Environment"] = `${process.env.NEXT_PUBLIC_DATO_ENV || "main"}`;
  if (isDraft) headers["X-Include-Drafts"] = "true";

  const { data } = await (
    await fetch("https://graphql.datocms.com/", {
      cache: "force-cache",
      next: { tags: ["datocms"] },
      method: "POST",
      headers,
      body: JSON.stringify({ query: print(document), variables }),
    })
  ).json();

  return data;
}
