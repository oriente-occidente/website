import { draftMode } from "next/headers";
import queryDatoCMS from "@/lib/fetchDato";
import { SiteLocale, CompanyDocument } from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import PageTemplate from "@/components/templates/PageTemplate";
import getSeoMeta from "@/lib/seoUtils";

const locale = "it";

export async function generateMetadata({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    CompanyDocument,
    { locale: siteLocale, slug },
    false
  );
  const page: any = data?.company || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    CompanyDocument,
    { locale: siteLocale, slug },
    isEnabled
  );
  // console.log("data orig", data.company?.dates);
  const heroData: any = {
    layoutHero: data?.company?.layoutHero,
    titleHero: data?.company?.titleHero,
    descriptionHero: data?.company?.descriptionHero,
    imageHero: data?.company?.imageHero,
    slideshowHero: data?.company?.slideshowHero,
  };
  const pageData: any = {
    hero: heroData,
    ...data.company,
  };
  return <PageTemplate data={pageData} locale={locale} />;
}
