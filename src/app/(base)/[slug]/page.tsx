import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import type { BasicSlugPageProps } from "@/types";
import { PageDocument, SiteLocale } from "@/graphql/generated";
import PageTemplate from "@/components/templates/PageTemplate";
import getSeoMeta from "@/lib/seoUtils";
import fetchDato from "@/lib/fetchDato";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = "it";

export async function generateMetadata({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(PageDocument, { locale: siteLocale, slug }, false);
  const page: any = data?.page || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(PageDocument, { locale: siteLocale, slug }, isEnabled);

  if (!data.page) notFound();
  const heroData: any = {
    layoutHero: data?.page?.layoutHero,
    titleHero: data?.page?.titleHero,
    descriptionHero: data?.page?.descriptionHero,
    imageHero: data?.page?.imageHero,
    slideshowHero: data?.page?.slideshowHero,
  };
  const pageData: any = {
    hero: heroData,
    ...data.page,
  };
  // console.log("data.page ->", data.page);

  const slugData = extractSlugData(data.page);

  return (
    <Wrapper locale={locale} slugData={slugData}>
      <PageTemplate data={pageData} locale={locale} />
    </Wrapper>
  );
}
