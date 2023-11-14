"use client";
import { Image as DatoImage } from "react-datocms";
import Link from "next/link";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { groupDatesByDay, categoryColorClasses } from "@/lib/utils";
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

  const categoryClasses = categoryColorClasses(categoryTitle);

  const link = resolveLink({ ...data, locale });

  return (
    <div className="relative py-4">
      <Link href={link} title={data.title} className="group">
        <div className="relative h-[220px] overflow-hidden md:h-[360px]">
          <div className="absolute z-20 bottom-0 group">
            {/* {data.title &&
              (data.authors ||
                !data.titleHero ||
                data.titleHero !== data.title) &&
              categoryTitle != "artisti" &&
              data.titleHero !== data.title &&
              categoryTitle != "artisti" && ( */}
            {data.title && (
              <h2
                className={`pr-5 text-lg font-semibold uppercase text-black md:text-lg group-hover:origin-left group-hover:-rotate-1 group-hover:-translate-y-3 duration-300`}
              >
                <span className={`${categoryClasses}`}>{data.title}</span>
              </h2>
            )}
            {data.titleHero && !data.authors && (
              <h3
                className={`text-base font-semibold uppercase text-black md:text-lg group-hover:origin-right group-hover:rotate-1 group-hover:-translate-y-1 duration-300`}
              >
                <span className={`${categoryClasses}`}>{data.titleHero}</span>
              </h3>
            )}
            {data.authors && (
              <div
                className={`font-semibold uppercase text-black md:text-base group-hover:origin-right group-hover:rotate-1 group-hover:-translate-y-1 duration-300`}
              >
                <span className={`${categoryClasses}`}>{data.authors}</span>
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
                className={`px-2 py-1 font-semibold uppercase mr-2 ${categoryClasses}`}
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