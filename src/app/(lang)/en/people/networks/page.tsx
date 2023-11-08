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
  let list: any = [];

  if (res.networks) {
    list = [...res.networks];
  }

  const heroData = {
    titleHero: page?.networksIndex?.title || "",
    descriptionHero: page?.networksIndex?.description || "",
  };
  const pageData = {
    seo: null,
    list,
    hero: heroData,
  };
  return <IndexPageTemplate data={pageData} locale={locale} />;
}
