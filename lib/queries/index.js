import * as f from "./frags";
import * as b from "./blocks";
//QUERY

export const site = `query layout($locale: SiteLocale) {
  site: _site(locale: $locale) {
    faviconMetaTags {
      tag
      content
      attributes
    }
  }
  menu: allMenuItems(filter: {parent: {exists: "false"}}, locale: $locale) {
    ...menuItemFrag
    children {
      ...menuItemFrag
      children {
        ...menuItemFrag
      }
    }
  }
  footer(locale: $locale) {
    info
    logo {
      responsiveImage(imgixParams: {auto: format, maxW: "600"}) {
        ...imgFrag
      }
    }
    socials {
      id
      link
      title
      image {
        url(imgixParams: {auto: format, h: "80"})
      }
    }
    sections {
      id
      title
      links {
        id
        slug
        title
      }
    }
    links{
      id
      title
    }
    newsletterSubscriptionMessage
    newsletterListUrl
  }
}
${f.menuItemFrag}
${f.imgFrag}
`;

export const getHomepage = `query home($locale: SiteLocale!) {
  home(locale: $locale) {
    slug
    titleHero
    homeSlideshow {
      __typename
      id
      title
      image {
        id
        responsiveImage(sizes: "100vw", imgixParams: {auto: [format, compress], ar: "16:9", fit: crop, crop: top }){
          ...imgFrag
        }
      }
    }
    homeSections {
      id
      layout
      title
      sectionLinkLabel
      sectionLink {
        ${b.sectionLinks}
      }
      slides {
        ${b.slides}
      }
    }
    seo: _seoMetaTags {
      ${b.seoBlock}
    }
  }
}
${f.imgFrag}
`;

export const page = `query page($id: ItemId!, $locale: SiteLocale) {
  page(filter: {id: {eq: $id}}, locale: $locale) {
    id
    slug
    isIndex
    indexType
    seo: _seoMetaTags {
      ${b.seoBlock}
    }
    title
    ${b.heroBlock}
    relatedContents {
      ${b.slides}
    }
    content {
      ${b.structuredContentPartner}
    }
    sections {
      id
      title
      body {
        ${b.structuredContentPartner}
      }
    }
    otherSections {
      __typename
      ... on TeamRecord {
        id
        title
        role
        email
        linkedin
        image {
          responsiveImage(sizes: "(max-width: 1023px) 50vw, (min-width: 1024px) 30vw, 300px", imgixParams: {auto: [format, compress], ar: "1:1", fit: crop, crop: top}) {
            ...imgFrag
          }
        }
      }
      ... on PartnerRecord {
        id
        title
        image {
          responsiveImage(imgixParams: {auto: format, maxW: "300"}) {
            ...imgFrag
          }
        }
        url
      }
    }
  }
}
${f.imgFrag}
${f.videoFrag}
${f.galleryFrag}
${f.imageBlockFrag}
${f.wsCatsFrag}
${f.promotionFrag}
`;

export const event = `query event($id: ItemId!, $locale: SiteLocale) {
  event(locale: $locale, filter: {id: {eq: $id}}) {
    id
    slug
    seo: _seoMetaTags {
      ${b.seoBlock}
    }
    title
    ${b.heroBlock}
    authors
    location
    relatedContents {
      ${b.slides}
    }
    content {
      ${b.structuredContent}
    }
    sections {
      id
      title
      body {
        ${b.structuredContent}
      }
    }
    isFestival
    ${b.paymentSettings}
    category {
      id
      slug
      title
    }
    startDate
    dates {
      id
      isDaily
      startTime
      endTime
    }
  }
}
${f.imgFrag}
${f.videoFrag}
${f.galleryFrag}
${f.imageBlockFrag}
`;

