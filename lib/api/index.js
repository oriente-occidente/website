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

const matchRoute = (locale, params) => {
  const slug = params.slugs.join('/');
  console.log('slug', slug);
  const list = routes.map((r) => {
    const { id, slugs } = r;
    console.log('slugs', slugs);
    return { id, slug: slugs[locale].join('/') };
  });
  const match = list.find((l) => l.slug === slug);
  const pageInfo = routes.find((r) => r.id === match.id);
  return pageInfo;
};

export const doQuery = async (locale, params) => {
  const pageInfo = matchRoute(locale, params);
  const { __typename: type, isIndex, indexType, id } = pageInfo;
  let queries = [{ query: q.site, values: { locale } }];
  let values = { id, locale };
  // switch (type) {
  //   case 'page':
  //     queries.push({ query: q.page, values });
  //     if (isIndex && indexType) {
  //       queries.push({
  //         query: q[indexType.replace('-', '_')],
  //         valules: { locale },
  //       });
  //     }
  //     break;
  //   case 'event':
  //   case 'project':
  //   case 'workshop':
  //   case 'artist':
  //   case 'news':
  //     queries.push({ query: q[type], values });
  //     break;
  //   default:
  //     break;
  // }

  console.log('pageInfo', pageInfo);
  console.log('type', type);
  console.log('id', id);

  const data = await Promise.all(
    queries.map((i) => fetchData(i.query, i.values))
  ).reduce((merge, result) => {
    return { ...merge, ...result };
  }, {});
  console.log('data', data);
  return { id, type, pageInfo, data };
};
