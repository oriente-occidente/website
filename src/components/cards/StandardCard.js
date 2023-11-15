"use client";
import { Image as DatoImage } from "react-datocms";
import Link from "next/link";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { groupDatesByDay } from "@/lib/utils";
import resolveLink from "@/lib/resolveLink";

function StandardCard({ data, locale, categoryTitle = "" }) {
  const image = data.imageHero;
  const datesGrouped = data.dates ? groupDatesByDay(data.dates, locale) : [];
  const dateObject = new Date(data.startDate);
  const year = dateObject.getFullYear();

  return (
    <div className="relative py-4">
      <Link
        href={resolveLink({ ...data, locale })}
        locale={locale}
        title={data.title}
        className="group"
      >
        <div className="relative flex">
          <div className="text-xxs absolute left-4 bottom-2 top-auto z-20 font-semibold uppercase text-white md:left-8 md:bottom-6 md:text-xs">
            {datesGrouped.map((str) => (
              <div className="hidden items-center gap-x-2 md:flex" key={str}>
                <CalendarIcon aria-hidden="true" className="h-4 w-4" />
                <span className="font-light capitalize md:pr-1">{str}</span>
              </div>
            ))}
            {data._modelApiKey=="project" || "network" ? <div className="font-light">{year}</div> : ""}
            {data.location && (
              <div className="hidden items-center gap-x-2 md:flex">
                <MapPinIcon aria-hidden="true" className="h-4 w-4" />
                <span className="hidden font-light normal-case md:inline-block">
                  {data.location}
                </span>
              </div>
            )}
            {data.tags && data.tags.map((tag)=><div key={tag.id}>{tag.title}</div>)}
          </div>
          {image != null ? (
            <div className="relative h-[220px] overflow-hidden md:h-[360px]">
              <DatoImage
                className="duration-300 group-hover:scale-105"
                data={image.responsiveImage}
                alt={image.alt}
                title={image.title}
              />
            </div>
          ) : null}
          <div className="absolute bottom-0 left-0 right-0 z-10 h-[65px] bg-gradient-to-t from-black/80 to-transparent md:h-52"></div>
          <div className="absolute top-0 left-0 right-0 z-10 hidden h-48 bg-gradient-to-b from-black/80 to-transparent md:block"></div>
        </div>
       
        <div className="z-20 pt-2">
          <h2 className={`${data._modelApiKey=="project" || "network"? "font-semibold" : ""} text-sm uppercase text-black-light md:text-base`}>
            {data.title}
          </h2>
          {data.authors && (
            <div className="text-sm font-semibold uppercase text-black md:text-base">
              {data.authors}
            </div>
          )}
        </div>
        {/* {data.dates && (
            <div className="md:hidden flex gap-1 items-center">
              <CalendarIcon
                aria-hidden="true"
                className="w-3 h-4 mr-1 text-black"
              />
              <h3 className="inline-block md:hidden normal-case text-xxs">
                {showDates(data.dates, locale)}
              </h3>
            </div>
          )} */}
        {datesGrouped.map((d) => (
          <div className="flex items-center gap-1 md:hidden" key={"descr_" + d}>
            <CalendarIcon
              aria-hidden="true"
              className="mr-1 h-4 w-3 text-black"
            />
            <div className="text-xxs capitalize">{d}</div>
          </div>
        ))}
        {data.location && (
          <div className="flex items-center gap-1 md:hidden">
            <MapPinIcon
              aria-hidden="true"
              className="mr-1 h-4 w-3 text-black"
            />
            <div className="text-xxs inline-block normal-case md:hidden">
              {data.location}
            </div>
          </div>
        )}
      </Link>
    </div>
  );
}

export default StandardCard;