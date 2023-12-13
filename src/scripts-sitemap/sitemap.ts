import * as dotenv from "dotenv";
import path from "path";
import { promises as fs } from "fs";

import { generatePaths } from "./generatePaths";
let HOST = process.env.NEXT_PUBLIC_HOST || "";
const FOLDER = path.resolve("./public");
const NEWLINE = "";

async function generateRobots() {
  const start = Date.now();
  const data = `
# *
User-agent: *
Allow: /

# Host
Host: ${HOST}

# Sitemaps
Sitemap: ${HOST}/sitemap.xml`;
  await fs.writeFile(`${FOLDER}/robots.txt`, data.trim());
  const elapsed = (Date.now() - start) / 1000;
  console.info("DONE GENERATE ROBOTS in", elapsed);
}

function getRoute(path: string) {
  return `
  <url>
    <loc>${HOST}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap() {
  const paths: string[] = await generatePaths();
  console.log("locales", paths);

  const sitemap = `
  <\?xml version="1.0" encoding="UTF-8"\?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${paths.map((p) => getRoute(p)).join(NEWLINE)}
  </urlset>`.trim();
  console.info("sitemap items", paths.length);
  await fs.writeFile(`${FOLDER}/sitemap.xml`, sitemap);
}

(async () => {
  const start = Date.now();
  await generateRobots();
  await generateSitemap();
  const elapsed = (Date.now() - start) / 1000;
  console.info("DONE GENERATE SITEMAP in", elapsed);
})();
