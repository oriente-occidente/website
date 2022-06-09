//FRAGMENTS

const imgFrag = `
  fragment imgFrag on ResponsiveImage {
    aspectRatio
    base64
    height
    sizes
    src
    srcSet
    webpSrcSet
    width
    alt
    title
  }
`;

const menuItemFrag = `
fragment menuItemFrag on MenuItemRecord {
  id
  title
  slug
  link {
    __typename
    ... on HomeRecord {
      id
    }
    ... on PageRecord {
      id
      slug
      title
    }
  }
}`;

//require imgFrag
const imageBlockFrag = `
fragment imageBlockFrag on ImageBlockRecord {
  id
  image {
    responsiveImage(sizes: "(max-width: 1024px) 80vw, (min-width: 1025px) 45vw, 600px", imgixParams: {auto: [format, compress], ar: "5:4", fit: crop }){
      ...imgFrag
    }
  }
}
`;

//require imgFrag
const galleryFrag = `
fragment galleryFrag on GalleryRecord {
  id
  images {
    responsiveImage(sizes: "(max-width: 1024px) 80vw, (min-width: 1025px) 45vw, 600px", imgixParams: {auto: [format, compress], ar: "5:3", fit: crop }){
      ...imgFrag
    }
  }
}
`;

const videoFrag = `
fragment videoFrag on VideoBlockRecord {
  id
  autoPlay
  controls
  loop
  muted
  poster {
    url(imgixParams: {maxW: "600"})
  }
  externalVideo {
    url
    height
    width
    title
    provider
    providerUid
    thumbnailUrl
  }
  internalVideo {
    height
    width
    title
    url
    video {
      mp4Url
    }
  }
}
`;

//BLOCKS

const seoBlock = `
attributes
content
tag
`;

const sectionLinks = `
__typename
... on ArtistRecord {
  id
  slug
  title
}
... on EventRecord {
  id
  slug
  title
}
... on NewsRecord {
  id
  slug
  title
}
... on NetworkRecord {
  id
  slug
  title
}
... on PageRecord {
  id
  slug
  title
}
... on ProjectRecord {
  id
  slug
  title
}
... on WorkshopRecord {
  id
  slug
  title
}
`;

const paymentSettings = `
paymentSettings {
  id
  description
  startDate
  endDate
  bookable
  amount
  paymentLink
  }
`;

// require imgFrag
const sharedPreviewBlock = `
id
slug
title
titleHero
imageHero {
  id
  responsiveImage(sizes: "(max-width: 1024px) 80vw, (min-width: 1025px) 45vw, 600px", imgixParams: {auto: [format, compress], ar: "5:4", fit: crop }){
    ...imgFrag
  }
}
`;

// require imgFrag
const slides = `
__typename
... on ArtistRecord {
  startDate: _firstPublishedAt
  ${sharedPreviewBlock}
}
... on EventRecord {
${sharedPreviewBlock}
  category {
    title
  }
  authors,
  location,
  startDate
  dates {
    startTime
    isDaily
    endTime
  }
}
... on NewsRecord {
  ${sharedPreviewBlock}
  _createdAt
  startDate
  category {
    title
    slug
  }
}
... on PageRecord {
  ${sharedPreviewBlock}
}
... on ProjectRecord {
  ${sharedPreviewBlock}
  category {
    title
  }
  authors,
  location,
  startDate
  dates {
    startTime
    isDaily
    endTime
  }
}
... on WorkshopRecord {
  ${sharedPreviewBlock}
  category {
    title
  }
  authors,
  location,
  startDate
  dates {
    startTime
    isDaily
    endTime
  }
}`;

// require imgFrag, imageBlockFrag, galleryFrag, VideoFrag
const structuredContent = `
value
links {
  ${sectionLinks}
}
blocks {
  __typename
  ... on GalleryRecord {
    ...galleryFrag
  }
  ... on ImageBlockRecord {
    ...imageBlockFrag
  }
  ... on VideoBlockRecord {
    ...videoFrag
  }
}
`;

// require imgFrag, imageBlockFrag, galleryFrag, VideoFrag, partner
const structuredContentPartner = `
value
links {
  ${sectionLinks}
}
blocks {
  __typename
  ... on GalleryRecord {
    ...galleryFrag
  }
  ... on ImageBlockRecord {
    ...imageBlockFrag
  }
  ... on VideoBlockRecord {
    ...videoFrag
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
`;

