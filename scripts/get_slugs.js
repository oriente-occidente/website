
const nodeEnv = process.env.NODE_ENV || 'develop';
if (nodeEnv === 'develop') {
  require('dotenv').config({ path: '.env.local' });
}
const axios = require('axios');
const fs = require('fs');
const _ = require('lodash');
const KEY = process.env.NEXT_PUBLIC_DATO_API_TOKEN;
const PROJECT_NAME = process.env.PROJECT_NAME;
const ENV = process.env.NEXT_PUBLIC_DATO_ENV ?? '';

const config = require('../data/config.json');
const marketData = require('../data/markets.json');

const doQuery = async (q, v) => {
  const url = `https://graphql.datocms.com${ENV ? '/environments/' + ENV : ''}`;

  try {
    const response = await axios({
      url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${KEY}`,
      },
      data: { query: q, variables: v },
    });
    console.log('status', response?.status);
    if (response?.data?.errors) {
      console.log('response ERROR', response?.data?.errors);
      throw error;
    }
    return response?.data?.data;
  } catch (error) {
    console.log('QUERY ERROR', error, 'on query', q);
    throw error;
  }
};

const getPaths = (data, langs = []) => {
  const markets = data?.slice(0, 2).map(({ market_name }) => {
    const [market, currency] = market_name.split(' ');
    return { market: market.toLowerCase(), currency: currency.toLowerCase() };
  });

  if (langs.length === 0) {
    return _.orderBy(markets, ['market', 'currency']);
  }

  const paths = langs
    .map((lang) => {
      return _.uniqBy(markets, 'market').map(({ market, currency }) => {
        return { currency, market, lang };
      });
    })
    .flat();

  return _.orderBy(paths, ['market', 'currency', 'lang']);
};
const locales = config.locales.map((l) => l.code);
const markets = getPaths(marketData, []);
const prefixes = getPaths(marketData, locales);

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
    products: allProducts {
      id
      slug
      slugs: _allSlugLocales {
        locale
        value
      }
    }
    categories: allCategories(filter: {parent: {exists: "false"}}) {
      id
      slug
      slugs: _allSlugLocales {
        locale
        value
      }
      children {
        id
        slug
        slugs: _allSlugLocales {
          locale
          value
        }
      }
    }
  }
  `;
  return doQuery(q);
};

function getCustomPages() {
  const composed = ['cart', 'checkout'].reduce((list, page) => {
    const pageWithPrefixes = prefixes.map((prefix) => {
      return { ...prefix, page };
    });
    return [...list, ...pageWithPrefixes];
  }, []);

  const paths = composed.reduce((all, { market, currency, lang, page }) => {
    return [
      ...all,
      {
        type: 'custom-page',
        locale: lang,
        slugs: [market, currency, lang, page],
        path: `/${market}/${currency}/${lang}/${page}`,
      },
    ];
  }, []);
  return paths;
}

function getPages(reponse) {
  const pgs = reponse?.pages ?? [];
  const flat = pgs.map((p) => p.slugs).flat();

  console.log('PAGES', flat.length, flat);

  const composed = flat.reduce((list, page) => {
    const pageWithPrefixes = markets.map((prefix) => {
      return { ...prefix, lang: page.locale, page: page.value };
    });
    return [...list, ...pageWithPrefixes];
  }, []);

  // console.log('composed', _.orderBy(composed, ['market', 'lang']));
  const paths = composed.reduce((all, { market, currency, lang, page }) => {
    return [
      ...all,
      {
        type: 'page',
        locale: lang,
        slugs: [market, currency, lang, page],
        path: `/${market}/${currency}/${lang}/${page}`,
      },
    ];
  }, []);
  return paths;
}

const subPaths = {
  categories: {
    it: 'categorie',
    en: 'categories',
    de: 'kategorien',
  },
  products: {
    it: 'prodotti',
    en: 'products',
    de: 'produkte',
  },
};

function getProducts(reponse) {
  const products = reponse?.products ?? [];
  const flat = products.map((p) => p.slugs).flat();
  console.log('PRODUCTS', flat.length, flat);

  const productSlugs = products.reduce((list, p) => {
    const withPrefixes = prefixes.map((prefix) => {
      const slug = p.slugs.find((s) => s.locale === prefix.lang).value;
      const subpath = subPaths.products[prefix.lang];
      return { ...prefix, product: [subpath, slug] };
    });
    return [...list, ...withPrefixes];
  }, []);

  const paths = productSlugs.reduce(
    (all, { market, currency, lang, product }) => {
      return [
        ...all,
        {
          type: 'product',
          locale: lang,
          slugs: [market, currency, lang, ...product],
          path: `/${market}/${currency}/${lang}/${product.join('/')}`,
        },
      ];
    },
    []
  );

  return paths;
}

function getCategories(res) {
  function traverseCategory(cat, locale, parent = null) {
    let slug = cat.slugs.find((c) => c.locale === locale).value;
    if (parent) {
      slug = parent + '|' + slug;
    } else {
      slug = locale + '|' + slug;
    }

    let childrenSlugs = cat.children?.map((c) =>
      traverseCategory(c, locale, slug)
    );
    if (!childrenSlugs) {
      childrenSlugs = [];
    }
    const sub = childrenSlugs.flat();
    return [slug, ...sub];
  }

  const tree = res?.categories ?? [];
  const realCats = locales.reduce((list, locale) => {
    const categoriesXLocale = tree.reduce((all, cat) => {
      const catRoutes = traverseCategory(cat, locale).map((str) => {
        const parts = str.split('|');
        const [lang, ...slugs] = parts;
        const subpath = subPaths.categories[lang];
        return { lang, slugs: [subpath, ...slugs] };
      });
      return [...all, ...catRoutes];
    }, []);
    return [...list, ...categoriesXLocale];
  }, []);

  console.log('CATS', realCats.length, realCats);

  const catSlugs = realCats.reduce((list, cat) => {
    const { lang, slugs } = cat;
    const withPrefixes = markets.map((m) => {
      return { ...m, lang, category: slugs };
    });
    return [...list, ...withPrefixes];
  }, []);

  const paths = catSlugs.reduce((all, { market, currency, lang, category }) => {
    return [
      ...all,
      {
        type: 'category',
        locale: lang,
        slugs: [market, currency, lang, ...category],
        path: `/${market}/${currency}/${lang}/${category.join('/')}`,
      },
    ];
  }, []);

  return paths;
}

const outPath = 'data/routes.json';
const generateRoutes = async () => {
  const response = await getData();
  const customPages = getCustomPages();
  const pages = getPages(response);
  const products = getProducts(response);
  const categories = getCategories(response);

  console.log('MARKETS', markets.length);

  const data = [...categories, ...products, ...pages, ...customPages];
  console.log('TOTAL ROUTES', data.length + prefixes.length);

  /*
  const data = {
    homes: prefixes,
    customPages,
    pages,
    products,
    categories,
  };
  const length = _.keys(data).reduce((sum, key) => sum + data[key].length, 0);
  console.log('TOTAL ROUTES', length);
*/

  if (data) {
    const json = JSON.stringify(data, null, 2);
    fs.writeFileSync(outPath, json, 'utf8');
    console.log('done');
  }
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
