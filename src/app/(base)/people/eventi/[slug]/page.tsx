import { draftMode } from "next/headers";
import queryDatoCMS from "@/lib/fetchDato";
import { EventDocument, SiteLocale } from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import PageTemplate from "@/components/templates/PageTemplate";

const locale = "it";
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    EventDocument,
    { locale: siteLocale, slug },
    isEnabled
  );
  const heroData: any = {
    layoutHero: data?.event?.layoutHero,
    titleHero: data?.event?.titleHero,
    descriptionHero: data?.event?.descriptionHero,
    imageHero: data?.event?.imageHero,
    slideshowHero: data?.event?.slideshowHero,
  };
  const pageData: any = {
    hero: heroData,
    ...data.event,
  };
  return <PageTemplate data={pageData} locale={locale} />;
}
