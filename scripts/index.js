const nodeEnv = process.env.NODE_ENV || 'develop';
if (nodeEnv === 'develop') {
  require('dotenv').config({ path: '.env.local' });
}

const getConfig = require('./get_config');
const getMarkets = require('./get_markets');
const getAddresses = require('./get_addresses');
// const getSkus = require('./get_skus');
const getThemeColors = require('./get_theme_colors');
const cleanUp = require('./cleanup');

(async () => {
  try {
    const start = Date.now();
    // await getSkus();
    await getThemeColors();
    await getConfig();
    const elapsed = (Date.now() - start) / 1000;
    console.log(`script done in ${elapsed.toFixed(2)} sec`);
  } catch (error) {
    console.error('ERROR', error);
  }
})();
