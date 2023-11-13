import { draftMode } from "next/headers";
import queryDatoCMS from "@/lib/fetchDato";
import { SiteLocale, WorkshopDocument } from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import PageTemplate from "@/components/templates/PageTemplate";

const locale = "it";
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    WorkshopDocument,
    { locale: siteLocale, slug },
    isEnabled
  );
  const heroData: any = {
    layoutHero: data?.workshop?.layoutHero,
    titleHero: data?.workshop?.titleHero,
    descriptionHero: data?.workshop?.descriptionHero,
    imageHero: data?.workshop?.imageHero,
    slideshowHero: data?.workshop?.slideshowHero,
    dateEvento: data?.workshop?.dates,
  };
  const pageData: any = {
    hero: heroData,
    ...data.workshop,
  };

  return <div></div>;
}
