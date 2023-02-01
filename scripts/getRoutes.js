const fs = require('fs');
const _ = require('lodash');
const { doQuery, allRecords } = require('./dato');

const getLocales = async () => {
  return doQuery(`query locales { site:_site{ locales } }`);
};

const getData = async () => {
  const q = `query menu  {
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
}`;
  return doQuery(q);
};

function traverse(item, lang, parent = null) {
  const { slugs, link } = item;
  const slug = slugs.find((s) => s.locale === lang)?.slug;
  // console.log('visiting ' + slug);

  let routes = [];
  if (parent?.routes?.length > 0) {
    routes = [...parent.routes];
  }
  if (slug) {
    routes.push(slug);
  }

  const current = { routes, link, lang };
  if (item.children.length === 0) {
    // console.log('isleaf', current.routes, link.slug);
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

function getPrefix(menu, nameToMatch, log = false) {
  if (log) {
    console.log('getPrefix', nameToMatch);
  }
  const item = menu.find((r) => r.indexType === nameToMatch);

  if (log) {
    console.log('slugs', item?.slugs);
  }
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

const getRecords = async (
  list,
  name,
  prefixes,
  group = 'page',
  log = false
) => {
  if (log) {
    console.log('getRecords', name);
    console.log('prefixes', prefixes);
  }

  const records = list.map((r) => {
    const { id, slug: slugs, isIndex = false, indexType = '' } = r;
    const locales = _.keys(slugs);
    let paths = locales.reduce((obj, l) => {
      const path = [slugs[l]];
      return { ...obj, [l]: path };
    }, {});
    if (prefixes) {
      paths = locales.reduce((obj, l) => {
        const prefix = prefixes[l] || [];
        const path = [...prefix, slugs[l]];
        return { ...obj, [l]: path };
      }, {});
    }
    if (log) {
      console.log('paths', paths);
    }

    return {
      id,
      slugs: paths,
      isIndex,
      indexType,
      __typename: name,
      group,
    };
  });
  if (log) {
    console.log('RECORDS', JSON.stringify(records, null, 2));
  }
  return records;
};

const getPaths = (routes) => {
  const paths = routes.reduce((all, r) => {
    const routePaths = r.paths.map((p) => {
      const { slugs, locale } = p;
      return { params: { slugs }, locale };
    });
    return [...all, ...routePaths];
  }, []);
  console.log('paths', paths);
  return paths;
};

const generateRoutes = async () => {
  const locales = (await getLocales()).site.locales;
  // console.log('locales', locales);

  const menuTree = await getData();
  const menuVoices = menuTree.menu;
  // console.log('menuVoices', JSON.stringify(menuVoices, null, 2));

  const menuRoutes = locales.reduce((all, l) => {
    const menuByLocale = getMenupathByLocale(menuVoices, l);
    return [...all, ...menuByLocale];
  }, []);

  const linkedPagesIds = menuRoutes.map((i) => i.link?.id).filter(Boolean);
  const ids = _.uniq(linkedPagesIds);
  const menuList = menuRoutes
    .map((route) => {
      const { lang, routes: slugs, link } = route;
      if (link) {
        const { id, indexType, isIndex } = link;
        return { id, indexType, isIndex, lang, slugs };
      }
      return null;
    })
    .filter(Boolean);
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

  //get the pages not in menu
  const pageList = (await allRecords('page')).filter(
    (r) => !ids.includes(r.id)
  );
  const pages = await getRecords(pageList, 'page');

  //get the projects list
  const pjList = await allRecords('project');
  const projects = await getRecords(
    pjList,
    'project',
    getPrefix(menu, 'projects'),
    'projects'
  );

  const ntwList = await allRecords('network');
  const networks = await getRecords(
    ntwList,
    'network',
    getPrefix(menu, 'networks'),
    'networks'
  );

  //get the news items
  const newsList = await allRecords('news');
  const news = await getRecords(
    newsList,
    'news',
    getPrefix(menu, 'news-index'),
    'news-index'
  );

  //split artists into groups
  const artists = await allRecords('artist');
  const aa = artists.filter((r) => r.associatedArtist?.length > 0);
  const associated = await getRecords(
    aa,
    'artist',
    getPrefix(menu, 'associated-artists'),
    'associated-artists'
  );
  const ar = artists.filter((r) => r.artisticResidence?.length > 0);
  const residences = await getRecords(
    ar,
    'artist',
    getPrefix(menu, 'artistic-residences'),
    'artistic-residences'
  );

  //split events into groups
  const allEvents = await allRecords('event');
  const fe = allEvents.filter((event) => event.isFestival);
  const festival = await getRecords(
    fe,
    'event',
    getPrefix(menu, 'festival-events'),
    'festival-events'
  );
  const oe = allEvents.filter((event) => !event.isFestival);
  const events = await getRecords(
    oe,
    'event',
    getPrefix(menu, 'other-events'),
    'other-events'
  );

  //split courses into groups
  const allWorkshops = await allRecords('workshop');
  const ws = allWorkshops.filter((event) => event.isWorkshop);
  const workshops = await getRecords(
    ws,
    'workshop',
    getPrefix(menu, 'workshops'),
    'workshops'
  );
  const cs = allWorkshops.filter((event) => !event.isWorkshop);
  const languages = await getRecords(
    cs,
    'workshop',
    getPrefix(menu, 'languages'),
    'languages'
  );

  const list = withAlts([
    ...menu,
    ...pages,
    ...festival,
    ...events,
    ...workshops,
    ...languages,
    ...projects,
    ...associated,
    ...residences,
    ...news,
    ...networks,
  ]);

  fs.writeFileSync(
    'data/menu.json',
    JSON.stringify(menuRoutes, null, 2),
    'utf8'
  );
  console.log('routes len', list.length);
  fs.writeFileSync('data/routes.json', JSON.stringify(list, null, 2), 'utf8');

  const testPaths = await getPaths(list);
  const urls = testPaths
    .map(
      (p) =>
        `${p.locale != 'it' ? '/' + p.locale : ''}/${p.params.slugs.join('/')}`
    )
    .sort();
  fs.writeFileSync('data/urls.json', JSON.stringify(urls, null, 2), 'utf8');
};

// (async () => {
//   try {
//     const start = Date.now();
//     await generateRoutes();
//     const elapsed = (Date.now() - start) / 1000;
//     console.log(`script done in ${elapsed.toFixed(2)} sec`);
//   } catch (error) {
//     console.error('ERROR', error);
//   }
// })();

module.exports = generateRoutes;
