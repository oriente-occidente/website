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
    previewImage: imageSearchPreview {
      url(imgixParams: {auto: [format, compress], ar: "5:4", fit: crop})
    }
    year{
      year
    }
  }
}`,
};

async function formatItem(item: any) {
  let {
    id,
    _modelApiKey,
    year,
    title,
    slug,
    festivalType,
    locale,
    isDefaultLocale,
  } = item;
  let content: any = "";
  if (item.content) {
    content = await formatStructuredText(item.content);
  }

  return {
    objectID: `${id}-${locale}`,
    ita: isDefaultLocale,
    _modelApiKey,
    title,
    slug,
    content,
    years: [year.year],
    contentType: toContentType(festivalType),
    image: item.image?.url || "",
    previewImage: item.previewImage?.url || "",
  };
}

const indexName = "festival";
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
