import { draftMode } from "next/headers";
import { NetworkDocument, SiteLocale } from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import PageTemplate from "@/components/templates/PageTemplate";
import getSeoMeta from "@/lib/seoUtils";
import fetchDato from "@/lib/fetchDato";

const locale = "it";

export async function generateMetadata({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    NetworkDocument,
    { locale: siteLocale, slug },
    false
  );
  const page: any = data?.network || null;
  const meta = getSeoMeta(page);
  return meta;
}
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    NetworkDocument,
    { locale: siteLocale, slug },
    isEnabled
  );
  const heroData: any = {
    layoutHero: data?.network?.layoutHero,
    titleHero: data?.network?.titleHero,
    descriptionHero: data?.network?.descriptionHero,
    imageHero: data?.network?.imageHero,
    slideshowHero: data?.network?.slideshowHero,
    dateEvento: data?.network?.dates,
  };
  const pageData: any = {
    hero: heroData,
    ...data.network,
  };
  return <PageTemplate data={pageData} locale={locale} />;
}
