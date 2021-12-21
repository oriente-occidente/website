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
const getRecords = async (name, prefixes) => {
  const records = (await allRecords(name)).map((r) => {
    const { id, slug: slugs, isIndex = false, indexType = '' } = r;
    const locales = _.keys(slugs);

    let paths = {};
    if (prefixes) {
      paths = locales.reduce((obj, l) => {
        const prefix = prefixes[l] || [];
        const path = [...prefix, slugs[l]];
        return { ...obj, [l]: path };
      }, {});
    }
    return {
      id,
      slugs: paths,
      isIndex,
      indexType,
      __typename: name,
    };
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

function getPrefix(menu, nameToMatch) {
  const item = menu.find((r) => r.indexType === nameToMatch);
  console.log(nameToMatch, item?.slugs);
  return item?.slugs ?? null;
}

function withAlts(list) {
  return list.map((route) => {
    const { slugs } = route;
    const paths = _.keys(slugs).map((locale) => {
      return { locale, slugs: slugs[locale] };
    });
    const urls = _.keys(slugs).map((locale) => {
      return { locale, url: slugs[locale].join('/') };
    });
    return { ...route, paths, urls };
  });
}

const generateRoutes = async () => {
  const locales = (await getLocales()).site.locales;
  console.log('locales', locales);

  const menuTree = await getData();
  const menuVoices = menuTree.menu;
  const menuRoutes = locales.reduce((all, l) => {
    const menuByLocale = getMenupathByLocale(menuVoices, l);
    return [...all, ...menuByLocale];
  }, []);

  // console.log(menuRoutes);
  const linkedPagesIds = menuRoutes.map((i) => i.link?.id).filter(Boolean);
  const ids = _.uniq(linkedPagesIds);
  const menuList = menuRoutes.map((route) => {
    const {
      lang,
      routes: slugs,
      link: { id, indexType, isIndex },
    } = route;

    return { id, indexType, isIndex, lang, slugs };
  });
  let menuGrouped = _.groupBy(menuList, 'id');

  const menu = _.values(menuGrouped).map((values) => {
    const slugs = values.reduce((merged, current) => {
      const { slugs, lang } = current;
      return {
        ...merged,
        [lang]: slugs,
      };
    }, {});

    const { id, isIndex, indexType } = values[0];
    return { id, isIndex, indexType, slugs, __typename: 'page' };
  });

  const pages = (await getRecords('page')).filter((r) => !ids.includes(r.id));
  const events = await getRecords('event', getPrefix(menu, 'other-events'));
  const courses = await getRecords('workshop', getPrefix(menu, 'workshops'));
  const projects = await getRecords('project', getPrefix(menu, 'projects'));
  const residences = await getRecords(
    'artist',
    getPrefix(menu, 'artistic-residences')
  );
  const artists = await getRecords(
    'artist',
    getPrefix(menu, 'associated-artists')
  );
  const news = await getRecords('news', getPrefix(menu, 'news'));

  const list = withAlts([
    ...menu,
    ...pages,
    ...events,
    ...courses,
    ...projects,
    ...artists,
    ...residences,
    ...news,
  ]);

  fs.writeFileSync(
    'data/menu.json',
    JSON.stringify(menuRoutes, null, 2),
    'utf8'
  );
  fs.writeFileSync('data/routes.json', JSON.stringify(list, null, 2), 'utf8');
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
