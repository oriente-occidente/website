import { getCollections, formatStructuredText } from "./dato-utils";
import { sendIndex } from "./algolia-utils";

const query = `query allArtworksQuery($first: IntType, $skip: IntType, $locale: SiteLocale) {
    allArtworks(locale: $locale, first: $first, skip: $skip, orderBy: position_ASC) {
      id
      apiKey: _modelApiKey
      slug(locale: $locale)
      title(locale: $locale)
      abstract
      position
      author
      featured
      previewImage {
        id
        url(imgixParams: {ar: "3:4",  fit: crop, w: "640", auto: format})
      }
      blocks(locale: $locale) {
        __typename
        ... on TextBlockRecord {
          id
          content {
            value
          }
        }
      }
      artworkCollection {
        id
        title(locale: $locale)
        slug(locale: $locale)
        museum {
          id
          title(locale: $locale)
          slug(locale: $locale)
        }
      }
      temporaryLocation {
        id
        title(locale: $locale)
        slug(locale: $locale)
        project {
          id
          title(locale: $locale)
          slug(locale: $locale)
        }
      }
      descriptiveTags {
        id
        title(locale: $locale)
        slug
      }
    }
  }`;
  
async function formatItem(item: any) {
  let {
    id,
    slug,
    apiKey,
    position,
    title,
    abstract,
    previewImage,
    blocks,
    descriptiveTags,
    ...rest
  } = item;
  let contents = await Promise.all(
    blocks.map((block: any) =>
      block.content ? formatStructuredText(block.content) : Promise.resolve("")
    )
  );
  const content: string | null = contents?.join(" ") || null;
  const objectID = id;
  const tags = descriptiveTags?.map((tag: any) => tag.title) ?? [];
  return {
    objectID,
    slug,
    title: title?.trim() ?? "",
    image: previewImage?.url,
    content,
    tags,
    ...rest,
  };
}

export default async function artworkSearch(locale: string, indexes: string[]) {
  console.info("ARTWORK", locale);

  const artworks: any[] = await getCollections(
    query,
    { locale },
    "allArtworks"
  );
  console.info("TOTAL", artworks.length);
  const data = [];
  for (let i = 0; i < artworks.length; i++) {
    const item: any = artworks[i];
    const formatted = await formatItem(item);
    data.push(formatted);
  }

  const name = `artworks`;
  const indexName = `${name}_${locale}`;
  const searchableAttributes = [
    "author",
    "title",
    "slug",
    "abstract",
    "content",
    "tags",
    "categories",
  ];
  const attributesForFaceting = ["featured", "searchable(tags)"];
  const customRanking: string[] = ["asc(position)"];

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
