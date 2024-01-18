import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import type { BasicSlugPageProps } from "@/types";
import getSeoMeta from "@/lib/seoUtils";
import {
  VideosIndexDocument,
  AllVideosWebsiteDocument,
  SiteLocale,
} from "@/graphql/generated";
import fetchDato from "@/lib/fetchDato";
import HeroEmpty from "@/components/hero/HeroEmpty";
import MediaCard from "@/components/cards/MediaCard";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = "it";

// export async function generateMetadata({ params }: BasicSlugPageProps) {
//   const { slug } = params;
//   const siteLocale = locale as SiteLocale;
//   const data = await fetchDato(
//     VideosIndexDocument,
//     { locale: siteLocale, slug },
//     false
//   );
//   const page: any = data?.page || null;
//   const meta = getSeoMeta(page);
//   return meta;
// }

export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;

  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const { videosIndex } = await fetchDato(
    VideosIndexDocument,
    { locale: siteLocale, slug },
    isEnabled
  );

  const { allMediaVideos } = await fetchDato(
    AllVideosWebsiteDocument,
    { locale: siteLocale },
    isEnabled
  );

  if (!videosIndex) notFound();
  const heroData = {
    titleHero: videosIndex.title,
    descriptionHero: videosIndex.description,
  };
  const slugData = extractSlugData(videosIndex);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <div>
        <HeroEmpty data={heroData} locale={locale} />
        <div className="container my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-5 gap-y-8">
          {allMediaVideos.map((v) => {
            const data = { ...v, contentType: "video", image: v.image?.url };
            return (
              <div key={v.id}>
                <MediaCard data={data} locale={locale} />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
