import { recurseQuery, fetchData } from "../scripts-algolia/dato-utils";
import config from "../src/data/config";

function t(section: string, locale: string) {
  if (locale === config.defaultLocale) return section;
  const key = (config.translations as any)[section];
  return key?.[locale] ?? section;
}

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
  allFestivalEditions: `query festivalQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allFestivalEditions(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      slug
    }
   }`,
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
  allNetworks: `query networksQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allNetworks(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      slug
    }
   }`,
  allArtisticResidecies: `query artisticResideciesQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allArtisticResidecies(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      slug
    }
   }`,
  allCompanies: `query companiesQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allCompanies(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      slug
    }
   }`,
  // archivio
  allMediaPhotos: `query mediaPhotosQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allMediaPhotos(first: $first, skip: $skip, locale: $locale) {
      id
    }
   }`,
  allMediaAudios: `query mediaAudiosQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allMediaAudios(first: $first, skip: $skip, locale: $locale) {
      slug
    }
   }`,
  allMediaVideos: `query mediaVideosQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allMediaVideos(first: $first, skip: $skip, locale: $locale) {
      slug
    }
   }`,
  allMediaDocuments: `query mediaDocQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allMediaDocuments(first: $first, skip: $skip, locale: $locale) {
      slug
    }
   }`,
};

export async function generatePaths() {
  let paths = ["/", "/404", "/500", "/video", "/audio"];
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
        path = `${prefix}${t("formazione", locale)}/c/${cat.slug}`;
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
          case "allFestivalEditions":
            path = `${prefix}festival/${elem.slug}`;
            break;
          case "allNews":
            path = `${prefix}news/${elem.slug}`;
            break;
          case "allWorkshops":
            path = `${prefix}studio/${t("formazione", locale)}/${elem.slug}`;
            break;
          case "allEvents":
            path = `${prefix}people/${t(`eventi`, locale)}/${elem.slug}`;
            break;
          case "allProjects":
            path = `${prefix}people/${t(`progetti`, locale)}/${elem.slug}`;
            break;
          case "allNetworks":
            path = `${prefix}people/${t(`reti`, locale)}/${elem.slug}`;
            break;
          case "allArtisticResidecies":
            path = `${prefix}studio/${t(`residenze-artistiche`, locale)}/${elem.slug}`;
            break;
          case "allCompanies":
            path = `${prefix}studio/${t(`compagnie`, locale)}/${elem.slug}`;
            break;
          // Archivio
          case "allMediaPhotos":
            path = `${prefix}${t(`foto`, locale)}/${elem.id}`;
            break;
          case "allMediaAudios":
            path = `${prefix}${t(`audio`, locale)}/${elem.slug}`;
            break;
          case "allMediaVideos":
            path = `${prefix}${t(`video`, locale)}/${elem.slug}`;
            break;
          case "allMediaDocuments":
            path = `${prefix}${t(`doc`, locale)}/${elem.slug}`;
            break;
          default:
            path = "";
            break;
        }
        paths.push(path);
      }
    }
  }

  return paths;
}
