import { formatStructuredText, getCollections } from "./dato-utils";
import { sendIndex } from "./algolia-utils";

const commonBlock = `
  id
    title
    slug
    _modelApiKey
    years {
      year
    }
    image: imageHero {
      url(imgixParams: {auto: [format, compress], ar: "5:4", fit: crop})
    }
    content {
      value
    }
    sections{
      body{
        value
      }
    }

`;

const queries: any = {
  workshops: `query workshops($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allWorkshops(
    first: $first
    skip: $skip
    locale: $locale
    orderBy: startDate_DESC
    filter: {isWorkshop: {eq: true}}
  ) {
    ${commonBlock}
    artists {
      title
    }
    festivalEditions {
      title
    }
  }}`,
  languages: `query languages($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allWorkshops(
    first: $first
    skip: $skip
    locale: $locale
    orderBy: startDate_DESC
    filter: {isWorkshop: {eq: false}}
  ) {
    ${commonBlock}
    artists {
      title
    }
    festivalEditions {
      title
    }
  }}`,
  events: `query events($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allEvents(
    first: $first
    skip: $skip
    locale: $locale
    orderBy: startDate_DESC
  ) {
    ${commonBlock}
    artists {
      title
    }
    festivalEditions {
      title
    }
  }}
`,
  residencies: `query residencies($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allArtisticResidecies(
    first: $first
    skip: $skip
    locale: $locale
  ) {
    ${commonBlock}
  }}`,
  projects: `query projects($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allProjects(
    first: $first
    skip: $skip
    locale: $locale
    orderBy: startDate_DESC
  ) {
    ${commonBlock}
    networks{
      title
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
  let { id, _modelApiKey, description, years } = item;
  const slug = item.slug || id;

  let contents = [];
  for (let s of item.sections) {
    const text = await formatStructuredText(s.body);
    contents.push(text);
  }

  if (item.content) {
    const text = await formatStructuredText(item.content);
    contents.push(text);
  }
  const content = contents.join(" ");

  return {
    objectID: id,
    //conditional
    title: item.title || "",
    image: item.image?.url || "",
    slug,
    //common
    _modelApiKey,
    description,
    contentType: toContentType(_modelApiKey),
    years: years.map((i: any) => i.year),
    festival: getPropertyAsString(item["festivalEditions"], "title"),
    artists: getPropertyAsString(item["artists"], "title"),
  };
}

const NAME = "activities";
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
    "festival",
    "artists",
  ];
  const attributesForFaceting = [
    "searchable(contentType)",
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
