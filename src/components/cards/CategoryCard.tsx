"use client";
import { Image as DatoImage } from "react-datocms";
import Image from "next/image";
import Link from "next/link";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { groupDatesByDay, removeSpaces } from "@/lib/utils";
import { GenericCardProps } from "@/types";
import resolveLink from "@/lib/resolveLink";
import translate from "@/lib/locales";

export default function CategoryCard({ data, locale }: GenericCardProps) {
  // console.log("data", data);
  const datesGrouped = data.dates ? groupDatesByDay(data.dates, locale) : [];
  // console.log("data", data);
  let categoryTitle;
  // if (data.category) {
  //   const catToShow = data.category;
  //   if (Array.isArray(catToShow)) {
  //     categoryTitle = catToShow
  //       .map((cat) => {
  //         return cat.title;
  //       })
  //       .join(", ");
  //   } else {
  //     categoryTitle = catToShow.title;
  //   }
  // }
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
      case "languages":
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

  function checkWorkshops(catTitle: string) {
    if (catTitle == "workshop") {
      if (data.isWorkshop == false) {
        categoryTitle = "languages";
      }
    }
  }
  checkWorkshops(categoryTitle);
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
        <div className="relative overflow-hidden aspect-[4/3.2] bg-gray-light">
          <div className="absolute z-20 bottom-0 group">
            {/* {data.title &&
              (data.authors ||
                !data.titleHero ||
                data.titleHero !== data.title) &&
              categoryTitle != "artisti" &&
              data.titleHero !== data.title &&
              categoryTitle != "artisti" && ( */}
            {data.title && (
              <h3
                className={`pr-5 text-sm md:text-lg font-semibold uppercase leading-6 text-black md:text-lg group-hover:origin-left group-hover:-rotate-1 group-hover:-translate-y-3 duration-300`}
              >
                <span className={`${categoryClasses}`}>{data.title}</span>
              </h3>
            )}
            {/* {data.titleHero && !data.authors && (
              <h3
                className={`text-base font-semibold uppercase text-black md:text-lg group-hover:origin-right group-hover:rotate-1 group-hover:-translate-y-1 duration-300`}
              >
                <span className={`${categoryClasses}`}>{data.titleHero}</span>
              </h3>
            )} */}
            {data.authors && (
              <div
                className={`font-semibold uppercase text-black text-[12px] md:text-base group-hover:origin-right group-hover:rotate-1 group-hover:-translate-y-1 duration-300`}
              >
                <span className={`${categoryClasses}`}>{data.authors}</span>
              </div>
            )}
          </div>
          {data.previewImage && (
            <Image
              className="duration-300 group-hover:scale-105"
              src={data.previewImage}
              alt={
                data.previewImage.alt
                  ? data.previewImage.alt
                  : "Oriente Occidente"
              }
              width={600}
              height={200}
            />
          )}
          {!data.previewImage &&
            data.imageHero &&
            data.imageHero.responsiveImage && (
              <DatoImage
                className="duration-300 group-hover:scale-105 "
                data={data.imageHero.responsiveImage}
                layout="fill"
                objectFit="cover"
              />
            )}
          {!data.imageHero && data.image && (
            <div className="relative overflow-hidden">
              <Image
                className="duration-300 group-hover:scale-105"
                src={data.image}
                alt={data.image.alt ? data.image.alt : "Oriente Occidente"}
                width={600}
                height={200}
              />
            </div>
          )}
          {!data.imageHero && !data.image && (
            <Image
              width={600}
              height={200}
              className="aspect-[20/16] w-full object-cover"
              src="/artist-placeholder.jpg"
              alt={data.title || ""}
            />
          )}
        </div>

        <div className="z-20">
          <div className="mt-4 mb-3 flex items-center">
            {categoryTitle &&
              categoryTitle != "artist" &&
              categoryTitle != "festival_edition" && (
                <span
                  className={`px-2 py-1 text-[13px] md:text-sm font-semibold uppercase mr-2 ${categoryClasses}`}
                >
                  {translate(categoryTitle.toLowerCase(), locale)}
                </span>
              )}
            {data.category?.length > 0 && (
              <>
                {data.category.map((cat: any) => {
                  return (
                    <div
                      key={cat.id}
                      className="text-[13px] md:text-sm uppercase font-semibold leading-[1]"
                    >
                      {cat.title}
                    </div>
                  );
                })}
              </>
            )}
          </div>
          {data.location && categoryTitle != "artisti" && (
            <div className="flex items-center gap-1 text-red-alt">
              <MapPinIcon
                aria-hidden="true"
                focusable="false"
                className="mr-1 h-4 w-3 text-red-alt"
              />
              <div className="text-xxs inline-block normal-case">
                {data.location}
              </div>
            </div>
          )}
          {categoryTitle != "artisti" &&
            datesGrouped.map((str) => (
              <div className="items-center gap-x-2 flex text-red-alt" key={str}>
                <CalendarIcon
                  aria-hidden="true"
                  focusable="false"
                  className="h-4 w-4"
                />
                <span className="text-xxs inline-block normal-case">{str}</span>
              </div>
            ))}
          {categoryTitle == "artisti" &&
            data.artisticResidence?.map((year: any, index: number) => (
              <div key={year} className="inline-flex">
                {index == 0 ? `${year}` : `| ${year}`}&nbsp;
              </div>
            ))}
          <div className="mt-3 uppercase font-semibold text-xxs flex items-center">
            <div>{translate("goToContents", locale)}</div>
            <div className=" h-[20px] w-[20px] bg-arrow-right-black ml-3 group-hover:ml-5 motion-safe:duration-200" />
          </div>
        </div>
      </Link>
    </div>
  );
}
