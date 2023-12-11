import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import { ArtistDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";
import PageTemplate from "@/components/templates/PageTemplate";

const locale = 'en';
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    ArtistDocument,
    { locale: siteLocale, slug },
    isEnabled
  );
  const page: any = data.artist;
  const heroData: any = {
    layoutHero: page?.layoutHero,
    titleHero: page?.titleHero,
    descriptionHero: page?.descriptionHero,
    imageHero: page?.imageHero,
    slideshowHero: page?.slideshowHero,
  };
  const pageData: any = {
    hero: heroData,
    ...page,
  };
  return <PageTemplate data={pageData} locale={locale} />;
}
