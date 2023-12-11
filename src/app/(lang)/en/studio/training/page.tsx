import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import fetchDato from "@/lib/fetchDato";
import { SiteLocale } from "@/graphql/generated";
import { EducationPageQueryDocument } from "@/graphql/generated";
import PageTemplate from "@/components/templates/PageTemplate";
import getSeoMeta from "@/lib/seoUtils";

const locale = 'en';

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(EducationPageQueryDocument, { locale: siteLocale }, false);
  const page: any = data.educationPage || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page() {
  const siteLocale = locale as SiteLocale;
  const { isEnabled } = draftMode();
  const data = await fetchDato(
    EducationPageQueryDocument,
    { locale: siteLocale },
    isEnabled
  );
  if (!data.educationPage) notFound();
  const heroData: any = {
    layoutHero: data?.educationPage?.layoutHero,
    titleHero: data?.educationPage?.titleHero,
    descriptionHero: data?.educationPage?.descriptionHero,
    imageHero: data?.educationPage?.imageHero,
    slideshowHero: data?.educationPage?.slideshowHero,
  };
  const pageData: any = {
    hero: heroData,
    ...data.educationPage,
  };
  return <PageTemplate data={pageData} locale={locale} />;
}
