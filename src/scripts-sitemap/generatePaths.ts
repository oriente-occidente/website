import { recurseQuery, fetchData } from "../../scripts-algolia/dato-utils";
import { t } from "@/lib/resolveLink";
import resolveLink from "@/lib/resolveLink";

// QUERIES
// Locales
const localeQuery: string = `query localeQuery {
    _site {
      locales
    }
  }`;

// Pages
const pagesQuery: string = `query pagesQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
  allPages(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
    __typename
    _modelApiKey
    slug
    id
    section
  }
}`;

// Index

const indexQueries: any = {
  educationPage: `query educationPageQuery {
    educationPage {
      id
      _modelApiKey
      __typename
    }
  }`,
  newsIndex: `query newsIndexQuery {
    newsIndex {
      id
      _modelApiKey
      __typename
    }
  }`,
  artisticResidenciesIndex: `query artisticResidenciesIndexQuery {
    artisticResidenciesIndex {
      id
      _modelApiKey
      __typename
    }
  }`,
  artistsIndex: `query artistsIndexQuery {
    artistsIndex {
      id
      _modelApiKey
      __typename
    }
  }`,
  projectsIndex: `query projectsIndexQuery {
    projectsIndex {
      id
      _modelApiKey
      __typename
    }
  }`,
  eventsIndex: `query eventsIndexQuery {
    eventsIndex {
      id
      _modelApiKey
      __typename
    }
  }`,
  networksIndex: `query networksIndexQuery {
    networksIndex {
      id
      _modelApiKey
      __typename
    }
  }`,
  audiosIndex: `query audiosIndexQuery {
    audiosIndex {
      id
      _modelApiKey
      __typename
    }
  }`,
  videosIndex: `query videosIndexQuery {
    videosIndex {
      id
      _modelApiKey
      __typename
    }
  }`,
};

// Archive
const archiveQueries: any = {
  yearsArchive: `query yearsArchiveQuery($locale: SiteLocale) {
    yearsArchive(locale: $locale) {
      id
      _modelApiKey
      __typename
    }
  }`,
  festivalEditionsArchive: `query festivalEditionsArchiveQuery($locale: SiteLocale) {
    festivalEditionsArchive(locale: $locale) {
      id
      _modelApiKey
      __typename
    }
  }`,
  activitiesArchive: `query activitiesArchiveQuery($locale: SiteLocale) {
    activitiesArchive(locale: $locale) {
      id
      _modelApiKey
      __typename
    }
  }`,
  mediaArchive: `query mediaArchiveQuery($locale: SiteLocale) {
    mediaArchive(locale: $locale) {
      id
      _modelApiKey
      __typename
    }
  }`,
  partnersNetworksArchive: `query partnersNetworksArchiveQuery($locale: SiteLocale) {
    partnersNetworksArchive(locale: $locale) {
      id
      _modelApiKey
      __typename
    }
  }`,
  newsPublicationsArchive: `query newsPublicationsArchiveQuery($locale: SiteLocale) {
    newsPublicationsArchive(locale: $locale) {
      id
      _modelApiKey
      __typename
    }
  }`,
  artistsCompaniesArchive: `query artistsCompaniesArchiveQuery($locale: SiteLocale) {
    artistsCompaniesArchive(locale: $locale) {
      id
      _modelApiKey
      __typename
    }
  }`,
};

// Workshops cat
const workshopsCatQuery: string = `query workshopsCat($locale: SiteLocale) {
   allWorkshopCategories(locale: $locale) {
    _modelApiKey
    __typename
     slug
   }
 }`;

