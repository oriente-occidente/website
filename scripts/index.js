const nodeEnv = process.env.NODE_ENV || 'develop';
if (nodeEnv === 'develop') {
  require('dotenv').config({ path: '.env.local' });
}

// const getConfig = require('./get_config');
const getSlugs = require('./get_slugs');

(async () => {
  try {
    const start = Date.now();
    // await getSkus();
    await getSlugs();
    // await getConfig();
    const elapsed = (Date.now() - start) / 1000;
    console.log(`script done in ${elapsed.toFixed(2)} sec`);
  } catch (error) {
    console.error('ERROR', error);
  }
})();
