import { draftMode } from "next/headers";
import { FestivalEditionBySlugDocument, SiteLocale } from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import FestivalTemplate from "@/components/templates/FestivalTemplate";
import getSeoMeta from "@/lib/seoUtils";
import fetchDato from "@/lib/fetchDato";

const locale = "it";

export async function generateMetadata({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    FestivalEditionBySlugDocument,
    { locale: siteLocale, slug },
    false
  );
  const page: any = data?.festivalEdition || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    FestivalEditionBySlugDocument,
    { locale: siteLocale, slug },
    isEnabled
  );
  const page: any = data?.festivalEdition;
  const heroData: any = {
    layoutHero: "",
    titleHero: page?.titleHero,
    descriptionHero: page?.descriptionHero,
    imageHero: page?.imageHero,
  };
  const pageData: any = {
    hero: heroData,
    page,
  };
  return <FestivalTemplate data={pageData} locale={locale} />;
}
