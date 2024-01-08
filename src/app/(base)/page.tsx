import { draftMode } from "next/headers";
import HomeTemplate from "@/components/templates/HomeTemplate";
import { HomeDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = "it";
async function Home() {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(HomeDocument, { locale: siteLocale }, isEnabled);

  if (!data.home) return null;
  const slugData = extractSlugData(data.home);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <HomeTemplate data={data.home} locale={locale} />
    </Wrapper>
  );
}

export default Home;
