"use client";
import { Image as DatoImage } from "react-datocms";
import Link from "next/link";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { categoryColorClass, formatDate } from "@/lib/utils";
import { GenericCardProps } from "@/types";
import resolveLink from "@/lib/resolveLink";

export default function NewsCard({ data, locale }: GenericCardProps) {
  // console.log("data", data.tags);
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
    news: "bg-cat-news text-black",
    eventi: "bg-cat-eventi text-black",
    linguaggi: "bg-cat-linguaggi text-black",
    workshop: "bg-cat-workshop text-black",
    artisti: "bg-cat-artisti text-black",
    compagnie: "bg-cat-compagnie text-black",
    residenze: "bg-cat-residenze text-black",
    progetto: "bg-cat-progetto text-black",
    pubblicazioni: "bg-cat-pubblicazioni text-black",
    reti: "bg-cat-reti text-black",
    partner: "bg-cat-partner text-black",
    festival: "bg-cat-festival text-black",
  };
  const categoryClasses = categoryColorClasses[categoryTitle.toLowerCase()];

  const link = resolveLink({ ...data, locale });

  return (
    <div className="relative py-4">
      <Link href={link} title={data.title} className="group">
        <div className="relative h-[220px] overflow-hidden md:h-[360px]">
          <DatoImage
            className="dato-image-cover duration-300 group-hover:scale-105"
            data={data.imageHero.responsiveImage}
          />
        </div>

        <div className="z-20">
          <div className="mt-4 mb-3">
            {categoryTitle && (
              <span
                className={`px-2 py-1 font-semibold uppercase mr-2 ${categoryClasses}`}
              >
                {categoryTitle}
              </span>
            )}
            {data.startDate && (
              <span className="font-semibold text-xs uppercase md:ml-2">
                {formatDate(data.startDate, locale)}
              </span>
            )}
          </div>
          {data.title &&
            (data.authors ||
              !data.titleHero ||
              data.titleHero !== data.title) && (
              <h2 className="text-base font-semibold uppercase text-black md:text-lg group-hover:underline">
                {data.title}
              </h2>
            )}
          {data.titleHero && !data.authors && (
            <h3 className="text-xs text-black ">{data.titleHero}</h3>
          )}
          {data.authors && (
            <div className="text-sm font-semibold uppercase text-black md:text-base ">
              {data.authors}
            </div>
          )}

          <div className="mt-3 uppercase font-semibold text-xxs flex items-center">
            <div>Vai al contenuto</div>
            <div className=" hidden h-[20px] w-[20px] bg-arrow-right-black lg:block ml-3 group-hover:ml-5 motion-safe:duration-200" />
          </div>
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
