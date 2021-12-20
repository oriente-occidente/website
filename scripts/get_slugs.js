const nodeEnv = process.env.NODE_ENV || 'develop';
if (nodeEnv === 'develop') {
  require('dotenv').config({ path: '.env.local' });
}
const fs = require('fs');
const _ = require('lodash');
const { doQuery, allRecords } = require('./dato');

const getData = async () => {
  const q = `
  query all {
    pages: allPages {
      id
      slugs: _allSlugLocales {
        locale
        value
      }
    }
    menu: allMenuItems(filter: {parent: {exists: "false"}}) {
      ...itemFrag
      parent {
        ...itemFrag
        parent {
          ...itemFrag
        }
      }
    }
  }
  fragment itemFrag on MenuItemRecord {
    id
    slugs: _allSlugLocales {
      locale
      slug: value
    }
    link {
      __typename
      ... on HomeRecord {
        id
      }
      ... on PageRecord {
        id
        slug
        indexType
        isIndex
      }
    }
}
  `;
  return doQuery(q);
};
const getCourses = async (data) => {
  const records = await allRecords('workshop');
  console.log('events', records);
};

const outPath = 'data/routes.json';
const generateRoutes = async () => {
  const data = await getData();
  if (data) {
    const json = JSON.stringify(data, null, 2);
    // fs.writeFileSync(outPath, json, 'utf8');
    console.log('done');
  }
  const courses = getCourses(data);
};

(async () => {
  try {
    const start = Date.now();
    await generateRoutes();
    const elapsed = (Date.now() - start) / 1000;
    console.log(`script done in ${elapsed.toFixed(2)} sec`);
  } catch (error) {
    console.error('ERROR', error);
  }
})();

// module.exports = generateRoutes;
