import { draftMode } from "next/headers";
import { NetworksIndexDocument, NetworksDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import fetchDato from "@/lib/fetchDato";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";

const locale = 'en';
export default async function Page() {
  const siteLocale = locale as SiteLocale;
  const { isEnabled } = draftMode();
  const page = await fetchDato(
    NetworksIndexDocument,
    { locale: siteLocale },
    isEnabled
  );
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
