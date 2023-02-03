const fs = require('fs');
let HOST = process.env.HOST || '';
const NEWLINE = '';

function getRoute(str) {
  return `
  <url>
    <loc>${HOST}${str}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

function generateSitemap() {
  const rawdata = fs.readFileSync('data/urls.json');
  const urls = JSON.parse(rawdata);
  const start = Date.now();
  const sitemap = `
    <\?xml version="1.0" encoding="UTF-8"\?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
        ${['', ...urls].map((p) => getRoute(p)).join(NEWLINE)}
    </urlset>`;
  fs.writeFileSync(`public/sitemap.xml`, sitemap.trim());
  const elapsed = (Date.now() - start) / 1000;
  console.log('DONE GENERATE SITEMAP in', elapsed);
}

module.exports = generateSitemap;
