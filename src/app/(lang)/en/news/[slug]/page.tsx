import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import { NewsDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";
import PageTemplate from "@/components/templates/PageTemplate";

const locale = "en";
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;

  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    NewsDocument,
    { locale: siteLocale, slug },
    isEnabled
  );
  const {
    layoutHero,
    titleHero,
    descriptionHero,
    imageHero,
    slideshowHero,
    startDate,
  } = data?.news || {};

  // console.log('newsDate', newsDate);
  const heroData: any = {
    layoutHero,
    titleHero,
    descriptionHero,
    imageHero,
    slideshowHero,
  };

  const pageData = {
    hero: heroData,
    content: data.news?.content,
  };

  return <PageTemplate data={pageData} locale={locale} />;
}
