import { formatStructuredText, getCollections } from "./dato-utils";
import { sendIndex } from "./algolia-utils";

function toContentType(_modelApiKey: string) {
  let tipology = ("" + _modelApiKey)
    .toLowerCase()
    .replace("media_", "")
    .replaceAll("_", " ")
    .replaceAll("-", " ");
  const splits = tipology.split(" ");
  return splits
    .map((t) => `${t.charAt(0).toUpperCase()}${t.slice(1)}`)
    .join(" ");
}

const queries: any = {
  festival: `query allFestivalEditions($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allFestivalEditions(
    first: $first
    skip: $skip
    locale: $locale
    orderBy: startDate_DESC
    filter: {}
  ) {
    title
    slug
    id
    festivalType
    _modelApiKey
    content {
      value
    }
    image: imageHero {
      url(imgixParams: {auto: [format, compress], ar: "5:4", fit: crop})
    }
    year{
      year
    }
  }
}`,
};

async function formatItem(item: any) {
  let { id, _modelApiKey, year, title, slug, festivalType } = item;
  let content: any = "";
  if (item.content) {
    content = await formatStructuredText(item.content);
  }

  return {
    objectID: id,
    _modelApiKey,
    title,
    slug,
    content,
    years: [year.year],
    festivalType: toContentType(festivalType),
    image: item.image?.url || "",
  };
}

const NAME = "festival";
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
    "festivalType",
    "years",
  ];
  const attributesForFaceting = [
    "searchable(festivalType)",
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
