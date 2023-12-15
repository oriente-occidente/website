import { draftMode } from "next/headers";
import { NetworksIndexDocument, NetworksDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import fetchDato from "@/lib/fetchDato";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";
import getSeoMeta from "@/lib/seoUtils";

const locale = "it";

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
  const pageData: any = {
    list,
    hero: null,
    page,
  };
  return <IndexPageTemplate data={pageData} locale={locale} />;
}
