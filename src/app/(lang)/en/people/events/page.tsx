import { draftMode } from "next/headers";
import { EventsIndexDocument, AllEventsDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";
import getSeoMeta from "@/lib/seoUtils";
import fetchDato from "@/lib/fetchDato";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = 'en';

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(EventsIndexDocument, { locale: siteLocale }, false);
  const page: any = data?.eventsIndex || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page() {
  const siteLocale = locale as SiteLocale;
  const { isEnabled } = draftMode();
  const data = await fetchDato(EventsIndexDocument, { locale: siteLocale }, isEnabled);
  const page = data?.eventsIndex;
  const res = await fetchDato(AllEventsDocument, { locale: siteLocale }, isEnabled);
  let list: any = [];

  if (res?.events) {
    list = [...res.events];
  }

  const heroData = {
    titleHero: page?.title || "",
    descriptionHero: page?.description || "",
  };

  const pageData: any = {
    list,
    hero: heroData,
    page,
  };
  const slugData = extractSlugData(data.eventsIndex);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <IndexPageTemplate data={pageData} locale={locale} />
    </Wrapper>
  );
}
