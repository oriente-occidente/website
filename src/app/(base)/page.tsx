import { draftMode } from "next/headers";

import HomeTemplate from "@/components/templates/HomeTemplate";
import { HomeDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";

const locale = "it";
async function Home() {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    HomeDocument,
    { locale: siteLocale },
    isEnabled
  );

  if (!data.home) return null;
  return <HomeTemplate data={data.home} locale={locale} />;
}

export default Home;
