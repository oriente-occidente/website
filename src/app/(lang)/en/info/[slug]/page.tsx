import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import type { BasicSlugPageProps } from "@/types";
import queryDatoCMS from "@/lib/fetchDato";
import { PageDocument, ProgramDocument, SiteLocale } from "@/graphql/generated";
import HeroIndex from "@/components/hero/HeroIndex";
import HeroDetail from "@/components/hero/HeroDetail";
import HeroEmpty from "@/components/hero/HeroEmpty";
import MainContent from "@/components/contents/MainContent";
import OtherSections from "@/components/contents/OtherSections";
import SectionsParagraphs from "@/components/contents/SectionsParagraphs";

const locale = "en";
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;

  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    PageDocument,
    { locale: siteLocale, slug },
    isEnabled
  );

  if (!data.page) notFound();
  const heroData: any = {
    layoutHero: data?.page?.layoutHero,
    titleHero: data?.page?.titleHero,
    descriptionHero: data?.page?.descriptionHero,
    imageHero: data?.page?.imageHero,
    slideshowHero: data?.page?.slideshowHero,
  };
  const pageData = {
    seo: null,
    hero: heroData,
    content: data.page?.content,
    sections: data.page?.sections,
    relatedContents: data.page?.relatedContents,
  };
  return <PageTemplate data={pageData} locale={locale} />;
}
