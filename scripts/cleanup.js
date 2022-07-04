const path = require('path');
const fs = require('fs');

function cleanup() {
  const DATA_FOLDER = path.resolve('./data');
  try {
    fs.rmSync(DATA_FOLDER, { recursive: true, force: true });
    console.log('DELETED  folder:', DATA_FOLDER);
  } catch (error) {
    console.error('ERROR', error);
  }
  try {
    fs.mkdirSync(DATA_FOLDER);
    console.log('Created folder:', DATA_FOLDER);
  } catch (error) {
    console.error('ERROR', error);
  }
}

(() => {
  cleanup();
})();
