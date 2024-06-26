import { draftMode } from "next/headers";
import { ProjectsIndexDocument, ProjectsDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import fetchDato from "@/lib/fetchDato";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";
import getSeoMeta from "@/lib/seoUtils";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = "it";

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(ProjectsIndexDocument, { locale: siteLocale }, false);
  const page: any = data?.projectsIndex || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page() {
  const siteLocale = locale as SiteLocale;
  const { isEnabled } = draftMode();
  const data = await fetchDato(ProjectsIndexDocument, { locale: siteLocale }, isEnabled);
  const page = data?.projectsIndex;
  const res = await fetchDato(ProjectsDocument, { locale: siteLocale }, isEnabled);

  const heroData = {
    titleHero: page?.title || "",
    descriptionHero: page?.description || "",
  };

  const pageData: any = {
    list: res.projects || [],
    hero: heroData,
    page,
  };
  const slugData = extractSlugData(data.projectsIndex);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <IndexPageTemplate data={pageData} locale={locale} />
    </Wrapper>
  );
}
