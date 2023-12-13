import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import { PublicationDocument, SiteLocale } from "@/graphql/generated";
import PageTemplate from "@/components/templates/PageTemplate";
import fetchDato from "@/lib/fetchDato";
import getSeoMeta from "@/lib/seoUtils";

const locale = "it";

export async function generateMetadata({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    PublicationDocument,
    { locale: siteLocale, slug },
    false
  );
  const page: any = data?.publication || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    PublicationDocument,
    { locale: siteLocale, slug },
    isEnabled
  );
  const page = data?.publication;
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