export const workshop = `query workshop($id: ItemId!, $locale: SiteLocale) {
  workshop(locale: $locale, filter: {id: {eq: $id}}) {
    id
    slug
    seo: _seoMetaTags {
      ${b.seoBlock}
    }
    title
    ${b.heroBlock}
    relatedContents {
      ${b.slides}
    }
    content {
      ${b.structuredContent}
    }
    sections {
      id
      title
      body {
        ${b.structuredContent}
      }
    }
    isWorkshop
    ${b.paymentSettings}
    category {
      id
      slug
      title
    }
    workshopCategory {
      id
      slug
      title
      color {
        hex
      }
      description
    }
    startDate
    dates {
      id
      isDaily
      startTime
      endTime
    }
    location
    authors
  }
}
${f.imgFrag}
${f.videoFrag}
${f.galleryFrag}
${f.imageBlockFrag}
`;

export const project = `query project($id: ItemId!, $locale: SiteLocale) {
  project(locale: $locale, filter: {id: {eq: $id}}) {
    id
    slug
    seo: _seoMetaTags {
      ${b.seoBlock}
    }
    title
    ${b.heroBlock}
    relatedContents {
      ${b.slides}
    }
    content {
      ${b.structuredContent}
    }
    sections {
      id
      title
      body {
        ${b.structuredContent}
      }
    }
    ${b.paymentSettings}
    category {
      id
      slug
      title
    }
    startDate
    dates {
      id
      isDaily
      startTime
      endTime
    }
  }
}
${f.imgFrag}
${f.videoFrag}
${f.galleryFrag}
${f.imageBlockFrag}
`;

export const network = `query network($id: ItemId!, $locale: SiteLocale) {
  network(locale: $locale, filter: {id: {eq: $id}}) {
    id
    slug
    seo: _seoMetaTags {
      ${b.seoBlock}
    }
    title
    ${b.heroBlock}
    relatedContents {
      ${b.slides}
    }
    content {
      ${b.structuredContent}
    }
    sections {
      id
      title
      body {
        ${b.structuredContent}
      }
    }
    ${b.paymentSettings}
    category {
      id
      slug
      title
    }
    startDate
    dates {
      id
      isDaily
      startTime
      endTime
    }
  }
}
${f.imgFrag}
${f.videoFrag}
${f.galleryFrag}
${f.imageBlockFrag}
`;

export const news = `query news($id: ItemId!, $locale: SiteLocale) {
  news(locale: $locale, filter: {id: {eq: $id}}) {
    id
    slug
    seo: _seoMetaTags {
      ${b.seoBlock}
    }
    title
    ${b.heroBlock}
    content {
      ${b.structuredContent}
    }
    startDate
    category {
      id
      slug
      title
    }
  }
}
${f.imgFrag}
${f.videoFrag}
${f.galleryFrag}
${f.imageBlockFrag}
`;

export const artist = `query artist($id: ItemId!, $locale: SiteLocale) {
  artist(locale: $locale, filter: {id: {eq: $id}} ) {
    id
    slug
    seo: _seoMetaTags {
      ${b.seoBlock}
    }
    title
    ${b.heroBlock}
    relatedContents {
      ${b.slides}
    }
    startDate: _firstPublishedAt
    artisticResidence {
      id
      year
    }
    associatedArtist {
      id
      year
    }
    content {
      ${b.structuredContent}
    }
    sections {
      id
      title
      body {
        ${b.structuredContent}
      }
    }
  }
}
${f.imgFrag}
${f.videoFrag}
${f.galleryFrag}
${f.imageBlockFrag}
`;

export const projects = `query projects($locale: SiteLocale) {
  projects: allProjects(locale: $locale, orderBy: position_ASC, filter:{slug: {neq: null}}) {
    ${b.sharedPreviewBlock}
    startDate
    position
    category {
      id
      slug
      title
    }
  }
}
${f.imgFrag}`;

export const networks = `query networks($locale: SiteLocale) {
  networks: allNetworks(locale: $locale, orderBy: startDate_DESC, filter:{slug: {neq: null}}) {
    ${b.sharedPreviewBlock}
    startDate
    category {
      id
      slug
      title
    }
  }
}
${f.imgFrag}`;

