import { formatStructuredText, getCollections } from "./dato-utils";
import { sendIndex } from "./algolia-utils";

const commonBlock = `
  title
  slug
  id
  _modelApiKey
  years {
    year
  }
  content {
    value
  }
`;

const queries: any = {
  networks: `query allNetworks($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allNetworks(
    first: $first
    skip: $skip
    locale: $locale
    orderBy: _publishedAt_DESC
  ) {
    ${commonBlock}
    image: imageHero {
      url(imgixParams: {auto: [format, compress], ar: "5:4", fit: crop})
    }
  }}`,
  partners: `query allPartnerModels($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allPartnerModels(
    first: $first
    skip: $skip
    locale: $locale
    orderBy: _publishedAt_DESC
  ) {
    ${commonBlock}
    image: logo {
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

async function formatItem(item: any) {
  let { id, _modelApiKey, description, years, title, slug } = item;
  const content = await formatStructuredText(item.content);
  return {
    objectID: id,
    image: item.image?.url || "",
    title,
    slug,
    content,
    //common
    _modelApiKey,
    description,
    contentType: toContentType(_modelApiKey),
    years: years.map((i: any) => i.year),
    festival: getPropertyAsString(item["festivalEditions"], "title"),
  };
}

const NAME = "networtk";
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
    "content",
    "contentType",
    "years",
  ];
  const attributesForFaceting = [
    "searchable(contentType)",
    "searchable(years)",
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
