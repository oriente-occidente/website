"use client";
import { Image as DatoImage } from "react-datocms";
import Link from "next/link";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { groupDatesByDay } from "@/lib/utils";
import { GenericCardProps } from "@/types";
import resolveLink from "@/lib/resolveLink";
import translate from "@/lib/locales";

export default function CategoryCard({ data, locale }: GenericCardProps) {
  const datesGrouped = data.dates ? groupDatesByDay(data.dates, locale) : [];
  let categoryTitle;
  if (data.tags) {
    const catToShow = data.tags;
    if (Array.isArray(catToShow)) {
      categoryTitle = catToShow
        .map((cat) => {
          return cat.title;
        })
        .join(", ");
    } else {
      categoryTitle = catToShow.title;
    }
  }
  const categoryColorClasses: any = {
    news: "bg-cat-news",
    eventi: "bg-cat-eventi",
    linguaggi: "bg-cat-linguaggi",
    workshop: "bg-cat-workshop",
    artisti: "bg-cat-artisti",
    compagnie: "bg-cat-compagnie",
    residenze: "bg-cat-residenze",
    progetto: "bg-cat-progetto",
    pubblicazioni: "bg-cat-pubblicazioni",
    reti: "bg-cat-reti",
    partner: "bg-cat-partner",
    festival: "bg-cat-festival",
  };

  const categoryClasses = Object.keys(categoryColorClasses).includes(
    categoryTitle.toLowerCase()
  )
    ? categoryColorClasses[categoryTitle.toLowerCase()]
    : "bg-white";

  const link = resolveLink({ ...data, locale });

  return (
    <div className="relative py-4">
      <Link href={link} title={data.title} className="group">
        <div className="relative h-[220px] overflow-hidden md:h-[360px]">
          <div className="absolute z-20 bottom-0 group">
            {data.title &&
              (data.authors ||
                !data.titleHero ||
                data.titleHero !== data.title) &&
              categoryTitle != "artisti" && (
                <h2
                  className={`text-xs md:text-base xl:text-lg font-semibold uppercase ${categoryClasses} text-black px-10 mb-2 duration-300 group-hover:-rotate-[1deg]`}
                >
                  {data.title}
                </h2>
              )}
            {data.authors && (
              <div
                className={`text-xs md:text-base xl:text-lg font-semibold uppercase  px-10 duration-300 group-hover:rotate-[1deg] ${categoryClasses} text-black`}
              >
                {data.authors}
              </div>
            )}
          </div>
          <DatoImage
            className="dato-image-cover duration-300 group-hover:scale-105 "
            data={data.imageHero.responsiveImage}
          />
        </div>

        <div className="z-20">
          <div className="mt-4 mb-3">
            {categoryTitle && categoryTitle != "artisti" && (
              <span
                className={`px-2 py-1 font-semibold uppercase mr-2 ${categoryClasses} text-black`}
              >
                {categoryTitle}
              </span>
            )}
          </div>
          {data.location && categoryTitle != "artisti" && (
            <div className="flex items-center gap-1 text-red-alt">
              <MapPinIcon
                aria-hidden="true"
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
                <CalendarIcon aria-hidden="true" className="h-4 w-4" />
                <span className="text-xxs inline-block normal-case">{str}</span>
              </div>
            ))}
          {categoryTitle == "artisti" &&
            data.artisticResidence?.map((year: any, index: number) => (
              <div className="inline-flex" key={index}>
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
