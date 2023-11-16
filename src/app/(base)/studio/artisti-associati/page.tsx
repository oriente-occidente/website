import { draftMode } from "next/headers";
import {
  ArtistsIndexDocument,
  AssociatedArtistsDocument,
} from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";
import getSeoMeta from "@/lib/seoUtils";
import fetchDato from "@/lib/fetchDato";

const locale = "it";

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    ArtistsIndexDocument,
    { locale: siteLocale },
    false
  );
  const page: any = data?.artistsIndex || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page() {
  const siteLocale = locale as SiteLocale;
  const { isEnabled } = draftMode();
  const page: any = await fetchDato(
    ArtistsIndexDocument,
    { locale: siteLocale },
    isEnabled
  );
  const res = await fetchDato(
    AssociatedArtistsDocument,
    { locale: siteLocale },
    isEnabled
  );
  let list: any = [];

  if (res.associatedArtists) {
    list = [...res.associatedArtists];
  }

  const heroData: any = {
    layoutHero: page?.layoutHero,
    titleHero: page?.titleHero,
    descriptionHero: page?.descriptionHero,
    imageHero: page?.imageHero,
    slideshowHero: page?.slideshowHero,
  };

  const pageData: any = {
    list,
    hero: heroData,
    page,
  };
  return <IndexPageTemplate data={pageData} locale={locale} />;
}
