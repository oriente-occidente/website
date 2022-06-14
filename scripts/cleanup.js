const path = require('path');
const fs = require('fs');

function cleanup() {
  const DATA_FOLDER = path.resolve('./data');
  try {
    fs.rmSync(DATA_FOLDER, { recursive: true, force: true });
  } catch (error) {
    console.error('ERROR', error);
  }
  try {
    fs.mkdirSync(DATA_FOLDER);
  } catch (error) {
    console.error('ERROR', error);
  }
}

module.exports = cleanup;
