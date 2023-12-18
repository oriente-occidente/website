import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import type { BasicSlugPageProps } from "@/types";
import getSeoMeta from "@/lib/seoUtils";
import {
  AudiosIndexDocument,
  AllAudiosWebsiteDocument,
  SiteLocale,
} from "@/graphql/generated";
import fetchDato from "@/lib/fetchDato";
import HeroEmpty from "@/components/hero/HeroEmpty";
import MediaCard from "@/components/cards/MediaCard";

const locale = "it";

// export async function generateMetadata({ params }: BasicSlugPageProps) {
//   const { slug } = params;
//   const siteLocale = locale as SiteLocale;
//   const data = await fetchDato(
//     AudiosIndexDocument,
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
  const { audiosIndex } = await fetchDato(
    AudiosIndexDocument,
    { locale: siteLocale, slug },
    isEnabled
  );

  const { allMediaAudios } = await fetchDato(
    AllAudiosWebsiteDocument,
    { locale: siteLocale },
    isEnabled
  );

  if (!audiosIndex) notFound();
  const heroData = {
    titleHero: audiosIndex.title,
    descriptionHero: audiosIndex.description,
  };

  return (
    <div>
      <HeroEmpty data={heroData} locale={locale} />
      <div className="container my-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-5 gap-y-8">
        {allMediaAudios.map((a) => {
          const data = { ...a, contentType: "audio", image: a.image?.url };
          console.log("a.image?.url", a.image?.url);
          return (
            <div key={a.id}>
              <MediaCard data={data} locale={locale} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
