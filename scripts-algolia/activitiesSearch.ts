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
  residencies: `query allArtists($locale: SiteLocale, $first: IntType, $skip: IntType) {
    items: allArtists(
      first: $first
      skip: $skip
      locale: $locale
      orderBy: _publishedAt_DESC
      filter: {
        showInResidenciesIndex: { eq: true }
        artisticResidence: { exists: true }
      }
    ) {
      title
      slug
      id
      _modelApiKey
      years: artisticResidence {
        year
      }
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
      content {
        value
      }
    }
  }`,
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
  if (_modelApiKey == "artist") {
    return "Artistic residency";
  } else {
    let tipology = ("" + _modelApiKey).toLowerCase().replace("media_", "");
    return `${tipology.charAt(0).toUpperCase()}${tipology.slice(1)}`;
  }
}

async function formatItem(item: any) {
  let { id, _modelApiKey, description, years: y, locale, isDefaultLocale } = item;
  const slug = item.slug || id;

  const years = y.map((i: any) => i.year);

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
    //conditional
    title: item.title || "",
    image: item.image?.url || "",
    slug,
    //common
    _modelApiKey,
    description,
    contentType: toContentType(_modelApiKey),
    years,
    sortyear: years[0],
    festival: getPropertyAsString(item["festivalEditions"], "title"),
    artists: getPropertyAsString(item["artists"], "title"),
  };
}

const indexName = "activities";

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
    "festival",
    "artists",
  ];
  const attributesForFaceting = [
    "ita",
    "searchable(contentType)",
    "searchable(years)",
    "searchable(festival)",

    // "searchable(news)",
  ];
  const customRanking: string[] = ["desc(sortyear)", "asc(title)"];

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
