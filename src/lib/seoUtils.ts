import { toNextMetadata } from "react-datocms";
import { LocaleValue, AltsProps, PageSeoProps } from "@/types";
import resolveLink from "@/lib/resolveLink";
import config from "@/data/config";

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

export function getPageSeo(page: PageSeoProps) {
  const tags = page?.seo || [];
  const alts = getAlts(page);
  const obj = { tags, alts, page };
  return obj;
}

export default function getSeoMeta(page: PageSeoProps) {
  const seoData = getPageSeo(page);
  // console.log("seoData", seoData);
  const host = process.env.NEXT_PUBLIC_HOST;
  const tags = toNextMetadata(seoData?.tags || []);
  const dl = config.defaultLocale;
  const alternates = seoData?.alts?.reduce((obj: any, a: any) => {
    const { locale } = a;
    const path = resolveLink({ ...a, locale });
    const url = `${host}${path}`;
    if (dl === locale) {
      return { ...obj, canonical: url };
    }
    let languages = obj.languages || {};
    return {
      ...Object,
      languages: {
        ...languages,
        [locale]: url,
      },
    };
  }, {});
  const meta = { ...tags, alternates };
  // console.log(meta);
  return meta;
}
