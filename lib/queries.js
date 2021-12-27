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

export const site = `
query site($locale: SiteLocale) {
  site: _site {
    locales
    faviconMetaTags {
      tag
      content
      attributes
    }
  }
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
}
${MenuItemFrag}
`;

const sharedPreviewBlock = `
id
slug
titleHero
imageHero {
  id
  responsiveImage(sizes: "(max-width: 1024px) 80vw, (min-width: 1025px) 45vw, 600px", imgixParams: {auto: [format, compress], ar: "5:4", fit: crop }){
    ...imgFrag
  }
}
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
          ${sharedPreviewBlock}
        }
        ... on EventRecord {
        ${sharedPreviewBlock}
          category {
            title
          }
          dateEvento {
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
          dateEvento {
            startTime
          }
        }
        ... on WorkshopRecord {
          ${sharedPreviewBlock}
          category {
            title
          }
          dateEvento {
            startTime
          }
        }
      }
    }
    seo: _seoMetaTags {
      ${seoBlock}
    }
  }
}
${imgFrag}
`;
