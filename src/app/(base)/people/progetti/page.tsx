import { draftMode } from "next/headers";
import { ProjectsIndexDocument, ProjectsDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import fetchDato from "@/lib/fetchDato";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";
import getSeoMeta from "@/lib/seoUtils";

const locale = "it";

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    ProjectsIndexDocument,
    { locale: siteLocale },
    false
  );
  const page: any = data?.projectsIndex || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page() {
  const siteLocale = locale as SiteLocale;
  const { isEnabled } = draftMode();
  const data = await fetchDato(
    ProjectsIndexDocument,
    { locale: siteLocale },
    isEnabled
  );
  const page = data?.projectsIndex;
  const res = await fetchDato(
    ProjectsDocument,
    { locale: siteLocale },
    isEnabled
  );

  const pageData: any = {
    list: res.projects || [],
    hero: null,
    page,
  };

  return <IndexPageTemplate data={pageData} locale={locale} />;
}