export const news_index = `query newsIndex($locale: SiteLocale) {
  newsIndex: allNews(locale: $locale, orderBy: startDate_DESC,filter:{slug: {neq: null}}) {
    ${b.sharedPreviewBlock}
    startDate
    category {
      id
      slug
      title
    }
  }
}
${f.imgFrag}`;

// export const old_festival_events = `
// query festivalEvents($locale: SiteLocale) {
//   festivalEvents: allEvents(locale: $locale, filter: {isFestival: {eq: true}}, orderBy: startDate_DESC) {
//     ${b.sharedPreviewBlock}
//     category {
//       id
//       slug
//       title
//     }
//     isFestival
//     dates {
//       startTime
//     }
//   }
// }
// ${f.imgFrag}`;

export const festival_events = `query program($locale: SiteLocale, $start: Date, $end: Date) {
  festivalEvents: allEvents(locale: $locale, filter: {slug: {neq: null},isFestival: {eq: true}, startDate: {gte: $start, lt: $end}}, orderBy: startDate_DESC, first: 100) {
    ${b.sharedPreviewBlock}
    category {
      id
      slug
      title
    }
    isFestival
    startDate
    authors
    location
    dates {
      id
      startTime
      isDaily
      endTime
    }
  }
  workshops: allWorkshops(locale: $locale, filter: {slug: {neq: null},isWorkshop: {eq: true}, startDate: {gte: $start, lt: $end}}, orderBy: startDate_DESC, first: 100){
    ${b.sharedPreviewBlock}
    category {
      id
      slug
      title
    }
    isWorkshop
    startDate
    authors
    location
    dates {
      id
      startTime
      isDaily
      endTime
    }
  }
  languages: allWorkshops(locale: $locale, filter: {slug: {neq: null},isWorkshop: {eq: false}, startDate: {gte: $start, lt: $end}}, orderBy: startDate_DESC, first: 100){
    ${b.sharedPreviewBlock}
    category {
      id
      slug
      title
    }
    isWorkshop
    startDate
    authors
    location
    dates {
      id
      startTime
      isDaily
      endTime
    }
  }
}
${f.imgFrag}
`;

export const other_events = `query otherEvents($locale: SiteLocale) {
  otherEvents: allEvents(locale: $locale, filter: {slug: {neq: null},isFestival: {eq: false}}, orderBy: startDate_DESC, first: 100) {
    authors
    location
    ${b.sharedPreviewBlock}
    category {
      id
      slug
      title
    }
    isFestival
    startDate
    dates {
      id
      startTime
      isDaily
      endTime
    }
  }
}
${f.imgFrag}
`;

export const workshops = `query workshops($locale: SiteLocale, $start: Date) {
  workshops: allWorkshops(locale: $locale, filter: {slug: {neq: null},isWorkshop: {eq: true}, startDate: {gte: $start}}, orderBy: startDate_DESC, first: 100) {
    ${b.sharedPreviewBlock}
    authors
    category {
      id
      slug
      title
    }
    workshopCategory {
      id
      slug
      title
      color {
        hex
      }
      description
    }
    isWorkshop
    startDate
    dates {
      id
      startTime
      isDaily
      endTime
    }
  }
}
${f.imgFrag}`;

export const languages = `query languages($locale: SiteLocale, $start: Date) {
  languages: allWorkshops(locale: $locale, filter: {slug: {neq: null},isWorkshop: {eq: false}, startDate: {gte: $start}}, orderBy: startDate_DESC, first: 100) {
    ${b.sharedPreviewBlock}
    category {
      id
      slug
      title
    }
    isWorkshop
    startDate
    dates {
      id
      startTime
      isDaily
      endTime
    }
  }
}
${f.imgFrag}`;

export const associated_artists = `query associatedArtists($locale: SiteLocale) {
  associatedArtists: allArtists(locale: $locale, filter: {slug: {neq: null},associatedArtist: {exists: true}}, orderBy: _firstPublishedAt_DESC, first: 100) {
    ${b.sharedPreviewBlock}
    startDate: _firstPublishedAt
    artisticResidence {
      id
      year
    }
    associatedArtist {
      id
      year
    }
  }
}
${f.imgFrag}`;

