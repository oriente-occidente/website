import * as dayjs from 'dayjs';
import sortBy from 'lodash/sortBy';

import routes from 'data/routes.json';

export function resolveLinkById(id, locale = 'it', group = null) {
  // console.log('ID', id);
  const route = group
    ? routes.find((r) => r.id === id && r.group == group)
    : routes.find((r) => r.id === id);
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

export function formatDate(str, locale = 'it', isDaily = false) {
  // console.log('FORMAT DATE', str, locale);
  const fmt = isDaily ? 'MMM DD YYYY HH:mm' : 'MMM DD YYYY';
  return dayjs(str).locale(locale).format(fmt);
}

function findNearesDate(dates) {
  const today = dayjs();

  const withScores = dates.map((date) => {
    return {
      date,
      score: Math.abs(today.diff(date.startTime, 'day')),
    };
  });
  const sorted = sortBy(withScores, 'score');
  return sorted[0];
}

export function showDates(dates, locale) {
  if (dates.length === 0) return '';
  let choosen = [];
  if (dates.length === 1) {
    choosen = dates[0];
  } else {
    choosen = findNearesDate(dates);
  }
  return formatDate(choosen.startTime, locale, choosen.isDaily);
}

export const closestInterval = (intervals) => {
  if (!intervals || intervals.length === 0) return null;
  return intervals[0];
};

const matchRoute = (locale, slug) => {
  const match = routes.find((r) => r.slugs[locale]?.join('/') === slug);
  return match ? `/${match?.slugs[locale]?.join('/') ?? ''}` : null;
};

export function getBreadcrumbs(prefix = [], slug, locale) {
  const slugs = Array.from(new Set([...prefix, slug]));
  // const currentPath = matchRoute(locale, slugs.join('/'));
  const prefixLink =
    prefix.length > 0
      ? matchRoute(locale, prefix.slice(0, -1).join('/')) || '#'
      : '#';

  const paths = slugs.map((p) => {
    return {
      name: p.replace('-', ' '),
      href: p === slug ? '#' : prefixLink,
      current: p === slug,
    };
  });
  return paths;
}
