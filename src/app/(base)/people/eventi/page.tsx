import { draftMode } from "next/headers";
import { EventsIndexDocument, ProgramDocument } from "@/graphql/generated";
import ResultsGridWorkshop from "@/components/ResultsGridSorted";
import HeroEmpty from "@/components/hero/HeroEmpty";
import { SiteLocale } from "@/graphql/generated";
import Breadcrumbs from "@/components/Breadcrumbs";
import fetchDato from "@/lib/fetchDato";

const locale = "it";
export default async function Page() {
  const siteLocale = locale as SiteLocale;
  const { isEnabled } = draftMode();
  const page = await fetchDato(EventsIndexDocument, { locale: siteLocale }, isEnabled);
  const res = await fetchDato(ProgramDocument, { locale: siteLocale }, isEnabled);
  let list: any = [];

  if (res.festivalEvents) {
    list = [...res.festivalEvents];
  }

  const heroData = {
    titleHero: page?.eventsIndex?.title || "",
    descriptionHero: page?.eventsIndex?.description || "",
  };
  const dummyPaths = [
    {
      name: page?.eventsIndex?.title || "",
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
