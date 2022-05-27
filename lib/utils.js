import * as dayjs from 'dayjs';
import 'dayjs/locale/it';
import sortBy from 'lodash/sortBy';

import routes from 'data/routes.json';
import config from 'data/config.json';

export function getBaseDate() {
  return dayjs().subtract(1, 'year').toDate();
}

export function getLocales() {
  return config?.site?.locales;
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

// ROUTES

export function resolveLinkById(id, locale = 'it', group = null) {
  const route = group
    ? routes.find((r) => r.id === id && r.group == group)
    : routes.find((r) => r.id === id);
  const url = `/${route?.slugs[locale]?.join('/') ?? ''}`;
  return url;
}

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

// SORTS

export function sortDesc(list, field) {
  if (!list) return [];
  return sortBy(list, field).reverse();
}

export function sortAsc(list, field) {
  if (!list) return [];
  return sortBy(list, field);
}

// DATES

export function formatDate(str, locale = 'it', isDaily = false) {
  const fmt =
    locale === 'it'
      ? isDaily
        ? 'DD/MM/YYYY HH:mm'
        : 'DD MMMM YYYY'
      : isDaily
      ? 'MMM DD YYYY HH:mm'
      : 'MMM DD YYYY';
  // dayjs.locale(locale);
  // console.log('DAYJS LOCALE', dayjs.locale(), locale);
  return dayjs(str).locale(locale).format(fmt);
}

export function groupDatesByDay(dates, locale = 'it') {
  // dayjs.locale(locale);
  // console.log('DAYJS LOCALE', dayjs.locale(), locale);
  const groups = dates.reduce((group, date) => {
    const day = dayjs(date.startTime).format('YYYY-MM-DD');
    if (group[day]) {
      group[day].push(date);
    } else {
      group[day] = [date];
    }
    return group;
  }, {});

  return Object.keys(groups).map((day) => {
    const date = dayjs(day)
      .locale(locale)
      .format(locale === 'it' ? 'DD MMMM YYYY' : 'MMM DD YYYY');
    const times = groups[day].reduce((daily, d) => {
      if (d.isDaily) {
        daily.push(dayjs(d.startTime).format('HH:mm'));
      }
      return daily;
    }, []);
    if (times.length > 0) {
      return `${date} - ${locale == 'it' ? 'alle: ' : 'at: '} ${times.join(
        ' , '
      )}`;
    }
    return date;
  });
}

// function findNearesDate(dates) {
//   const today = dayjs();

//   const withScores = dates.map((date) => {
//     const d = dayjs(date.startTime);
//     return {
//       date,
//       score: Math.abs(today.diff(d, 'day')),
//     };
//   });
//   const sorted = sortBy(withScores, 'score');
//   return sorted[0];
// }

// export function showDates(dates, locale) {
//   if (dates.length === 0) return "";
//   let choosen = [];
//   if (dates.length === 1) {
//     choosen = dates[0];
//   } else {
//     choosen = findNearesDate(dates);
//   }
//   return formatDate(choosen.startTime, locale, choosen.isDaily);
// }

export const closestInterval = (intervals) => {
  if (!intervals || intervals.length === 0) return null;
  return intervals[0];
};

function getLastDate(dates) {
  const groups = dates.reduce((group, date) => {
    const day = dayjs(date.endTime ? date.endTime : date.startTime).format(
      'YYYY-MM-DD'
    );
    if (group[day]) {
      group[day].push(date);
    } else {
      group[day] = [date];
    }
    return group;
  }, {});

  const sorted = Object.keys(groups).sort().reverse();
  return sorted[0];
}

export function isFinished(dates, from) {
  const currentDate = dayjs(from);
  const lastDate = getLastDate(dates);
  if (!lastDate) return true;
  const last = dayjs(lastDate);
  const diff = currentDate.diff(last, 'day');
  return diff >= 1;

  // const check = sorted.reduce((result, d) => {
  //   const dd = dayjs(d);
  //   console.log('dd', d);
  //   const diff = currentDate.diff(dd, 'day');
  //   console.log('diff', diff);
  //   return result || diff >= 1;
  // }, false);
  // return check;
}

function getNearestDate(dates, from) {
  const currentDate = dayjs(from);
  const groups = dates.reduce((group, date) => {
    const day = dayjs(date.startTime).format('YYYY-MM-DD-HH-mm');
    if (group[day]) {
      group[day].push(date);
    } else {
      group[day] = [date];
    }
    return group;
  }, {});

  const sorted = Object.keys(groups).sort().reverse();
  const start = sorted.slice(-1);

  const nearest = sorted.reduce((min, d) => {
    const dd = dayjs(d);
    const diff = Math.abs(currentDate.diff(dd, 'hour'));

    const minDate = dayjs(min);
    const minDiff = Math.abs(currentDate.diff(minDate, 'hour'));

    return minDiff < diff ? min : d;
  }, start);
  return nearest;
}

export function enhanceEvents(list) {
  const from = dayjs().format('YYYY-MM-DD');
  // const from = dayjs('2020/09/09').format('YYYY-MM-DD');
  if (!list) return [];
  return list.map((event) => {
    const finished = isFinished(event.dates, from);
    const nextDate = getNearestDate(event.dates, from);
    const lastDate = getLastDate(event.dates);
    return { ...event, finished, lastDate, nextDate };
  });
}
