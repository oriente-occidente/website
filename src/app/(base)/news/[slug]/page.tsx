import { toNextMetadata } from "react-datocms";
import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import { NewsDocument, SiteLocale } from "@/graphql/generated";
import PageTemplate from "@/components/templates/PageTemplate";
import fetchDato from "@/lib/fetchDato";
import seoUtils from "@/lib/seoUtils";

const locale = "it";

export async function generateMetadata({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    NewsDocument,
    { locale: siteLocale, slug },
    false
  );
  const page = data.news || null;
  const seoData = seoUtils(page as any);
  const tags = toNextMetadata(seoData?.tags || []);

  return tags;
}

export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;

  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    NewsDocument,
    { locale: siteLocale, slug },
    isEnabled
  );
  const heroData: any = {
    layoutHero: data?.news?.layoutHero,
    titleHero: data?.news?.titleHero,
    descriptionHero: data?.news?.descriptionHero,
    imageHero: data?.news?.imageHero,
    slideshowHero: data?.news?.slideshowHero,
  };
  const pageData: any = {
    hero: heroData,
    ...data.news,
  };
  return <PageTemplate data={pageData} locale={locale} />;
}
