import dayjs from "dayjs";
import "dayjs/locale/it";
import config from "@/data/config";

export function getBaseDate() {
  return dayjs().subtract(1, "year").toDate();
}

export function getYearOfDate(date: string) {
  return dayjs(date).format("YYYY");
}

export function getLocales() {
  return config?.locales;
}

export function camelCase(str: string, separator = "-") {
  const [prefix, ...rest] = str.split(separator);
  return [
    prefix.toLowerCase(),
    ...rest.map((chunk) => {
      const firstLetter = chunk.slice(0, 1).toUpperCase();
      return `${firstLetter}${chunk.slice(1).toLowerCase()}`;
    }),
  ].join("");
}

export function getCategoriesList(list: any[]) {
  return list.reduce((result, { workshopCategory, id }) => {
    workshopCategory.map(({ slug }: { slug: string }) => {
      if (result[slug]) {
        result[slug].push(id);
      } else {
        result[slug] = [id];
      }
    });
    result["all"] = "all";
    return result;
  }, {});
}

export function sanitize(str: string) {
  return str
    .toLowerCase()
    .replaceAll(/ /g, "-")
    .replaceAll(/[^\w-]+/g, "");
}
export function removeSpaces(str: string) {
  return str.toLowerCase().replaceAll(" ", "");
}

export function resolveLinkById(id: string, locale = "it", group = null) {
  return locale === config.defaultLocale ? "/" : `/${locale}/`;
}
// ROUTES
//
// export function resolveLinkById(id: string, locale = "it", group = null) {
//   const route = group
//     ? routes.find((r) => r.id === id && r.group == group)
//     : routes.find((r) => r.id === id);
//   const url = `/${route?.slugs[locale]?.join("/") ?? ""}`;
//   return url;
// }

// const matchRoute = (locale, slug) => {
//   const match = routes.find((r) => r.slugs[locale]?.join("/") === slug);
//   return match ? `/${match?.slugs[locale]?.join("/") ?? ""}` : null;
// };

// export function getBreadcrumbs(prefix = [], slug, locale) {
//   const slugs = Array.from(new Set([...prefix, slug]));
//   // const currentPath = matchRoute(locale, slugs.join('/'));
//   const prefixLink =
//     prefix.length > 0
//       ? matchRoute(locale, prefix.slice(0, -1).join("/")) || "#"
//       : "#";

//   const paths = slugs.map((p) => {
//     return {
//       name: p.replace("-", " "),
//       href: p === slug ? "#" : prefixLink,
//       current: p === slug,
//     };
//   });
//   return paths;
// }

// SORTS

function sortBy(list: object[], field: string) {
  return list;
}

export function sortDesc(list: object[], field: string) {
  if (!list) return [];
  return sortBy(list, field).reverse();
}

export function sortAsc(list: object[], field: string) {
  if (!list) return [];
  return sortBy(list, field);
}

// DATES

export function formatDate(str: string, locale = "it", isDaily = false) {
  const fmt =
    locale === "it"
      ? isDaily
        ? "DD/MM/YYYY HH:mm"
        : "DD MMMM YYYY"
      : isDaily
      ? "MMM DD YYYY HH:mm"
      : "MMM DD YYYY";
  // dayjs.locale(locale);
  // console.log('DAYJS LOCALE', dayjs.locale(), locale);
  return dayjs(str).locale(locale).format(fmt);
}

export function groupDatesByDay(dates: any[], locale = "it") {
  // dayjs.locale(locale);
  // console.log('DAYJS LOCALE', dayjs.locale(), locale);
  const groups = dates.reduce((group, date) => {
    const day = dayjs(date.startTime).format("YYYY-MM-DD");
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
      .format(locale === "it" ? "DD MMMM YYYY" : "MMM DD YYYY");
    const times = groups[day].reduce((daily: string[], d: any) => {
      if (d.isDaily) {
        daily.push(dayjs(d.startTime).format("HH:mm"));
      }
      return daily;
    }, []);
    if (times.length > 0) {
      return `${date} - ${locale == "it" ? "alle: " : "at: "} ${times.join(
        " , "
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

export const closestInterval = (intervals: any[]) => {
  if (!intervals || intervals.length === 0) return null;
  return intervals[0];
};

function getLastDate(dates: any[]) {
  const groups = dates.reduce((group, date) => {
    const day = dayjs(date.endTime ? date.endTime : date.startTime).format(
      "YYYY-MM-DD"
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

export function isFinished(dates: any[], from: string) {
  const currentDate = dayjs(from);
  const lastDate = getLastDate(dates);
  if (!lastDate) return true;
  const last = dayjs(lastDate);
  const diff = currentDate.diff(last, "day");
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

function getNearestDate(dates: any[], from: string) {
  const currentDate = dayjs(from);
  const groups = dates.reduce((group, date) => {
    const day = dayjs(date.startTime).format("YYYY-MM-DD-HH-mm");
    if (group[day]) {
      group[day].push(date);
    } else {
      group[day] = [date];
    }
    return group;
  }, {});

  const sorted = Object.keys(groups).sort().reverse();
  const start: any = sorted.slice(-1);

  const nearest = sorted.reduce((min: any, d: any) => {
    const dd = dayjs(d);
    const diff = Math.abs(currentDate.diff(dd, "hour"));

    const minDate = dayjs(min);
    const minDiff = Math.abs(currentDate.diff(minDate, "hour"));

    return minDiff < diff ? min : d;
  }, start);
  return nearest;
}

export function enhanceEvents(list: any[]) {
  const from = dayjs().format("YYYY-MM-DD");
  // const from = dayjs('2020/09/09').format('YYYY-MM-DD');
  if (!list) return [];
  return list.map((event) => {
    const finished = isFinished(event.dates, from);
    const nextDate = getNearestDate(event.dates, from);
    const lastDate = getLastDate(event.dates);
    return { ...event, finished, lastDate, nextDate };
  });
}
