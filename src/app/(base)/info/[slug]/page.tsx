import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import type { BasicSlugPageProps } from "@/types";
import queryDatoCMS from "@/lib/fetchDato";
import { PageDocument, SiteLocale } from "@/graphql/generated";
import PageTemplate from "@/components/templates/PageTemplate";

const locale = "it";
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
