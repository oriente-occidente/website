import { draftMode } from "next/headers";
import { ArtistsIndexDocument, AssociatedArtistsDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";
import getSeoMeta from "@/lib/seoUtils";
import fetchDato from "@/lib/fetchDato";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = "it";

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(ArtistsIndexDocument, { locale: siteLocale }, false);
  const page: any = data?.page || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page() {
  const siteLocale = locale as SiteLocale;
  const { isEnabled } = draftMode();
  const data = await fetchDato(ArtistsIndexDocument, { locale: siteLocale }, isEnabled);
  const page = data?.page;
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
  const slugData = extractSlugData(data.page);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <IndexPageTemplate data={pageData} locale={locale} />
    </Wrapper>
  );
}
