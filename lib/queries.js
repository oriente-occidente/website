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
