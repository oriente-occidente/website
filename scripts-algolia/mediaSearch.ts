import { getCollections } from "./dato-utils";
import { sendIndex } from "./algolia-utils";

const commonBlock = `
  id
  _modelApiKey
  description
  creationDate
  festivalEditions {
    title
  }
  category {
    name
  }
  years {
    year
  }
  mediaAuthor {
    fullName
  }
  companies {
    title
  }
  projects {
    title
  }
  workhops {
    title
  }
  artisticResidencies {
    title
  }
  artists {
    title
  }
  events {
    title
  }
  news {
    title
  }
`;

const queries: any = {
  allMediaVideosQuery: `query allMediaVideos($locale: SiteLocale, $first: IntType, $skip: IntType) {
    items: allMediaVideos(first: $first, skip: $skip, locale: $locale,orderBy: creationDate_DESC) {
    ${commonBlock}
    title
    slug
    image {
      url(imgixParams: {auto: [format, compress], ar: "5:4", fit: crop})
    }
  }}`,
  allMediaPhotosQuery: `query allMediaPhotos($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allMediaPhotos(first: $first, skip: $skip, locale: $locale,orderBy: creationDate_DESC) {
    image {
      url(imgixParams: {auto: [format, compress], ar: "5:4", fit: crop})
      title
    }
    ${commonBlock}
  }}`,
  allMediaAudios: `query allMediaVideos($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allMediaAudios(first: $first, skip: $skip, locale: $locale,orderBy: creationDate_DESC) {
    title
    slug
    image {
      url(imgixParams: {auto: [format, compress], ar: "5:4", fit: crop})
    }
    ${commonBlock}
  }}
`,
  allMediaDocuments: `query allMediaDocuments($locale: SiteLocale, $first: IntType, $skip: IntType,) {
  items: allMediaDocuments(first: $first, skip: $skip, locale: $locale,orderBy: creationDate_DESC) {
    ${commonBlock}
    title
    slug
    image {
      url(imgixParams: {auto: [format, compress], ar: "5:4", fit: crop})
    }
  }}`,
};

function getPropertyAsString(list: any[], property: string) {
  if (!list || list.length === 0) return [];
  return list?.map((i: any) => i[property]).sort();
}

function toContentType(_modelApiKey: string) {
  let tipology = ("" + _modelApiKey).toLowerCase().replace("media_", "");
  return `${tipology.charAt(0).toUpperCase()}${tipology.slice(1)}`;
}

function formatItem(item: any) {
  let { id, _modelApiKey, description, years } = item;
  const slug = item.slug || id;
  let title;
  if (_modelApiKey == "media_photo") {
    title = item.image?.title;
  } else {
    title = item.title;
  }
  return {
    objectID: id,
    //conditional
    title: title || "",
    image: item.image?.url || "",
    slug,
    //common
    _modelApiKey,
    description,
    contentType: toContentType(_modelApiKey),
    category: item?.category?.name || "",
    years: years.map((i: any) => i.year),
    festival: getPropertyAsString(item["festivalEditions"], "title"),
    author: getPropertyAsString(item["mediaAuthor"], "fullName"),
    companies: getPropertyAsString(item["companies"], "title"),
    artists: getPropertyAsString(item["artists"], "title"),
    residencies: getPropertyAsString(item["artisticResidencies"], "title"),
    projects: getPropertyAsString(item["projects"], "title"),
    workhops: getPropertyAsString(item["workhops"], "title"),
    events: getPropertyAsString(item["events"], "title"),
    news: getPropertyAsString(item["news"], "title"),
    pubblications: getPropertyAsString(item["pubblications"], "title"),
  };
}

const NAME = "media";
export default async function search(locale: string, indexes: string[]) {
  console.info(NAME, locale);

  let items: any[] = [];
  for (const key of Object.keys(queries)) {
    const query = queries[key];
    const results = await getCollections(query, { locale }, "items");
    console.log(key, results.length);
    items = [...items, ...results];
  }
  items = items.filter(Boolean);
  console.info("TOTAL", items.length);
  const data = [];
  for (let i = 0; i < items.length; i++) {
    const item: any = items[i];
    const formatted = await formatItem(item);
    data.push(formatted);
  }

  const indexName = `${NAME}_${locale}`;
  const searchableAttributes = [
    "title",
    "slug",
    "description",
    "contentType",
    "years",
    "festival",
    "category",
    "author",
    "artists",
    "companies",
    "residencies",
    "author",
    "artists",
    "companies",
    "residencies",
    "projects",
    "workhops",
    "events",
    "news",
    "pubblications",
  ];
  const attributesForFaceting = [
    "searchable(contentType)",
    "searchable(category)",
    "searchable(years)",
    "searchable(festival)",

    // "searchable(news)",
  ];
  const customRanking: string[] = [];

  let replace = false;
  if (indexes.includes(indexName)) {
    replace = true;
  }

  try {
    const indexData = {
      indexName,
      data,
      searchableAttributes,
      attributesForFaceting,
      indexLanguages: [locale],
      customRanking,
      hitsPerPage: 12,
      replace,
    };
    await sendIndex(indexData as any);
  } catch (error) {
    console.error(error);
  }
}
