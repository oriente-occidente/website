import routes from 'data/routes.json';
import * as q from 'lib/queries';
import fetchData from './dato';

const matchRoute = (locale, params) => {
  const { slugs } = params;
  const slug = slugs.join('/');
  const list = routes.map((r) => {
    const { id, slugs } = r;
    return { id, slug: slugs[locale].join('/') };
  });

  const match = list.find((l) => l.slug === slug);
  const pageInfo = routes.find((r) => r.id === match.id);
  return pageInfo;
};

export const doQuery = async (locale, params) => {
  const pageInfo = matchRoute(locale, params);
  const { __typename: type, isIndex, indexType, id } = pageInfo;
  let queries = [];
  let values = { id, locale };
  switch (type) {
    case 'page':
      queries.push({ query: q.page, values });
      if (isIndex && indexType) {
        queries.push({ query: q[indexType], valules: { locale } });
      }
      break;
    case 'project':
    case 'artist':
    case 'event':
    case 'news':
    case 'workshop':
      queries.push({ query: q[type], values });
      break;
    default:
      break;
  }

  const data = await Promise.all(
    queries.map((q) => fetchData(q.query, q.values))
  ).reduce((merge, result) => {
    return { ...merge, ...result.data };
  }, {});
  return { id, type, data };
};
