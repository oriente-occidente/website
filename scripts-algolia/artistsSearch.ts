import { formatStructuredText, getCollections } from "./dato-utils";
import { sendIndex, yearsCounter } from "./algolia-utils";

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
  associatedArtist{
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
    fallbackLocales: it
  ) {
    ${commonBlock}
    artisticResidence{
      year
    }
    _allReferencingEvents {
      years {
        title
      }
    }
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
    fallbackLocales: it
  ) {
    ${commonBlock}
    _allReferencingEvents {
      years {
        title
      }
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
  let {
    id,
    _modelApiKey,
    associatedArtist,
    title,
    slug,
    locale,
    isDefaultLocale,
  } = item;

  let contents = [];
  for (let s of item.sections) {
    const text = await formatStructuredText(s.body);
    contents.push(text);
  }

  if (item.content) {
    const text = await formatStructuredText(item.content);
    contents.push(text);
  }
  let artistFromEvents: any = [];
  if (item._allReferencingEvents) {
    item._allReferencingEvents.map((anni: any) =>
      anni.years.map((y: any) => artistFromEvents.push({ year: y.title }))
    );
  }

  const content = contents.join(" ");
  const yearsGrouped = [
    ...associatedArtist,
    ...(item.artisticResidence || []),
    ...(artistFromEvents || []),
  ].map((y) => y.year.toString());

  const uniqueYears = yearsGrouped.filter((element, index) => {
    return yearsGrouped.indexOf(element) === index;
  });

  return {
    objectID: `${id}-${locale}`,
    ita: isDefaultLocale,
    image: item.image?.url || "",
    title,
    slug,
    content,
    //common
    _modelApiKey,
    years: uniqueYears.map((i: any) => i),
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
  const customRanking: string[] = ["asc(title)"];

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
