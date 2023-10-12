import { NextRequest } from "next/server";
import { headers as getHeaders } from "next/headers";
// import { SiteLocale } from "@/graphql/generated";

type generatePreviewUrlParams = {
  item: any;
  itemType: any;
  locale: string;
};

const generatePreviewUrl = ({
  item,
  itemType,
  locale,
}: generatePreviewUrlParams) => {
  switch (itemType.attributes.api_key) {
    case "page":
      return `/${locale}/${item.attributes.slug}`;
    case "post":
      return `/${locale}/posts/${item.attributes.slug}`;
    case "tag":
      return `/${locale}/posts/tag/${item.attributes.slug}`;
    default:
      return `/${locale}/${item?.attributes?.slug || ""}`;
  }
};

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
  const { searchParams } = new URL(request.url);
  // const token = searchParams.get("token");
  // if (token !== process.env.DRAFT_SECRET_TOKEN)
  //   return new Response("Invalid token", { status: 401 });
  const parsedRequest = await request.json();
  const url = generatePreviewUrl(parsedRequest);
  if (!url) {
    return new Response(JSON.stringify({ previewLinks: [] }), {
      status: 200,
      headers,
    });
  }

  const baseUrl = process.env.HOST || "";
  const previewLinks = [];

  if (parsedRequest.item.meta.status !== "draft")
    previewLinks.push({
      label: "Published version",
      url: `${baseUrl}/api/draft/disable?url=${url}`,
    });

  if (parsedRequest.item.meta.status !== "published")
    previewLinks.push({
      label: "Draft version",
      url: `${baseUrl}/api/draft/enable?url=${url}`,
    });

  return new Response(JSON.stringify({ previewLinks }), {
    status: 200,
    headers,
  });
}
