import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import { NewsDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";
import MainContent from "@/components/contents/MainContent";
import HeroIndex from "@/components/hero/HeroIndex";

const locale = "it";
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled: preview } = draftMode();
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

  return (
    <div>
      <HeroIndex data={heroData} locale={locale} />
      <MainContent locale={locale} data={data.news?.content} />
    </div>
  );
}