const heroBlock = `
layoutHero
titleHero
descriptionHero
imageHero {
  id
  title
  responsiveImage(sizes: "(max-width: 1023px) 100vw, (min-width: 1024px) 80vw, 1400px", imgixParams: {auto: [format, compress], ar: "14:8", fit: crop }){
    ...imgFrag
  }
}
slideshowHero {
  id
  title
  responsiveImage(sizes: "(max-width: 1023px) 100vw, (min-width: 1024px) 80vw, 1400px", imgixParams: {auto: [format, compress], ar: "14:8", fit: crop }){
    ...imgFrag
  }
}`;

//QUERY

export const site = `
query site($locale: SiteLocale) {
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
${menuItemFrag}
${imgFrag}
`;

export const getHomepage = `
query home($locale: SiteLocale!) {
  home(locale: $locale) {
    id
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
        ${sectionLinks}
      }
      slides {
        ${slides}
      }
    }
    seo: _seoMetaTags {
      ${seoBlock}
    }
  }
}
${imgFrag}
`;

export const page = `
query page($id: ItemId!, $locale: SiteLocale) {
  page(filter: {id: {eq: $id}}, locale: $locale) {
    id
    slug
    isIndex
    indexType
    seo: _seoMetaTags {
      ${seoBlock}
    }
    title
    ${heroBlock}
    relatedContents {
      ${slides}
    }
    content {
      ${structuredContentPartner}
    }
    sections {
      id
      title
      body {
        ${structuredContentPartner}
      }
    }
    otherSections {
      __typename
      ... on TeamRecord {
        id
        title
        role
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
${imgFrag}
${videoFrag}
${galleryFrag}
${imageBlockFrag}
`;

export const event = `
query event($id: ItemId!, $locale: SiteLocale) {
  event(locale: $locale, filter: {id: {eq: $id}}) {
    id
    slug
    seo: _seoMetaTags {
      ${seoBlock}
    }
    title
    ${heroBlock}
    authors
    location
    relatedContents {
      ${slides}
    }
    content {
      ${structuredContent}
    }
    sections {
      id
      title
      body {
        ${structuredContent}
      }
    }
    isFestival
    ${paymentSettings}
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
${imgFrag}
${videoFrag}
${galleryFrag}
${imageBlockFrag}
`;

export const workshop = `
query workshop($id: ItemId!, $locale: SiteLocale) {
  workshop(locale: $locale, filter: {id: {eq: $id}}) {
    id
    slug
    seo: _seoMetaTags {
      ${seoBlock}
    }
    title
    ${heroBlock}
    relatedContents {
      ${slides}
    }
    content {
      ${structuredContent}
    }
    sections {
      id
      title
      body {
        ${structuredContent}
      }
    }
    isWorkshop
    ${paymentSettings}
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
    location
    authors
  }
}
${imgFrag}
${videoFrag}
${galleryFrag}
${imageBlockFrag}
`;

export const project = `
query project($id: ItemId!, $locale: SiteLocale) {
  project(locale: $locale, filter: {id: {eq: $id}}) {
    id
    slug
    seo: _seoMetaTags {
      ${seoBlock}
    }
    title
    ${heroBlock}
    relatedContents {
      ${slides}
    }
    content {
      ${structuredContent}
    }
    sections {
      id
      title
      body {
        ${structuredContent}
      }
    }
    ${paymentSettings}
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
${imgFrag}
${videoFrag}
${galleryFrag}
${imageBlockFrag}
`;

export const network = `
query network($id: ItemId!, $locale: SiteLocale) {
  network(locale: $locale, filter: {id: {eq: $id}}) {
    id
    slug
    seo: _seoMetaTags {
      ${seoBlock}
    }
    title
    ${heroBlock}
    relatedContents {
      ${slides}
    }
    content {
      ${structuredContent}
    }
    sections {
      id
      title
      body {
        ${structuredContent}
      }
    }
    ${paymentSettings}
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
${imgFrag}
${videoFrag}
${galleryFrag}
${imageBlockFrag}
`;

export const news = `
query news($id: ItemId!, $locale: SiteLocale) {
  news(locale: $locale, filter: {id: {eq: $id}}) {
    id
    slug
    seo: _seoMetaTags {
      ${seoBlock}
    }
    title
    ${heroBlock}
    content {
      ${structuredContent}
    }
    startDate
    category {
      id
      slug
      title
    }
  }
}
${imgFrag}
${videoFrag}
${galleryFrag}
${imageBlockFrag}
`;

export const artist = `
query artist($id: ItemId!, $locale: SiteLocale) {
  artist(locale: $locale, filter: {id: {eq: $id}} ) {
    id
    slug
    seo: _seoMetaTags {
      ${seoBlock}
    }
    title
    ${heroBlock}
    relatedContents {
      ${slides}
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
      ${structuredContent}
    }
    sections {
      id
      title
      body {
        ${structuredContent}
      }
    }
  }
}
${imgFrag}
${videoFrag}
${galleryFrag}
${imageBlockFrag}
`;

