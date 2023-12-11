import { draftMode } from "next/headers";
import { NewsIndexDocument, AllNewsDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";
import getSeoMeta from "@/lib/seoUtils";
import fetchDato from "@/lib/fetchDato";

const locale = 'en';

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    NewsIndexDocument,
    { locale: siteLocale },
    false
  );
  const page: any = data?.newsIndex || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    NewsIndexDocument,
    { locale: siteLocale },
    isEnabled
  );
  const res = await fetchDato(
    AllNewsDocument,
    { locale: siteLocale },
    isEnabled
  );

  const pageData: any = {
    list: res.allNews || [],
    hero: null,
    page: data?.newsIndex,
  };
  return <IndexPageTemplate data={pageData} locale={locale} />;
}
