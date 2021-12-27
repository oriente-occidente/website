// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE && process.env.ANALYZE === 'true',
// });

module.exports = {
  i18n: {
    locales: ['it', 'en'],
    defaultLocale: 'it',
  },
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/(prodotti|products|ciccio)/:category',
  //       destination: '/categories/:category',
  //     },
  //   ];
  // },
};
