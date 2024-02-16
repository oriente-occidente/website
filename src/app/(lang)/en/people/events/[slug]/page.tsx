import { draftMode } from "next/headers";
import { EventDocument, SiteLocale } from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import PageTemplate from "@/components/templates/PageTemplate";
import getSeoMeta from "@/lib/seoUtils";
import fetchDato from "@/lib/fetchDato";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";
import { TestQueryDocument } from "@/graphql/generated";

const locale = "en";

export async function generateMetadata({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(EventDocument, { locale: siteLocale, slug }, false);
  const page: any = data?.event || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;

  const data = await fetchDato(EventDocument, { locale: siteLocale, slug }, isEnabled);
  const test = await fetchDato(
    TestQueryDocument,
    { locale: siteLocale, slug },
    isEnabled
  );

  // console.log("data ->", data);
  // console.log("test ->", test.event?.relatedContents);

  const heroData: any = {
    layoutHero: data?.event?.layoutHero,
    titleHero: data?.event?.titleHero,
    descriptionHero: data?.event?.descriptionHero,
    imageHero: data?.event?.imageHero,
    slideshowHero: data?.event?.slideshowHero,
    dateEvento: data?.event?.dates,
    location: data?.event?.location,
  };
  const pageData: any = {
    hero: heroData,
    ...data.event,
  };
  const slugData = extractSlugData(data.event);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <PageTemplate data={pageData} locale={locale} />
    </Wrapper>
  );
}