//{"years": ["91395002", "91394985"]}
// const associated_artist_byYear = `
// query associatedArtistsByYear($locale: SiteLocale, $years: [ItemId]) {
//   associatedArtists: allArtists(locale: $locale, filter: {associatedArtist: {exists: true, anyIn: $years}}, orderBy: _firstPublishedAt_DESC, first: 100) {
//     artisticResidence {
//       id
//       year
//     }
//     associatedArtist {
//       id
//       year
//     }
//   }
// }`;

export const artistic_residences = `query artisticResidences($locale: SiteLocale) {
  artisticResidences: allArtists(locale: $locale, filter: {slug: {neq: null},artisticResidence: {exists: true}}, orderBy: _firstPublishedAt_DESC, first: 100) {
    ${b.sharedPreviewBlock}
    startDate: _firstPublishedAt
    artisticResidence {
      id
      year
    }
    associatedArtist {
      id
      year
    }
  }
}
${f.imgFrag}`;

export const years = `
query years {
  allYears(orderBy: year_ASC) {
    id
    year
  }
}`;

export const extra_content = `query extraContent($locale: SiteLocale) {
    extraContent(locale: $locale) {
      titleThanks
      textThanks
      textPrivacy
    }
  }`;

export const festivalDates = `query festivalDates {
  festivalDates: festivalYear {
    datesOfYear {
      id
      startDate
      endDate
      year
      active
    }
  }
}`;

export const landings = `query landings{
  landings: allLandings {
    slugs: _allSlugLocales {
      locale
      slug: value
    }
  }
}
`;

export const landing = `query landing($locale: SiteLocale, $slug: String) {
  landing(locale: $locale, filter: {slug: {eq: $slug}}) {
    alts: _allSlugLocales {
      locale
      value
    }
    id
    slug
    seo: _seoMetaTags {
      ${b.seoBlock}
    }
    title
    ${b.heroBlock}
    relatedContents {
      ${b.slides}
    }
    content {
      ${b.structuredContent}
    }
    sections {
      id
      title
      body {
        ${b.structuredContent}
      }
    }
    otherSections {
      __typename
      ... on TeamRecord {
        id
        title
        role
        email
        linkedin
        image {
          responsiveImage(sizes: "(max-width: 1023px) 50vw, (min-width: 1024px) 30vw, 300px", imgixParams: {auto: [format, compress], ar: "1:1", fit: crop, crop: top}) {
            ...imgFrag
          }
        }
      }
      ... on PartnerRecord {
        id
        title
        image {
          responsiveImage(imgixParams: {auto: format, maxW: "300"}) {
            ...imgFrag
          }
        }
        url
      }
    }
  }
}
${f.imgFrag}
${f.videoFrag}
${f.galleryFrag}
${f.imageBlockFrag}
`;

export const getInfoBySlug = `query getInfoBySlug($slug: String, $locale: SiteLocale) {
  page: allPages(filter: {slug: {eq: $slug}}, locale: $locale) {
    id
    __typename
    indexType
    isIndex
  }
  event: allEvents(filter: {slug: {eq: $slug}}, locale: $locale) {
    id
    __typename
    isFestival
  }
  artist: allArtists(filter: {slug: {eq: $slug}}, locale: $locale) {
    id
    __typename
    artisticResidence {
      year
    }
    associatedArtist {
      year
    }
  }
  network: allNetworks(filter: {slug: {eq: $slug}}, locale: $locale) {
    id
    __typename
  }
  workshop: allWorkshops(filter: {slug: {eq: $slug}}, locale: $locale) {
    id
    __typename
    isWorkshop
  }
  project: allProjects(filter: {slug: {eq: $slug}}, locale: $locale) {
    id
    __typename
  }
  news: allNews(filter: {slug: {eq: $slug}}, locale: $locale) {
    id
    __typename
  }
}`;
