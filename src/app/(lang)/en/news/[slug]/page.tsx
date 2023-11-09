import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import { NewsDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";
import PageTemplate from "@/components/templates/PageTemplate";

const locale = 'en';
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;

  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
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
