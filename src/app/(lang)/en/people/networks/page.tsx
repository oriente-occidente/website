import { draftMode } from "next/headers";
import { NetworksIndexDocument, NetworksDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import fetchDato from "@/lib/fetchDato";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";
import getSeoMeta from "@/lib/seoUtils";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = 'en';

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    NetworksIndexDocument,
    { locale: siteLocale },
    false
  );
  const page: any = data?.networksIndex || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page() {
  const siteLocale = locale as SiteLocale;
  const { isEnabled } = draftMode();
  const data = await fetchDato(
    NetworksIndexDocument,
    { locale: siteLocale },
    isEnabled
  );
  const page = data?.networksIndex;
  const res = await fetchDato(
    NetworksDocument,
    { locale: siteLocale },
    isEnabled
  );
  let list: any = res?.networks || [];

  const heroData = {
    titleHero: page?.title || "",
    descriptionHero: page?.description || "",
  };

  const pageData: any = {
    list,
    hero: heroData,
    page,
  };
  const slugData = extractSlugData(data.networksIndex);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <IndexPageTemplate data={pageData} locale={locale} />
    </Wrapper>
  );
}