// Dynamics
const dynamicQueries: any = {
  allFestivalEditions: `query festivalQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allFestivalEditions(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      _modelApiKey
    __typename
      slug
    }
   }`,
  allNews: `query newsQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allNews(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      _modelApiKey
      __typename
      slug
     }
   }`,
  allWorkshops: `query workshopsQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allWorkshops(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      _modelApiKey
    __typename
      slug
    }
   }`,
  allEvents: `query eventsQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allEvents(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      _modelApiKey
    __typename
      slug
    }
   }`,
  allProjects: `query projectsQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allProjects(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      _modelApiKey
    __typename
      slug
    }
   }`,
  allNetworks: `query networksQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allNetworks(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      _modelApiKey
    __typename
      slug
    }
   }`,
  allArtisticResidecies: `query artisticResideciesQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allArtisticResidecies(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      _modelApiKey
    __typename
      slug
    }
   }`,
  allCompanies: `query companiesQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allCompanies(first: $first, skip: $skip, locale: $locale, filter: {slug: {neq: null}}) {
      _modelApiKey
    __typename
      slug
    }
   }`,
  // archivio
  allMediaPhotos: `query mediaPhotosQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allMediaPhotos(first: $first, skip: $skip, locale: $locale) {
      _modelApiKey
      __typename
      slug: id
    }
   }`,
  allMediaAudios: `query mediaAudiosQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allMediaAudios(first: $first, skip: $skip, locale: $locale) {
      _modelApiKey
      __typename
      slug
    }
   }`,
  allMediaVideos: `query mediaVideosQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allMediaVideos(first: $first, skip: $skip, locale: $locale) {
      _modelApiKey
      __typename
      slug
    }
   }`,
  allMediaDocuments: `query mediaDocQuery($locale: SiteLocale, $first: IntType, $skip: IntType) {
    allMediaDocuments(first: $first, skip: $skip, locale: $locale) {
      _modelApiKey
      __typename
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
    let path: string = "";

    // PAGES
    const pages = await recurseQuery({
      q: pagesQuery,
      values: locale,
      propertyName: "allPages",
      pageSize: 100,
      prevResults: [],
      currentPage: 0,
      done: false,
    });

    for (const p of pages) {
      path = resolveLink({ ...p, locale });
      paths.push(path);
    }

    // INDEX
    for (const key of Object.keys(indexQueries)) {
      const q = indexQueries[key];
      const res = await fetchData(q, { locale });
      if (res[key]) {
        path = resolveLink({ ...res[key], locale });
        paths.push(path);
      }
    }

    // Archive
    for (const key of Object.keys(archiveQueries)) {
      const q = archiveQueries[key];
      const res = await fetchData(q, { locale });

      if (res[key]) {
        path = resolveLink({ ...res[key], locale });
        paths.push(path);
      }
    }

    //  CATEGORIE FORMAZIONE
    const workshopsCat = await fetchData(workshopsCatQuery, { locale });
    for (const cat of workshopsCat.allWorkshopCategories) {
      if (cat.slug) {
        path = resolveLink({ ...cat, locale });
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
        path = resolveLink({ ...elem, locale });
        paths.push(path);
        // switch (key) {
        //   case "allFestivalEditions":
        //     path = `${prefix}festival/${elem.slug}`;
        //     break;
        //   case "allNews":
        //     path = `${prefix}news/${elem.slug}`;
        //     break;
        //   case "allWorkshops":
        //     path = `${prefix}studio/${t("formazione", locale)}/${elem.slug}`;
        //     break;
        //   case "allEvents":
        //     path = `${prefix}people/${t(`eventi`, locale)}/${elem.slug}`;
        //     break;
        //   case "allProjects":
        //     path = `${prefix}people/${t(`progetti`, locale)}/${elem.slug}`;
        //     break;
        //   case "allNetworks":
        //     path = `${prefix}people/${t(`reti`, locale)}/${elem.slug}`;
        //     break;
        //   case "allArtisticResidecies":
        //     path = `${prefix}studio/${t(`residenze-artistiche`, locale)}/${elem.slug}`;
        //     break;
        //   case "allCompanies":
        //     path = `${prefix}studio/${t(`compagnie`, locale)}/${elem.slug}`;
        //     break;
        //   // Archivio
        //   case "allMediaPhotos":
        //     path = `${prefix}${t(`foto`, locale)}/${elem.id}`;
        //     break;
        //   case "allMediaAudios":
        //     path = `${prefix}${t(`audio`, locale)}/${elem.slug}`;
        //     break;
        //   case "allMediaVideos":
        //     path = `${prefix}${t(`video`, locale)}/${elem.slug}`;
        //     break;
        //   case "allMediaDocuments":
        //     path = `${prefix}${t(`doc`, locale)}/${elem.slug}`;
        //     break;
        //   default:
        //     path = "";
        //     break;
        // }
        paths.push(path);
      }
    }
  }

  return paths;
}
