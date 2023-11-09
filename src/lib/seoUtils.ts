import { LocaleValue, AltsProps, PageSeoProps } from "@/types";

export function getAlts({
  titles,
  slugs,
  _modelApiKey,
  section,
}: Partial<PageSeoProps>) {
  const alts = titles?.map((item: LocaleValue) => {
    const { value, locale } = item;
    const slug =
      slugs && slugs.length > 0
        ? slugs.find((s: LocaleValue) => s.locale === locale)?.value
        : "";
    const title = value;
    return { slug, title: `${title}`, locale, _modelApiKey, section };
  });
  return alts;
}

export default function getPageSeo(page: PageSeoProps) {
  const tags = page?.seo || [];
  const alts = getAlts(page);
  const obj = { tags, alts, page };
  return obj;
}
