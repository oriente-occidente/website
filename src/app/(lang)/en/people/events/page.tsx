import { draftMode } from "next/headers";
import { EventsIndexDocument, AllEventsDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";
import getSeoMeta from "@/lib/seoUtils";
import fetchDato from "@/lib/fetchDato";

const locale = 'en';

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    EventsIndexDocument,
    { locale: siteLocale },
    false
  );
  const page: any = data?.eventsIndex || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page() {
  const siteLocale = locale as SiteLocale;
  const { isEnabled } = draftMode();
  const page = await fetchDato(
    EventsIndexDocument,
    { locale: siteLocale },
    isEnabled
  );
  const res = await fetchDato(
    AllEventsDocument,
    { locale: siteLocale },
    isEnabled
  );
  let list: any = [];

  if (res?.events) {
    list = [...res.events];
  }

  const heroData = {
    titleHero: page?.eventsIndex?.title || "",
    descriptionHero: page?.eventsIndex?.description || "",
  };

  const pageData: any = {
    list,
    hero: heroData,
    page,
  };

  return <IndexPageTemplate data={pageData} locale={locale} />;
}
