import { draftMode } from "next/headers";
import {
  FestivalEditionBySlugDocument,
  FestivalEventsByDatesDocument,
  SiteLocale,
} from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import getSeoMeta from "@/lib/seoUtils";
import fetchDato from "@/lib/fetchDato";
import FestivalTemplate from "@/components/templates/FestivalTemplate";

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

  const items = await fetchDato(
    FestivalEventsByDatesDocument,
    {
      locale: siteLocale,
      start: page.startDate,
      end: page.endDate,
    },
    isEnabled
  );
  const heroData: any = {
    layoutHero: "index",
    titleHero: page?.theme,
    descriptionHero: page?.title,
    imageHero: page?.imageHero,
    slideshowHero: "",
  };
  const pageData: any = {
    hero: heroData,
    page,
    list: items,
  };
  return <FestivalTemplate data={pageData} locale={locale} />;
}
