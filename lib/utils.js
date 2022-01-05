import routes from 'data/routes.json';

export function resolveLinkById(id, locale = 'it') {
  // console.log('ID', id);
  const route = routes.find((r) => r.id === id);
  // console.log('ROUTE', route);
  const url = `${route?.slugs[locale]?.join('/') ?? ''}`;
  // console.log('URL', url);
  return url;
}

export function camelCase(str, separator = '-') {
  const [prefix, ...rest] = str.split(separator);
  return [
    prefix.toLowerCase(),
    ...rest.map((chunk) => {
      const firstLetter = chunk.slice(0, 1).toUpperCase();
      return `${firstLetter}${chunk.slice(1).toLowerCase()}`;
    }),
  ].join('');
}
