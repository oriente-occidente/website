module.exports = {
  siteUrl: process.env.SITE_URL || 'https://orienteoccidente.netlify.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: [
    '/404',
    '/forms/register',
    '/forms/thankyou',
    '/forms/contact',
    '/en/404',
    '/en/forms/register',
    '/en/forms/thankyou',
    '/en/forms/contact',
  ],
};
