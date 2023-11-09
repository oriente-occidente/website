import { draftMode } from "next/headers";
import { ProjectsIndexDocument, ProjectsDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import fetchDato from "@/lib/fetchDato";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";

const locale = "it";
export default async function Page() {
  const siteLocale = locale as SiteLocale;
  const { isEnabled } = draftMode();
  const page = await fetchDato(
    ProjectsIndexDocument,
    { locale: siteLocale },
    isEnabled
  );
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
