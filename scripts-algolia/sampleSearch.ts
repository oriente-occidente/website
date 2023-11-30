import { getCollections, formatStructuredText } from "./dato-utils";
import { sendIndex } from "./algolia-utils";

const query = `query associatedArtists($locale: SiteLocale, $first: IntType, $skip: IntType) {
  items: allArtists(
    locale: $locale
    filter: {slug: {neq: null}, associatedArtist: {exists: true}}
    orderBy: _firstPublishedAt_DESC
    first: $first
    skip: $skip
  ) {
    id
    title
    slug
    apiKey: _modelApiKey
    startDate: _firstPublishedAt
    image: imageHero {
      url(imgixParams: {auto: [format, compress], ar: "5:4", fit: crop})
    }
    content {
      value
    }
    years: associatedArtist {
      year
    }
    countries {
      name
    }
  }
}`;

async function formatItem(item: any) {
  let { id, slug, apiKey, title, image, years, ...rest } = item;
  // let contents = await Promise.all(
  //   blocks.map((block: any) =>
  //     block.content ? formatStructuredText(block.content) : Promise.resolve("")
  //   )
  // );
  // const content: string | null = contents?.join(" ") || null;
  const content = await formatStructuredText(rest.content);
  const objectID = id;
  return {
    objectID,
    slug,
    title: title?.trim() ?? "",
    image: image?.url,
    content,
    ...rest,
    years: years.map((i: any) => i.year),
  };
}

const NAME = "artists";
export default async function search(locale: string, indexes: string[]) {
  console.info(NAME, locale);

  const items: any[] = await getCollections(query, { locale }, "items");
  console.info("TOTAL", items.length);
  const data = [];
  for (let i = 0; i < items.length; i++) {
    const item: any = items[i];
    const formatted = await formatItem(item);
    data.push(formatted);
  }

  const indexName = `${NAME}_${locale}`;
  const searchableAttributes = ["title", "slug", "content"];
  const attributesForFaceting = ["searchable(years)"];
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
      hitsPerPage: 21,
      replace,
    };
    await sendIndex(indexData as any);
  } catch (error) {
    console.error(error);
  }
}
