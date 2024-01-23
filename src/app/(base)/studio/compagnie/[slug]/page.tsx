import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import { CompanyDocument, SiteLocale } from "@/graphql/generated";
import PageTemplate from "@/components/templates/PageTemplate";
import getSeoMeta from "@/lib/seoUtils";
import fetchDato from "@/lib/fetchDato";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = "it";

export async function generateMetadata({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(CompanyDocument, { locale: siteLocale, slug }, false);
  const page: any = data?.company || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(CompanyDocument, { locale: siteLocale, slug }, isEnabled);
  const page: any = data?.company;
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

  const slugData = extractSlugData(data.company);

  return (
    <Wrapper locale={locale} slugData={slugData}>
      <PageTemplate data={pageData} locale={locale} />
    </Wrapper>
  );
}
