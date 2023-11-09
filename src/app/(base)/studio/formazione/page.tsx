import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { SiteLocale } from "@/graphql/generated";
import fetchDato from "@/lib/fetchDato";
import { EducationPageQueryDocument } from "@/graphql/generated";
import PageTemplate from "@/components/templates/PageTemplate";

const locale = "it";

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
  const pageData = {
    seo: null,
    hero: heroData,
    content: data.educationPage?.content,
    sections: data.educationPage?.sections,
    relatedContents: [],
  };
  return <PageTemplate data={pageData} locale={locale} />;
}
