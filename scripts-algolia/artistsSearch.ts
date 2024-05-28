import { formatStructuredText, getCollections } from "./dato-utils";
import { sendIndex } from "./algolia-utils";

const commonBlock = `
  title
  slug
  id
  _modelApiKey
  image: imageHero {
    url(imgixParams: {auto: [format, compress], ar: "5:4", fit: crop})
  }
  country: countries {
    name
  }
  sections {
    body {
      value
    }
  }
  years: associatedArtist{
    year
  }
`;

const queries: any = {
  artists: `query allArtists($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allArtists(
    first: $first
    skip: $skip
    locale: $locale
    orderBy: _publishedAt_DESC
    filter: {}
  ) {
    ${commonBlock}
    content {
      value
    }
  }
}`,
  companies: `query allCompanies($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allCompanies(
    first: $first
    skip: $skip
    locale: $locale
    orderBy: _publishedAt_DESC
    filter: {}
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
  let { id, _modelApiKey, years, title, slug, locale, isDefaultLocale } = item;

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
    objectID: `${id}-${locale}`,
    ita: isDefaultLocale,
    image: item.image?.url || "",
    title,
    slug,
    content,
    //common
    _modelApiKey,
    years: years.map((i: any) => i.year),
    contentType: toContentType(_modelApiKey),
    country: getPropertyAsString(item["country"], "name"),
  };
}

const indexName = "artists";
export default async function search(
  defaultLocale: string,
  locales: string[],
  indexes: string[]
) {
  const data = [];
  for (const locale of locales) {
    const isDefaultLocale = defaultLocale == locale;

    // console.info(indexName, locale);

    let items: any[] = [];
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
      const formatted = await formatItem({ ...item, locale, isDefaultLocale });
      data.push(formatted);
    }
  }

  const searchableAttributes = [
    "title",
    "slug",
    "content",
    "contentType",
    "years",
  ];
  const attributesForFaceting = [
    "ita",
    "searchable(contentType)",
    "searchable(country)",
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
      indexLanguages: locales,
      customRanking,
      hitsPerPage: 12,
      replace,
    };
    await sendIndex(indexData as any);
  } catch (error) {
    console.error(error);
  }
}
