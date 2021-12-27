const nodeEnv = process.env.NODE_ENV || 'develop';
if (nodeEnv === 'develop') {
  require('dotenv').config({ path: '.env.local' });
}

const getConfig = require('./getConfig');
const getRoutes = require('./getRoutes');

(async () => {
  try {
    const start = Date.now();
    await getRoutes();
    await getConfig();
    const elapsed = (Date.now() - start) / 1000;
    console.log(`script done in ${elapsed.toFixed(2)} sec`);
  } catch (error) {
    console.error('ERROR', error);
  }
})();
