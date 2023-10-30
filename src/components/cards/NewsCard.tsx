"use client";
import { Image as DatoImage } from "react-datocms";
import Link from "next/link";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { formatDate } from "@/lib/utils";
import { NewsCardProps } from "@/types";
import resolveLink from "@/lib/resolveLink";

export default function NewsCard({ data, locale }: NewsCardProps) {
  console.log("data", data);
  let categoryTitle;
  if (data.category) {
    const catToShow = data.category;
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
  const link = resolveLink({ ...data, locale });
  return (
    <div className="relative py-4">
      <Link href={link} title={data.title} className="group">
        <div className="relative">
          <div className="absolute left-4 bottom-2 top-auto z-20 text-xxs font-semibold uppercase text-white md:left-8 md:bottom-8 md:text-xs ">
            {data.startDate && (
              <div className="hidden items-center gap-x-2 md:flex">
                <CalendarIcon aria-hidden="true" className="h-4 w-4" />
                <span className="font-light normal-case md:pr-1">
                  {formatDate(data.startDate, locale)}
                </span>
              </div>
            )}
            {data.location && (
              <div className="hidden items-center gap-x-2 md:flex">
                <MapPinIcon aria-hidden="true" className="h-4 w-4" />
                <span className="font-light normal-case md:pr-1">
                  {data.location}
                </span>
              </div>
            )}
            <span>{categoryTitle}</span>
          </div>
          <div className="relative h-[220px] overflow-hidden md:h-[360px]">
            <DatoImage
              className="dato-image-cover duration-300 group-hover:scale-105"
              data={data.imageHero.responsiveImage}
            />
          </div>
          <div className="absolute top-auto bottom-0 left-0 right-0 z-10 h-[65px] bg-gradient-to-t from-black/80 to-transparent md:h-[180px]"></div>
        </div>
        <div className="z-20  mt-2">
          {data.title &&
            (data.authors ||
              !data.titleHero ||
              data.titleHero !== data.title) && (
              <h2 className="text-sm uppercase text-black-light md:text-base">
                {data.title}
              </h2>
            )}
          {data.titleHero && !data.authors && (
            <h3 className="text-sm font-semibold uppercase text-black md:text-base ">
              {data.titleHero}
            </h3>
          )}
          {data.authors && (
            <div className="text-sm font-semibold uppercase text-black md:text-base ">
              {data.authors}
            </div>
          )}
        </div>
        {data.location && (
          <div className="flex items-center gap-1 md:hidden">
            <MapPinIcon
              aria-hidden="true"
              className="mr-1 h-4 w-3 text-black"
            />
            <div className="text-xxs">{data.location}</div>
          </div>
        )}
      </Link>
    </div>
  );
}
