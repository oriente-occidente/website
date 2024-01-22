import type { NextApiRequest, NextApiResponse } from "next";
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // setup CORS permissions
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Content-Type", "application/json");
  // This will allow OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).send("ok");
  }
  console.info("req.body", req.body);

  const url = await generatePreviewUrl(req.body);
  if (!url) {
    return res.status(200).json({ previewLinks: [] });
  }
  const baseUrl = process.env.NEXT_PUBLIC_HOST;

  const previewLinks = [
    // Public URL:
    {
      label: "Published version",
      url: `${baseUrl}${url}`,
    },
    // >This requires an API route on your project that starts Next.js Preview Mode
    // and redirects to the URL provided with the `redirect` parameter:
    {
      label: "Draft version",
      url: `${baseUrl}/api/preview?redirect=${url}`,
    },
  ];
  return res.status(200).json({ previewLinks });
}
