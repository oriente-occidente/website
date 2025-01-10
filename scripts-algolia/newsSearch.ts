import { formatStructuredText, getCollections } from "./dato-utils";
import { sendIndex, yearsCounter } from "./algolia-utils";

const commonBlock = `
  title
  slug
  id
  _modelApiKey
  festivalEditions {
    title
  }
  years {
    year
  }
  image: imageHero {
    url(imgixParams: {auto: [format, compress], ar: "5:4", fit: crop})
  }
  content {
    value
  }
`;

const queries: any = {
  news: `query allNews($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allNews(
    first: $first
    skip: $skip
    locale: $locale
    orderBy: _publishedAt_DESC
    filter: {showInArchive: {eq: true}}
  ) {
    ${commonBlock}
  }}`,
  publications: `query allPublications($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allPublications(
    first: $first
    skip: $skip
    locale: $locale
    orderBy: _publishedAt_DESC
  ) {
    ${commonBlock}
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

async function formatItem(item: any) {
  let {
    id,
    _modelApiKey,
    description,
    years,
    title,
    slug,
    locale,
    isDefaultLocale,
  } = item;
  // const content = await formatStructuredText(item.content);
  return {
    objectID: `${id}-${locale}`,
    ita: isDefaultLocale,
    image: item.image?.url || "",
    title,
    slug,
    // content,
    //common
    _modelApiKey,
    description,
    contentType: toContentType(_modelApiKey),
    years: years.map((i: any) => i.year),
    festival: getPropertyAsString(item["festivalEditions"], "title"),
  };
}

const indexName = "news";
export default async function search(
  defaultLocale: string,
  locales: string[],
  indexes: string[]
) {
  const data = [];
  for (const locale of locales) {
    const isDefaultLocale = defaultLocale == locale;

    let items: any[] = [];
    // console.info(indexName, locale);
    for (const key of Object.keys(queries)) {
      const query = queries[key];
      const results = await getCollections(query, { locale }, "items");
      // console.log(key, results.length);
      items = [...items, ...results];
    }
    items = items.filter(Boolean);
    console.info("TOTAL", indexName, locale, " = ", items.length);

    for (let i = 0; i < items.length; i++) {
      const item: any = items[i];
      const formatted = await formatItem({
        ...item,
        locale,
        isDefaultLocale,
      });
      data.push(formatted);
    }
  }
  const searchableAttributes = [
    "title",
    "slug",
    // "content",
    "contentType",
    "years",
    "festival",
  ];
  const attributesForFaceting = [
    "ita",
    "searchable(contentType)",
    "searchable(years)",
    "searchable(festival)",
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
      indexLanguages: locales,
      customRanking,
      hitsPerPage: 12,
      replace,
    };
    await sendIndex(indexData as any);
    const counter = yearsCounter(data);
    return counter;
  } catch (error) {
    console.error(error);
  }
}
