import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { toNextMetadata } from "react-datocms";

import fetchDato from "@/lib/fetchDato";
import { SiteLocale } from "@/graphql/generated";
import { EducationPageQueryDocument } from "@/graphql/generated";
import PageTemplate from "@/components/templates/PageTemplate";
import seoUtils from "@/lib/seoUtils";

const locale = "it";

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    EducationPageQueryDocument,
    { locale: siteLocale },
    false
  );
  const page = data.educationPage || null;
  const seoData = seoUtils(page as any);
  console.log("seoData", JSON.stringify(seoData, null, 2));
  const tags = toNextMetadata(seoData?.tags || []);

  return tags;
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
