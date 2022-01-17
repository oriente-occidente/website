import routes from 'data/routes.json';
import * as q from 'lib/queries';
import fetchData from './dato';

export const getPaths = () => {
  const paths = routes.reduce((all, r) => {
    const routePaths = r.paths.map((p) => {
      const { slugs, locale } = p;
      return { params: { slugs }, locale };
    });
    return [...all, ...routePaths];
  }, []);
  return paths;
};

export const getFormPaths = () => {
  const paths = routes
    .filter((r) => ['event', 'project', 'workshop'].includes(r.__typename))
    .reduce((all, r) => {
      const { id } = r;
      const routePaths = r.paths.map((p) => {
        const { locale } = p;
        return { params: { id }, locale };
      });
      return [...all, ...routePaths];
    }, []);
  return paths;
};

const matchRoute = (locale, params) => {
  const slug = params.slugs.join('/');
  // console.log('slug', slug);
  const list = routes
    .map((r) => {
      const { id, slugs } = r;
      if (!(slugs && slugs[locale])) {
        console.log('BROKEN ROUTE', r);
        return null;
      }
      return { id, slug: slugs[locale].join('/') };
    })
    .filter(Boolean);
  const match = list.find((l) => l.slug === slug);
  const pageInfo = routes.find((r) => r.id === match.id);
  return pageInfo;
};

export const doQuery = async (locale, params) => {
  const queries = [];
  queries.push({ query: 'site', values: { locale } });

  const pageInfo = matchRoute(locale, params);
  if (pageInfo) {
    const { __typename: type, isIndex, indexType, id } = pageInfo;
    const values = { id, locale };
    switch (type) {
      case 'page':
        queries.push({ query: 'page', values });
        if (isIndex && indexType) {
          queries.push({
            query: indexType.replace('-', '_'),
            values: { locale },
          });
        }
        break;
      case 'event':
      case 'project':
      case 'workshop':
      case 'artist':
      case 'news':
        queries.push({ query: type, values });
        break;
      default:
        break;
    }
  }
  // console.log('queries', queries);

  const results = await Promise.all(
    queries.map((i) => fetchData(q[i.query], i.values))
  );

  const data = results.reduce((merge, result) => {
    return { ...merge, ...result };
  }, {});

  return { pageInfo, ...data };
};

export const doQueryById = async (locale, params) => {
  const queries = [];
  queries.push({ query: 'site', values: { locale } });

  let pageInfo = null;
  if (params) {
    pageInfo = routes.find((r) => r.id === params.id);
    if (pageInfo) {
      const { __typename: type, isIndex, indexType, id } = pageInfo;
      const values = { id, locale };
      switch (type) {
        case 'page':
          queries.push({ query: 'page', values });
          if (isIndex && indexType) {
            queries.push({
              query: indexType.replace('-', '_'),
              values: { locale },
            });
          }
          break;
        case 'event':
        case 'project':
        case 'workshop':
        case 'artist':
        case 'news':
          queries.push({ query: type, values });
          break;
        default:
          break;
      }
    }
  }
  // console.log('queries', queries);

  const results = await Promise.all(
    queries.map((i) => fetchData(q[i.query], i.values))
  );

  const data = results.reduce((merge, result) => {
    return { ...merge, ...result };
  }, {});

  return { pageInfo, ...data };
};
