import { draftMode } from "next/headers";
import { SiteLocale, WorkshopDocument } from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import PageTemplate from "@/components/templates/PageTemplate";
import getSeoMeta from "@/lib/seoUtils";
import fetchDato from "@/lib/fetchDato";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = "it";

export async function generateMetadata({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(WorkshopDocument, { locale: siteLocale, slug }, false);
  const page: any = data?.workshop || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(WorkshopDocument, { locale: siteLocale, slug }, isEnabled);
  // console.log("data orig", data.workshop?.dates);
  const heroData: any = {
    layoutHero: data?.workshop?.layoutHero,
    titleHero: data?.workshop?.titleHero,
    descriptionHero: data?.workshop?.descriptionHero,
    imageHero: data?.workshop?.imageHero,
    slideshowHero: data?.workshop?.slideshowHero,
    dateEvento: data.workshop?.dates,
    location: data.workshop?.location,
    authors: data.workshop?.authors,
  };
  const pageData: any = {
    hero: heroData,
    ...data.workshop,
  };
  const slugData = extractSlugData(data.workshop);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <PageTemplate data={pageData} locale={locale} />
    </Wrapper>
  );
}
