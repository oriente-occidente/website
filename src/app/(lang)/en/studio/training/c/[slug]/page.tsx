import { draftMode } from "next/headers";
import queryDatoCMS from "@/lib/fetchDato";
import { SiteLocale, AllWorkshopsByCategoryQueryDocument } from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import WorkshopByCategory from "@/components/WorkshopByCategory";

const locale = 'en';
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;

  const data = await queryDatoCMS(
    AllWorkshopsByCategoryQueryDocument,
    { locale: siteLocale, slug: slug != "all" ? slug : undefined },
    isEnabled
  );

  let workshopCat: string = "";
  let list: any = [];

  if (data.allWorkshopCategories && data.allWorkshopCategories.length > 0) {
    if (data.allWorkshopCategories.length == 1) {
      workshopCat = data.allWorkshopCategories[0].slug;
      list = data.allWorkshopCategories[0]._allReferencingWorkshops;
    } else {
      workshopCat = "all";
      list = data.allWorkshopCategories
        .map(({ _allReferencingWorkshops }) => _allReferencingWorkshops)
        .filter((a) => a.length > 0);
    }
  }

  const heroData: any = {
    titleHero: "Workshop",
  };
  // const pageData: any = {
  //   hero: heroData,
  //   ...data.workshop,
  // };

  return (
    <WorkshopByCategory
      list={list.flat()}
      workshopCat={workshopCat}
      locale={locale}
      heroData={heroData}
    />
  );
  // return <></>;
}
