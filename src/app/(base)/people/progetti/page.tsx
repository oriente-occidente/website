import { draftMode } from "next/headers";
import {
  ProjectsIndexDocument,
  ProgramDocument,
  ProjectsDocument,
} from "@/graphql/generated";
import HeroEmpty from "@/components/hero/HeroEmpty";
import { SiteLocale } from "@/graphql/generated";
import Breadcrumbs from "@/components/Breadcrumbs";
import fetchDato from "@/lib/fetchDato";

const locale = "it";
export default async function Page() {
  const siteLocale = locale as SiteLocale;
  const { isEnabled } = draftMode();
  const page = await fetchDato(ProjectsIndexDocument, { locale: siteLocale }, isEnabled);
  const res = await fetchDato(ProjectsDocument, { locale: siteLocale }, isEnabled);
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
  return (
    <div>
      <Breadcrumbs
        // id="#main-content"
        background="gray"
        paths={dummyPaths}
        locale={locale}
      />
      <HeroEmpty data={heroData} />
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
}
