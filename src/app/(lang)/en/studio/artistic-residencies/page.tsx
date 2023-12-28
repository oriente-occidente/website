import { draftMode } from "next/headers";
import {
  AllArtisticResidenciesQueryDocument,
  ArtisticResidenciesIndexDocument,
  SiteLocale,
} from "@/graphql/generated";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";
import getSeoMeta from "@/lib/seoUtils";
import fetchDato from "@/lib/fetchDato";

const locale = 'en';

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    ArtisticResidenciesIndexDocument,
    { locale: siteLocale },
    false
  );
  const page: any = data?.artisticResidenciesIndex || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page() {
  const siteLocale = locale as SiteLocale;
  const { isEnabled } = draftMode();
  const data = await fetchDato(
    ArtisticResidenciesIndexDocument,
    { locale: siteLocale },
    isEnabled
  );
  const page = data.artisticResidenciesIndex;
  const res = await fetchDato(
    AllArtisticResidenciesQueryDocument,
    { locale: siteLocale },
    isEnabled
  );
  let list: any = [];

  if (res.allArtisticResidecies) {
    list = [...res.allArtisticResidecies];
  }

  const heroData = {
    titleHero: page?.title || "",
    descriptionHero: page?.descriptionHero || "",
  };

  const pageData: any = {
    list,
    hero: heroData,
    page,
  };
  return <IndexPageTemplate data={pageData} locale={locale} />;
}
