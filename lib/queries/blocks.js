//BLOCKS

export const seoBlock = `
attributes
content
tag
`;

export const sectionLinks = `
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

export const paymentSettings = `
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
export const sharedPreviewBlock = `
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
export const slides = `
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
export const structuredContent = `
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
  

}`;

// require imgFrag, imageBlockFrag, galleryFrag, VideoFrag, partner
export const structuredContentPartner = `
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
  ... on WorkshopCategoriesBlockRecord {
    ...wsCatsFrag
  }
  ... on PromotionBlockRecord {
    ...promotionFrag
  }


}`;

export const heroBlock = `
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
