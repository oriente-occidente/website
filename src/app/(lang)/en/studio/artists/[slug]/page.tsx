import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import { ArtistDocument, SiteLocale } from "@/graphql/generated";
import PageTemplate from "@/components/templates/PageTemplate";
import fetchDato from "@/lib/fetchDato";
import getSeoMeta from "@/lib/seoUtils";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = 'en';

export async function generateMetadata({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    ArtistDocument,
    { locale: siteLocale, slug },
    false
  );
  const page: any = data?.artist || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
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
  const slugData = extractSlugData(page);

  return (
    <Wrapper locale={locale} slugData={slugData}>
      <PageTemplate data={pageData} locale={locale} />
    </Wrapper>
  );
}
