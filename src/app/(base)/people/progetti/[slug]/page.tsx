import { draftMode } from "next/headers";
import { ProjectDocument, SiteLocale } from "@/graphql/generated";
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
  const data = await fetchDato(ProjectDocument, { locale: siteLocale, slug }, false);
  const page: any = data?.project || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(ProjectDocument, { locale: siteLocale, slug }, isEnabled);
  const heroData: any = {
    layoutHero: data?.project?.layoutHero,
    titleHero: data?.project?.titleHero,
    descriptionHero: data?.project?.descriptionHero,
    imageHero: data?.project?.imageHero,
    slideshowHero: data?.project?.slideshowHero,
    dateEvento: data?.project?.dates,
  };
  const pageData: any = {
    hero: heroData,
    ...data.project,
  };
  const slugData = extractSlugData(data.project);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <PageTemplate data={pageData} locale={locale} />
    </Wrapper>
  );
}
