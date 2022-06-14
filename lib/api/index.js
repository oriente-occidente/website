import routes from 'data/routes.json';
import * as q from 'lib/queries';
import fetchData from 'lib/fetchData';
import { getBaseDate } from 'lib/utils';

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

const getFromPaths = () => {
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

const matchRouteParams = (locale, params) => {
  const slug = params.slugs.join('/');
  // console.log('slug', slug);
  const list = routes
    .map((r) => {
      const { id, slugs } = r;
      if (!(slugs && slugs[locale])) {
        // console.log('BROKEN ROUTE', r);
        return null;
      }
      return { id, slug: slugs[locale].join('/') };
    })
    .filter(Boolean);
  const match = list.find((l) => l.slug === slug);
  if (!match) return null;
  const pageInfo = routes.find((r) => r.id === match.id);
  return pageInfo;
};

async function queryRoutesByParams(params, locale, preview = false) {
  // console.log('QUERY ROUTES BY PARAMS', params, locale, preview);
  let slug = params?.slugs?.slice(-1);
  if (Array.isArray(slug)) slug = slug[0];
  // console.log('SLUG', slug);

  const result = await fetchData(q.getInfoBySlug, { slug, locale }, preview);
  // console.log('result', result);
  const data = Object.keys(result).reduce((obj, key) => {
    const values = result[key];
    if (values && values.length > 0) {
      let r = values[0];
      let group = null;
      //TODO, get group from page variants
      if (key === 'artist') {
        group =
          r.associatedArtist?.length > 0
            ? 'associated-artists'
            : 'artistic-residences';
      } else if (key === 'workshop') {
        group = r.isWorkshop ? 'workshops' : 'languages';
      } else if (key === 'event') {
        group = r.isFestival ? 'festival-events' : 'other-events';
      } else if (key == 'page') {
        group = key;
      } else if (key === 'news') {
        group = 'news-index';
      } else {
        group = `${key}s`;
      }

      obj = {
        ...r,
        __typename: key,
        group,
        slugs: { [locale]: params.slugs },
      };
    }
    return obj;
  }, {});

  return data;
}

export const doQuery = async (locale, params, preview = false) => {
  const queries = [];
  queries.push({ query: 'site', values: { locale } });

  let pageInfo = matchRouteParams(locale, params);
  if (!pageInfo) {
    pageInfo = await queryRoutesByParams(params, locale);
  }

  // console.log('PAGE INFO', pageInfo);
  const { __typename: type, isIndex, indexType, id } = pageInfo;
  const start = getBaseDate();
  const values = { id, locale };
  switch (type) {
    case 'page':
      queries.push({ query: 'page', values });
      if (isIndex && indexType) {
        let v = { locale };
        if (indexType === 'festival-events') {
          queries.push({ query: 'festivalDates', values: null });
          //const year = parseInt(new Date().getFullYear());
          // console.log('year', year);
          // const start = `${year}-01-01`;
          // const end = `${year + 1}-01-01`;
          // v = { locale, start, end };
        } else {
          const name = indexType.replace('-', '_');
          // console.log('COLLECTION NAME', name);
          if (['workshops', 'languages'].includes(name)) {
            v = { locale, start };
          }
          queries.push({
            query: name,
            values: v,
          });
        }
      }
      break;

    case 'event':
    case 'project':
    case 'artist':
    case 'news':
    case 'network':
    case 'language':
    case 'workshop':
      queries.push({ query: type, values });
      break;

    default:
      break;
  }
  // console.log('queries', queries);

  const results = await Promise.all(
    queries.map((i) => fetchData(q[i.query], i.values), preview)
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

    if (!pageInfo) {
      pageInfo = await queryRoutesByParams(params, locale);
    }

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
        case 'language':
        case 'artist':
        case 'news':
        case 'network':
          queries.push({ query: type, values });
          break;
        default:
          break;
      }
    }
  }
  const results = await Promise.all(
    queries.map((i) => fetchData(q[i.query], i.values))
  );
  const data = results.reduce((merge, result) => {
    return { ...merge, ...result };
  }, {});
  // console.log(data);
  return { pageInfo, ...data };
};

export const doQueryItem = async (locale, itemId) => {
  let myQuery = null;
  let pageInfo = null;
  if (itemId) {
    // console.log('ITEM ID', itemId);
    pageInfo = routes.find((r) => r.id === itemId);
    // console.log('pageInfo', pageInfo);
    if (pageInfo) {
      const { __typename: type, id } = pageInfo;
      const values = { id, locale };
      myQuery = { query: type, values };
    }
  }
  // console.log('query', myQuery);

  const data = await fetchData(q[myQuery.query], myQuery.values);
  return { pageInfo, ...data[pageInfo.__typename] };
};
