import { toNextMetadata } from "react-datocms";
import { LocaleValue, AltsProps, PageSeoProps } from "@/types";
import resolveLink from "@/lib/resolveLink";
import config from "@/data/config";

export function getAlts(page: PageSeoProps) {
  if (!page) return [];
  const alts = page?.titles?.map((item: LocaleValue) => {
    const { value, locale } = item;
    const slug =
      page?.slugs && page?.slugs.length > 0
        ? page?.slugs.find((s: LocaleValue) => s.locale === locale)?.value
        : "";
    const title = value;
    const _modelApiKey = page?._modelApiKey || "";
    const section = page?.section || "";
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
  if (!page) return null;
  const seoData = getPageSeo(page);
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
