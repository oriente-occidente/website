import { draftMode } from "next/headers";
import {
  SiteLocale,
  AllWorkshopsByCategoryQueryDocument,
  EducationPageQueryDocument,
} from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import WorkshopByCategory from "@/components/WorkshopByCategory";
import fetchDato from "@/lib/fetchDato";
import getSeoMeta from "@/lib/seoUtils";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = "it";

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(EducationPageQueryDocument, { locale: siteLocale }, false);
  const page: any = data.educationPage || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;

  const data = await fetchDato(
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
  const slugData = extractSlugData(data.allWorkshopCategories);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <WorkshopByCategory
        list={list.flat()}
        workshopCat={workshopCat}
        locale={locale}
        heroData={heroData}
      />
    </Wrapper>
  );
  // return <></>;
}
