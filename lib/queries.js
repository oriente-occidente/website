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

const MenuItemFrag = `
fragment itemFrag on MenuItemRecord {
  id
  titles: _allTitleLocales {
    locale
    title: value
  }
  slugs: _allSlugLocales {
    locale
    slug: value
  }
  link {
    __typename
    ... on HomeRecord {
      id
    }
    ... on PageRecord {
      id
      slug
      title
      indexType
      isIndex
    }
  }
}`;

const seoBlock = `
  attributes
  content
  tag
`;

const menu = `
query Menu {
menu: allMenuItems(filter: {parent: {exists: "false"}}) {
    ...itemFrag
    parent {
      ...itemFrag
      parent {
        ...itemFrag
      }
    }
  }
}
${MenuItemFrag}
`;

const allNavs = `
query allNavs {
  menu: allMenuItems(filter: {parent: {exists: "false"}}) {
    ...itemFrag
    parent {
      ...itemFrag
      parent {
        ...itemFrag
      }
    }
  }
  footer {
    info
    logo {
      responsiveImage(imgixParams: {auto: format, maxW: "600"}) {
        src
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
      links {
        slugs: _allSlugLocales {
          locale
          value
        }
        titles: _allTitleLocales {
          locale
          value
        }
      }
    }
  }
}`;

const sectionLinks = `
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


export const allPages = `
query allPages {
  pages: allPages(filter: {isContentGenerated: {eq: "false"}}) {
    id
    slugs: _allSlugLocales {
      locale
      slug: value
    }
  }
}
`;

export const pages = `
query pages($locale: SiteLocale!) {
  pages: allPages(locale: $locale,filter: {isContentGenerated: {eq: "false"}}) {
    id
    slug
    title
  }
}
`;
export const page = `
query page($slug: String!, $locale: SiteLocale!) {
  page(filter: {slug: {eq: $slug}}, locale: $locale) {
    id
    pic {
      alt
      author
      copyright
      title
      responsiveImage(imgixParams: {auto: format, w: "250", h:"100", fit:crop}) {
        ...imgFrag
      }
    }
    title
    slug

    seo: _seoMetaTags {
      ${seoBlock}
    }
    content {
      value
      links {
        __typename
        ... on PageRecord {
          id
          title
          slug
        }
        ... on PostRecord {
          id
          title
          slug
        }
        ... on TagRecord {
          id
          name
          slug
        }
      }
      blocks {
        __typename
        ... on CtaRecord {
          id
          title
        }
        ... on GalleryRecord {
          id
          images {
            id
            url(imgixParams: {auto: format, w: "250", h:"100", fit:crop })
            responsiveImage(imgixParams: {auto: format, w: "250", h:"100", fit:crop }) {
              ...imgFrag
            }
          }
        }
        ... on EmbeddedVideoRecord {
          id
        }
        ... on LinkRecord {
          id
          title
          internalLink {
            __typename
          }
          externalLinkUrl
        }
        ... on InternalVideoRecord {
          id
        }
      }
    }
  }
}
${imgFrag}
`;

export const site = `
query site($locale: SiteLocale) {
  site: _site {
    locales
    faviconMetaTags {
      tag
      content
      attributes
    }
    globalSeo(locale: $locale) {
      siteName
      fallbackSeo {
        title
        description
        image {
          url(imgixParams: {maxW: "800"})
        }
      }
    }
  }
}`;

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
        ... on ArtistRecord {
          id
          slug
          titleHero
          imageHero {
            id
            responsiveImage(sizes: "(max-width: 1024px) 80vw, (min-width: 1025px) 45vw, 600px", imgixParams: {auto: [format, compress], ar: "5:4", fit: crop }){
              ...imgFrag
            }
          }
        }
        ... on EventRecord {
          id
          slug
          titleHero
          category {
            title
          }
          dateEvento {
            startTime
          }
          imageHero {
            id
            responsiveImage(sizes: "(max-width: 1024px) 80vw, (min-width: 1025px) 45vw, 600px", imgixParams: {auto: [format, compress], ar: "5:4", fit: crop }){
              ...imgFrag
            }
          }
        }
        ... on NewsRecord {
          id
          slug
          titleHero
          imageHero {
            id
            responsiveImage(sizes: "(max-width: 1024px) 80vw, (min-width: 1025px) 45vw, 600px", imgixParams: {auto: [format, compress], ar: "5:4", fit: crop }){
              ...imgFrag
            }
          }
          _createdAt
          category {
            title
            slug
          }
        }
        ... on PageRecord {
          id
          slug
          titleHero
          imageHero {
            id
            responsiveImage(sizes: "(max-width: 1024px) 80vw, (min-width: 1025px) 45vw, 600px", imgixParams: {auto: [format, compress], ar: "5:4", fit: crop }){
              ...imgFrag
            }
          }
        }
        ... on ProjectRecord {
          id
          slug
          titleHero
          category {
            title
          }
          dateEvento {
            startTime
          }
          imageHero {
            id
            responsiveImage(sizes: "(max-width: 1024px) 80vw, (min-width: 1025px) 45vw, 600px", imgixParams: {auto: [format, compress], ar: "5:4", fit: crop }){
              ...imgFrag
            }
          }
        }
        ... on WorkshopRecord {
          id
          slug
          titleHero
          category {
            title
          }
          dateEvento {
            startTime
          }
          imageHero {
            id
            responsiveImage(sizes: "(max-width: 1024px) 80vw, (min-width: 1025px) 45vw, 600px", imgixParams: {auto: [format, compress], ar: "5:4", fit: crop }){
              ...imgFrag
            }
          }
        }
      }
      title
    }
    seo: _seoMetaTags {
      ${seoBlock}
    }
  }
}
${imgFrag}
`;
