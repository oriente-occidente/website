import { LocaleValue, AltsProps, PageSeoProps } from "@/types";

export function getAlts({ titles, slugs, _modelApikey, section }: AltsProps) {
  const alts = titles.map((item: LocaleValue) => {
    const { value, locale } = item;
    const slug =
      slugs && slugs.length > 0
        ? slugs.find((s: LocaleValue) => s.locale === locale)?.value
        : "";
    const title = value;
    return { slug, title: `${title}`, locale, _modelApikey, section };
  });
  return alts;
}

export default function getPageSeo(page: PageSeoProps) {
  const tags = page?.seo || [];
  const alts = page?._modelApikey
    ? getAlts({
        titles: page.titles || [],
        slugs: page.slugs || [],
        _modelApikey: page._modelApikey,
        section: page.section || "",
      })
    : [];
  return { tags, alts, page };
}
