const nodeEnv = process.env.NODE_ENV || 'develop';
if (nodeEnv === 'develop') {
  require('dotenv').config({ path: '.env.local' });
}
const fs = require('fs');
const _ = require('lodash');
const { doQuery, allRecords } = require('./dato');

const getLocales = async () => {
  return doQuery(`query locales { site:_site{ locales } }`);
};

const getDataByLocale = async (locale) => {
  const q = `
query menu($locale: SiteLocale) {
  menu: allMenuItems(filter: {parent: {exists: "false"}},locale:$locale) {
    ...itemFrag
    children {
      ...itemFrag
      children {
        ...itemFrag
        children {
          ...itemFrag
          children {
            ...itemFrag
          }
        }
      }
    }
  }
}
fragment itemFrag on MenuItemRecord {
  id
  slug
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
  const v = { locale };
  return doQuery(q, v);
};

const getData = async () => {
  const q = `
query menu  {
  menu: allMenuItems(filter: {parent: {exists: "false"}} ) {
    ...itemFrag
    children {
      ...itemFrag
      children {
        ...itemFrag
        children {
          ...itemFrag
          children {
            ...itemFrag
          }
        }
      }
    }
  }
}
fragment itemFrag on MenuItemRecord {
  id
  slug
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
      slugs: _allSlugLocales {
        locale
        slug: value
      }
      indexType
      isIndex
    }
  }
}
`;
  return doQuery(q);
};
const getRecords = async (name) => {
  const records = (await allRecords(name)).map((r) => {
    const { id, slug, isIndex = false, indexType = '' } = r;
    return { id, slugs: slug, isIndex, indexType };
  });
  // console.log(name, records);
  return records;
};

function traverse(item, lang, parent = null) {
  const { slugs, link } = item;
  const slug = slugs.find((s) => s.locale === lang).slug;
  // console.log('visiting ' + slug);
  let routes = [];
  if (parent?.routes?.length > 0) {
    routes = [...parent.routes];
  }

  routes.push(slug);
  const current = { routes, link, lang };

  if (item.children.length === 0) {
    // console.log('isleaf');
    return current;
  } else {
    return item.children.map((c) => traverse(c, lang, current)).flat();
  }
}

function getMenupathByLocale(menu, locale) {
  const routes = menu.reduce((paths, voice) => {
    const voiceRoutes = traverse(voice, locale);
    return Array.isArray(voiceRoutes)
      ? [...paths, ...voiceRoutes]
      : [...paths, voiceRoutes];
  }, []);
  return routes;
}

const outPath = 'data/routes.json';
const generateRoutes = async () => {
  const menuTree = await getData();
  const locales = (await getLocales()).site.locales;
  console.log('locales', locales);
  const menuVoices = menuTree.menu;
  const menuRoutes = locales.reduce((all, l) => {
    const menuByLocale = getMenupathByLocale(menuVoices, l);
    return [...all, ...menuByLocale];
  }, []);

  // console.log(menuRoutes);
  const linkedPagesIds = menuRoutes.map((i) => i.link?.id).filter(Boolean);
  const ids = _.uniq(linkedPagesIds);
  console.log(ids);

  const pages = (await getRecords('page')).filter((r) => !ids.includes(r.id));
  const events = await getRecords('event');
  const courses = await getRecords('workshop');
  const projects = await getRecords('project');
  const artists = await getRecords('artist');
  const news = await getRecords('news');

  const data = {
    menuRoutes,
    pages,
    courses,
    projects,
    artists,
    events,
    news,
  };

  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(outPath, json, 'utf8');
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
