import * as dayjs from 'dayjs';

import routes from 'data/routes.json';

export function resolveLinkById(id, locale = 'it') {
  // console.log('ID', id);
  const route = routes.find((r) => r.id === id);
  // console.log('ROUTE', route);
  const url = `/${route?.slugs[locale]?.join('/') ?? ''}`;
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

export function formatDate(str, locale = 'it') {
  console.log('FORMAT DATE', str, locale);
  return dayjs(str).locale(locale).format('MMM DD YYYY');
}

export const closestInterval = (intervals) => {
  if (!intervals || intervals.length === 0) return null;
  return intervals[0];
};
