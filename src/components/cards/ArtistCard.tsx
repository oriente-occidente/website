"use client";
import Image from "next/image";
import { Image as DatoImage } from "react-datocms";
import Link from "next/link";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { groupDatesByDay, removeSpaces } from "@/lib/utils";
import { GenericCardProps, ArtisticResidenceYear } from "@/types";
import resolveLink from "@/lib/resolveLink";
import translate from "@/lib/locales";

export default function CategoryCard({
  data,
  locale,
  model,
}: GenericCardProps) {
  let categoryTitle;
  if (data.contentType || data._modelApiKey) {
    const catToShow = data.contentType ? data.contentType : data._modelApiKey;
    if (Array.isArray(catToShow)) {
      categoryTitle = catToShow
        .map((cat) => {
          return cat.title;
        })
        .join(", ");
    } else {
      categoryTitle = catToShow;
    }
  }
  function categoryColorClasses(cat: string) {
    let c = removeSpaces(cat);
    switch (c) {
      case "news":
        return "card-title-news";
      case "event":
        return "card-title-eventi";
      case "linguaggi":
        return "card-title-linguaggi";
      case "workshop":
        return "card-title-workshop";
      case "artist":
        return "card-title-artisti";
      case "company":
        return "card-title-compagnie";
      case "artistic_residecy":
        return "card-title-residenze";
      case "project":
        return "card-title-progetto";
      case "pubblicazioni":
        return "card-title-pubblicazioni";
      case "network":
        return "card-title-reti";
      case "partner":
        return "card-title-partner";
      case "festival":
        return "card-title-festival";
      case "festival-spettacoli":
        return "card-title-festival";
      case "festival-linguaggi":
        return "card-title-festival";
      default:
        return "card-title-default";
    }
  }
  const categoryClasses = categoryColorClasses(
    categoryTitle ? categoryTitle : ""
  );
  const link = resolveLink({ ...data, locale });

  return (
    <div className="relative py-4">
      <Link
        href={link}
        title={data.title}
        className="group"
        aria-label={`Vai a ${data.title}`}
      >
        <div className="relative overflow-hidden">
          <div className="absolute z-20 bottom-0 group">
            {data.title && (
              <h3
                className={`pr-5 text-base sm:text-lg font-semibold uppercase text-black md:text-lg group-hover:origin-left group-hover:-rotate-1 group-hover:-translate-y-3 duration-300`}
              >
                <span className={`${categoryClasses}`}>{data.title}</span>
              </h3>
            )}
          </div>
          {data.imageHero && (
            <DatoImage
              className="duration-300 group-hover:scale-105 "
              data={data.imageHero.responsiveImage}
            />
          )}
          {!data.imageHero && (
            <Image
              width={600}
              height={600}
              className="aspect-[20/16] w-full object-cover"
              src="/artist-placeholder.jpg"
              alt={data.title || ""}
            />
          )}
        </div>

        <div className="z-20">
          <div className="mt-4 mb-3">
            {model == "artistic_residencies_index" &&
              data.artisticResidence
                ?.sort(
                  (a: ArtisticResidenceYear, b: ArtisticResidenceYear) =>
                    b.year - a.year
                )
                .map((yearObj: ArtisticResidenceYear, index: number) => {
                  const { year } = yearObj;
                  return (
                    <div key={year + index} className="inline-flex">
                      {index == 0 ? `${year}` : `| ${year}`}&nbsp;
                    </div>
                  );
                })}
            {model == "artists_index" &&
              data.associatedArtist
                ?.sort(
                  (
                    { year: a }: { year: number },
                    { year: b }: { year: number }
                  ) => b - a
                )
                .map((yearObj: ArtisticResidenceYear, index: number) => {
                  const { year } = yearObj;
                  return (
                    <div key={year + index} className="inline-flex">
                      {index == 0 ? `${year}` : `| ${year}`}&nbsp;
                    </div>
                  );
                })}
          </div>
          <div className="mt-3 uppercase font-semibold text-xxs flex items-center">
            <div>{translate("goToContents", locale)}</div>
            <div className=" h-[20px] w-[20px] bg-arrow-right-black ml-3 group-hover:ml-5 motion-safe:duration-200" />
          </div>
        </div>
      </Link>
    </div>
  );
}
