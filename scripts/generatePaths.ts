import { recurseQuery, fetchData } from "../scripts-algolia/dato-utils";
import translate from "../src/lib/locales/index";
import { t } from "../src/lib/resolveLink";

// QUERIES
// Locales
const localeQuery: string = `query localeQuery {
    _site {
      locales
    }
  }`;
// Main menu
const menuQuery: string = `query menuQuery($locale: SiteLocale) {
   allMenuItems(locale: $locale, filter: {parent: {exists: "false"}}) {
     slug
     children {
       slug
       link {
         ... on PageRecord {
           id
         }
       }
       children {
         slug
       }
     }
   }
 }`;

// Workshops cat
const workshopsCatQuery: string = `query workshopsCat($locale: SiteLocale) {
   allWorkshopCategories(locale: $locale) {
     slug
   }
 }`;

// Dynamics
const dynamicQueries: any = {
  allNews: `query newsQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allNews(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      slug
     }
   }`,
  allWorkshops: `query workshopsQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allWorkshops(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      slug
    }
   }`,
  allEvents: `query eventsQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allEvents(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      slug
    }
   }`,
  allProjects: `query projectsQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allProjects(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      slug
    }
   }`,
};

export async function generatePaths() {
  let paths = ["/", "/404", "/500"];
  const localesData = await fetchData(localeQuery);
  for (const locale of localesData._site?.locales || []) {
    let prefix: string = "/";
    if (locale != "it") {
      prefix = `/${locale}/`;
      paths.push(`/${locale}`);
    }

    //  MAIN NAVIGATION PATHS
    const mainMenu = await fetchData(menuQuery, { locale });
    let path: string = "";
    for (const menu of mainMenu.allMenuItems || []) {
      if (menu.slug) {
        path = `${prefix}${menu.slug}`;
        paths.push(path);
      }
      for (const children of menu.children || []) {
        if (children.slug) {
          if (menu.slug == "festival" && children.link.id) {
            path = `${prefix}${menu.slug}/p/${children.slug}`;
          } else {
            path = `${prefix}${menu.slug}/${children.slug}`;
          }
          paths.push(path);
        }
      }
    }

    //  CATEGORIE FORMAZIONE
    const workshopsCat = await fetchData(workshopsCatQuery, { locale });
    for (const cat of workshopsCat.allWorkshopCategories) {
      if (cat.slug) {
        path = `${prefix}${translate("formazione", locale)}/${cat.slug}`;
        paths.push(path);
      }
    }

    // DYNAMIC
    for (const key of Object.keys(dynamicQueries)) {
      const q = dynamicQueries[key];
      const result = await recurseQuery({
        q,
        values: locale,
        propertyName: key,
        pageSize: 100,
        prevResults: [],
        currentPage: 0,
        done: false,
      });
      for (const elem of result) {
        switch (key) {
          case "allNews":
            path = `${prefix}news/${elem.slug}`;
            break;
          case "allWorkshops":
            path = `${prefix}studio/${translate("formazione", locale)}/${elem.slug}`;
            break;
          case "allEvents":
            path = `${prefix}people/${translate(
              `search-filters.events`,
              locale
            ).toLowerCase()}/${elem.slug}`;
            break;
          case "allProjects":
            path = `${prefix}people/${translate(
              `search-filters.projects`,
              locale
            ).toLowerCase()}/${elem.slug}`;
            break;
        }
        paths.push(path);
      }
    }
  }

  return paths;
}
