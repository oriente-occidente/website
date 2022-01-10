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
    responsiveImage(sizes: "(max-width: 1024px) 80vw, (min-width: 1025px) 45vw, 600px", imgixParams: {auto: [format, compress], ar: "5:4", fit: crop }){
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
  ${sharedPreviewBlock}
}
... on EventRecord {
${sharedPreviewBlock}
  category {
    title
  }
  dateEvento: dates {
    startTime
  }
}
... on NewsRecord {
  ${sharedPreviewBlock}
  _createdAt
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
  dateEvento: dates {
    startTime
  }
}
... on WorkshopRecord {
  ${sharedPreviewBlock}
  category {
    title
  }
  dateEvento: dates {
    startTime
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
          responsiveImage {
            ...imgFrag
          }
        }
      }
      ... on PartnerRecord {
        id
        title
        image {
          responsiveImage {
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
    relatedContents {
      ${slides}
    }
    content {
      ${structuredContent}
    }
    isFestival
    paymentSettings {
      id
      startDate
      amount
      description
      endDate
      bookable
      paymentLink
    }
    category {
      id
      slug
      title
    }
    dateEvento: dates {
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
    paymentSettings {
      id
      startDate
      amount
      description
      endDate
      bookable
      paymentLink
    }
    category {
      id
      slug
      title
    }
    dateEvento: dates {
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
    paymentSettings {
      id
      startDate
      amount
      description
      endDate
      bookable
      paymentLink
    }
    category {
      id
      slug
      title
    }
    dateEvento: dates {
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
  artist(locale: $locale, filter: {id: {eq: $id}}) {
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
  projects: allProjects(locale: $locale) {
    ${sharedPreviewBlock}
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
  newsIndex: allNews(locale: $locale) {
    ${sharedPreviewBlock}
    category {
      id
      slug
      title
    }
  }
}
${imgFrag}`;

export const festival_events = `
query festivalEvents($locale: SiteLocale) {
  festivalEvents: allEvents(locale: $locale, filter: {isFestival: {eq: true}}) {
    ${sharedPreviewBlock}
    category {
      id
      slug
      title
    }
    isFestival
    dateEvento: dates {
      startTime
    }
  }
}
${imgFrag}`;

export const other_events = `
query otherEvents($locale: SiteLocale) {
  otherEvents: allEvents(locale: $locale, filter: {isFestival: {eq: false}}) {
    ${sharedPreviewBlock}
    category {
      id
      slug
      title
    }
    isFestival
    dateEvento: dates {
      startTime
    }
  }
}
${imgFrag}`;

export const workshops = `
query workshops($locale: SiteLocale) {
  workshops: allWorkshops(locale: $locale, filter: {isWorkshop: {eq: true}}) {
    ${sharedPreviewBlock}
    category {
      id
      slug
      title
    }
    isWorkshop
    dateEvento: dates {
      startTime
    }
  }
}
${imgFrag}`;

export const courses = `
query courses($locale: SiteLocale) {
  courses: allWorkshops(locale: $locale, filter: {isWorkshop: {eq: false}}) {
    ${sharedPreviewBlock}
    category {
      id
      slug
      title
    }
    isWorkshop
    dateEvento: dates {
      startTime
    }
  }
}
${imgFrag}`;

export const associated_artists = `
query associatedArtists($locale: SiteLocale) {
  associatedArtists: allArtists(locale: $locale, filter: {associatedArtist: {exists: true}}) {
    ${sharedPreviewBlock}
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

export const artistic_residences = `
query artisticResidences($locale: SiteLocale) {
  artisticResidences: allArtists(locale: $locale, filter: {artisticResidence: {exists: true}}) {
    ${sharedPreviewBlock}
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