export const projects = `
query projects($locale: SiteLocale) {
  projects: allProjects(locale: $locale, orderBy: position_ASC, filter:{slug: {neq: null}}) {
    ${sharedPreviewBlock}
    startDate
    position
    category {
      id
      slug
      title
    }
  }
}
${imgFrag}`;

export const networks = `
query networks($locale: SiteLocale) {
  networks: allNetworks(locale: $locale, orderBy: startDate_DESC, filter:{slug: {neq: null}}) {
    ${sharedPreviewBlock}
    startDate
    category {
      id
      slug
      title
    }
  }
}
${imgFrag}`;

export const news_index = `
query newsIndex($locale: SiteLocale) {
  newsIndex: allNews(locale: $locale, orderBy: startDate_DESC,filter:{slug: {neq: null}}) {
    ${sharedPreviewBlock}
    startDate
    category {
      id
      slug
      title
    }
  }
}
${imgFrag}`;

// export const old_festival_events = `
// query festivalEvents($locale: SiteLocale) {
//   festivalEvents: allEvents(locale: $locale, filter: {isFestival: {eq: true}}, orderBy: startDate_DESC) {
//     ${sharedPreviewBlock}
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
// ${imgFrag}`;

export const festival_events = `
query program($locale: SiteLocale, $start: Date, $end: Date) {
  festivalEvents: allEvents(locale: $locale, filter: {slug: {neq: null},isFestival: {eq: true}, startDate: {gte: $start, lt: $end}}, orderBy: startDate_DESC, first: 100) {
    ${sharedPreviewBlock}
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
    ${sharedPreviewBlock}
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
    ${sharedPreviewBlock}
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
${imgFrag}`;

export const other_events = `
query otherEvents($locale: SiteLocale) {
  otherEvents: allEvents(locale: $locale, filter: {slug: {neq: null},isFestival: {eq: false}}, orderBy: startDate_DESC, first: 100) {
    authors
    location
    ${sharedPreviewBlock}
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
${imgFrag}`;

export const workshops = `
query workshops($locale: SiteLocale, $start: Date) {
  workshops: allWorkshops(locale: $locale, filter: {slug: {neq: null},isWorkshop: {eq: true}, startDate: {gte: $start}}, orderBy: startDate_DESC, first: 100) {
    ${sharedPreviewBlock}
    authors
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
${imgFrag}`;

export const languages = `
query languages($locale: SiteLocale, $start: Date) {
  languages: allWorkshops(locale: $locale, filter: {slug: {neq: null},isWorkshop: {eq: false}, startDate: {gte: $start}}, orderBy: startDate_DESC, first: 100) {
    ${sharedPreviewBlock}
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
${imgFrag}`;

export const associated_artists = `
query associatedArtists($locale: SiteLocale) {
  associatedArtists: allArtists(locale: $locale, filter: {slug: {neq: null},associatedArtist: {exists: true}}, orderBy: _firstPublishedAt_DESC, first: 100) {
    ${sharedPreviewBlock}
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
${imgFrag}`;

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

export const artistic_residences = `
query artisticResidences($locale: SiteLocale) {
  artisticResidences: allArtists(locale: $locale, filter: {slug: {neq: null},artisticResidence: {exists: true}}, orderBy: _firstPublishedAt_DESC, first: 100) {
    ${sharedPreviewBlock}
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
${imgFrag}`;

export const years = `
query years {
  allYears(orderBy: year_ASC) {
    id
    year
  }
}`;

export const extra_content = `
  query extraContent($locale: SiteLocale) {
    extraContent(locale: $locale) {
      titleThanks
      textThanks
      textPrivacy
    }
  }`;

export const festivalDates = `
query festivalDates {
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

export const landings = `
query landings{
  landings: allLandings {
    slugs: _allSlugLocales {
      locale
      slug: value
    }
  }
}
`;

export const landing = `
query landing($locale: SiteLocale, $slug: String) {
  landing(locale: $locale, filter: {slug: {eq: $slug}}) {
    alts: _allSlugLocales {
      locale
      value
    }
    id
    slug
    seo: _seoMetaTags {
      ${seoBlock}
    }
    title
    ${heroBlock}
    relatedContents {
      ${slides}
    }
    content {
      ${structuredContent}
    }
    sections {
      id
      title
      body {
        ${structuredContent}
      }
    }
    otherSections {
      __typename
      ... on TeamRecord {
        id
        title
        role
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
${imgFrag}
${videoFrag}
${galleryFrag}
${imageBlockFrag}
`;

export const getInfoBySlug = `
query getInfoBySlug($slug: String, $locale: SiteLocale) {
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
}
`;
