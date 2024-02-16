import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import { NewsDocument, SiteLocale } from "@/graphql/generated";
import PageTemplate from "@/components/templates/PageTemplate";
import fetchDato from "@/lib/fetchDato";
import getSeoMeta from "@/lib/seoUtils";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";
import queryDatoCMS from "@/lib/fetchDato";

const locale = "en";

export async function generateMetadata({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(NewsDocument, { locale: siteLocale, slug }, false);
  const page: any = data?.news || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(NewsDocument, { locale: siteLocale, slug }, isEnabled);
  const heroData: any = {
    layoutHero: data?.news?.layoutHero,
    titleHero: data?.news?.titleHero,
    descriptionHero: data?.news?.descriptionHero,
    imageHero: data?.news?.imageHero,
    slideshowHero: data?.news?.slideshowHero,
  };
  const pageData: any = {
    hero: heroData,
    ...data.news,
  };
  const slugData = extractSlugData(data.news);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <PageTemplate data={pageData} locale={locale} />
    </Wrapper>
  );
}
