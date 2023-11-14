import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import { ArtistDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";
import HeroIndex from "@/components/hero/HeroIndex";
import MainContent from "@/components/contents/MainContent";

const locale = 'en';
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled: preview } = draftMode();
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    ArtistDocument,
    { locale: siteLocale, slug },
    isEnabled
  );
  const { titleHero, descriptionHero, imageHero, slideshowHero, startDate } =
    data?.artist || {};

  const heroData: any = {
    titleHero,
    descriptionHero,
    imageHero,
    slideshowHero,
  };
  return (
    <div>
      <HeroIndex data={heroData} locale={locale} />
      <MainContent locale={locale} data={data.artist?.content} />
    </div>
  );
}
