import { NextRequest } from "next/server";
import resolveLink from "@/lib/resolveLink";

async function generatePreviewUrl({ item, itemType, locale }: any) {
  console.info("locale", locale);
  if (!item?.attributes) return null;
  console.info("JSON", JSON.stringify(item.attributes, null, 2));
  const apiKey = itemType.attributes.api_key || null;
  console.info("apiKey", apiKey);

  const slug = item.attributes.slug || null;
  const slugLocale = slug ? (locale ? slug[locale] : slug["it"]) : null;
  let record: any = { slug: slugLocale, apiKey };
  const link = apiKey === "home" ? "/" : resolveLink({ ...record, locale });
  console.info("LINK", link);
  return link;
}

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Content-Type": "application/json",
};

export async function OPTIONS(request: NextRequest) {
  return new Response("ok", {
    status: 200,
    headers,
  });
}

export async function POST(request: NextRequest) {
  // const { searchParams } = new URL(request.url);
  const body = await request.json();
  console.log("body", body);
  const url = generatePreviewUrl(body);

  if (!url) {
    return new Response(JSON.stringify({ previewLinks: [] }), {
      status: 200,
      headers,
    });
  }

  const baseUrl = process.env.NEXT_PUBLIC_HOST;
  const previewLinks = [];

  previewLinks.push({
    label: "Published version",
    url: `${baseUrl}${url}`,
  });

  previewLinks.push({
    label: "Draft version",
    url: `${baseUrl}/api/preview?url=${url}`,
  });

  return new Response(JSON.stringify({ previewLinks }), {
    status: 200,
    headers,
  });
}
