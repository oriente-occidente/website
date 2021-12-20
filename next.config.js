const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE && process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
  },

  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/(prodotti|products|ciccio)/:category',
        destination: '/categories/:category',
      },
    ];
  },
});
