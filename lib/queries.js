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
fragment MenuItemFrag on MenuItemRecord {
  id
  slugs: _allSlugLocales {
    locale
    slug: value
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

export const posts = `
query posts($locale: SiteLocale!) {
  posts: allPosts(locale: $locale) {
    id
    slug
    title
    publishDate
    pic {
      url(imgixParams: {auto: format,  w: "250"})
    }
    excerpt {
      value
    }
  }
}
`;

export const post = `
query post($slug: String!, $locale: SiteLocale!) {
  post(filter: {slug: {eq: $slug}}, locale: $locale) {
    id
    pic {
      responsiveImage(imgixParams: {auto: format, w: "250", h:"100", fit:crop}) {
        ...imgFrag
      }
    }
    excerpt {
      value
      links{
        __typename
      }
    }
    slug
    title
    publishDate

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
              url(imgixParams: {auto: format, w: "250", h:"100", fit:crop})
            responsiveImage(imgixParams: {auto: format, w: "250", h:"100", fit:crop}) {
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
