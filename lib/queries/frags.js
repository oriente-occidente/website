//FRAGMENTS

export const imgFrag = `fragment imgFrag on ResponsiveImage {
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

export const menuItemFrag = `fragment menuItemFrag on MenuItemRecord {
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
export const imageBlockFrag = `fragment imageBlockFrag on ImageBlockRecord {
  id
  image {
    responsiveImage(sizes: "(max-width: 1024px) 80vw, (min-width: 1025px) 45vw, 600px", imgixParams: {auto: [format, compress], ar: "5:4", fit: crop }){
      ...imgFrag
    }
  }
}`;

export const wsCatsFrag = `
fragment wsCatsFrag on WorkshopCategoriesBlockRecord {
  id
  category {
    id
    slug
    title
    color {
      hex
    }
    description
  }
}
`;

export const promotionFrag = `
fragment promotionFrag on PromotionBlockRecord {
  id
  title
  text
  subtitle
}
`;

//require imgFrag
export const galleryFrag = `fragment galleryFrag on GalleryRecord {
  id
  images {
    responsiveImage(sizes: "(max-width: 1024px) 80vw, (min-width: 1025px) 45vw, 600px", imgixParams: {auto: [format, compress], ar: "5:3", fit: crop }){
      ...imgFrag
    }
  }
}`;

export const videoFrag = `fragment videoFrag on VideoBlockRecord {
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
}`;
