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
  let list: any = [];

  if (res.projects) {
    list = [...res.projects];
  }

  const heroData = {
    titleHero: page?.projectsIndex?.title || "",
    descriptionHero: page?.projectsIndex?.description || "",
  };
  const dummyPaths = [
    {
      name: page?.projectsIndex?.title || "",
      href: "#",
      current: false,
    },
  ];

  const pageData = {
    list,
    seo: null,
  };
  return <IndexPageTemplate data={pageData} locale={locale} />;
}
