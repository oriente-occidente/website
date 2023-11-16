import { draftMode } from "next/headers";
import queryDatoCMS from "@/lib/fetchDato";
import { SiteLocale, WorkshopByCategoryQueryDocument } from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import WorkshopByCategory from "@/components/WorkshopByCategory";

const locale = "it";
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    WorkshopByCategoryQueryDocument,
    { locale: siteLocale, slug },
    isEnabled
  );
  const heroData: any = {
    titleHero: data?.workshopCategory?.title || "",
  };
  // const pageData: any = {
  //   hero: heroData,
  //   ...data.workshop,
  // };

  return (
    <WorkshopByCategory
      list={data.workshopCategory?._allReferencingWorkshops || []}
      workshopCat={slug}
      locale={locale}
      heroData={heroData}
    />
  );
  // return <></>;
}
