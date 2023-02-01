require('dotenv').config();
const fs = require('fs');
let HOST = process.env.HOST || '';
const NEWLINE = '';

function getRoute(str) {
  return `
  <url>
    <loc>${HOST}/${str}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

async function generateSitemap(urls) {
  const start = Date.now();

  const sitemap = `
  <\?xml version="1.0" encoding="UTF-8"\?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls.map((p) => getRoute(p)).join(NEWLINE)}
  </urlset>`;
  await fs.writeFile(`${FOLDER}/sitemap.xml`, sitemap.trim());
  const elapsed = (Date.now() - start) / 1000;
  console.log('DONE GENERATE SITEMAP in', elapsed);
}
