import { draftMode } from "next/headers";

import fetchDato from "@/lib/fetchDato";
import { NewsIndexDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";

const locale = "it";

export default async function Page() {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    NewsIndexDocument,
    { locale: siteLocale, archived: false },
    isEnabled
  );
  const list = data.news || [];
  const page = data.newsIndex;
  const pageData: any = {
    list,
    hero: null,
    page,
  };

  return <IndexPageTemplate data={pageData} locale={locale} />;
}
