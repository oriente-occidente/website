"use client";
import { Image as DatoImage,SRCImage } from "react-datocms";
import Image from "next/image";
import Link from "next/link";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { formatDate } from "@/lib/utils";
import { GenericCardProps } from "@/types";
import resolveLink from "@/lib/resolveLink";

export default function NewsCard({ data, locale, count }: GenericCardProps) {
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
  // console.log("categoryTitle", categoryTitle);
  const categoryColorClasses: any = {
    news: "bg-cat-news text-black",
    event: "bg-cat-eventi text-black",
    languages: "bg-cat-linguaggi text-black",
    workshop: "bg-cat-workshop text-black",
    artist: "bg-cat-artisti text-black",
    company: "bg-cat-compagnie text-black",
    artistic_residecy: "bg-cat-residenze text-black",
    project: "bg-cat-progetto text-black",
    publication: "bg-cat-pubblicazioni text-black",
    network: "bg-cat-reti text-black",
    partner: "bg-cat-partner text-black",
    festival: "bg-cat-festival text-black",
  };
  const categoryClasses =
    categoryColorClasses[categoryTitle ? categoryTitle.toLowerCase() : ""];

  const link = resolveLink({ ...data, locale });

  return (
    <div className="relative py-4">
      <Link
        href={link}
        title={data.title}
        className="group"
        aria-label={`Vai a ${data.title}`}
      >
        <div className={`relative overflow-hidden`}>
          {data.imageHero && (
            // <DatoImage
            // lazyLoad
            //   className=" duration-300 group-hover:scale-105"
            //   data={data.imageHero.responsiveImage}
            //   priority={count == 1 ? true : false}
            //   fetchpriority={count == 1 ? true : false}
            // />
            <SRCImage
              className="duration-300 group-hover:scale-105"
              data={data.imageHero.responsiveImage}
              priority={count == 1 ? true : false}
            />
            // <Image
            //   fill
            //   className="duration-300 group-hover:scale-105"
            //   src={data.imageHero.url ? data.imageHero.url : data.image}
            //   alt={
            //     data.imageHero.alt ? data.imageHero.alt : "Oriente Occidente"
            //   }
            //   sizes={data.imageHero.responsiveImage.sizes}
            // />
          )}
          {data.image && (
            <Image
              className="duration-300 group-hover:scale-105"
              src={data.image.url ? data.image.url : data.image}
              alt={data.image.alt ? data.image.alt : "Oriente Occidente"}
              priority={true}
            />
          )}
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
          {/* {(data.title || !data.titleHero || data.titleHero !== data.title) && ( */}
          <h2 className="text-base font-semibold uppercase text-black md:text-lg group-hover:underline">
            {data.title}
          </h2>
          {/* )} */}
          {data.descriptionHero && (
            <h3 className="text-xs text-black ">{data.descriptionHero}</h3>
          )}
          {/* {data.authors && (
            <div className="text-sm font-semibold uppercase text-black md:text-base ">
              {data.authors}
            </div>
          )} */}

          <div className="mt-3 uppercase font-semibold text-xxs flex items-center">
            <div>Vai al contenuto</div>
            <div className=" hidden h-[20px] w-[20px] bg-arrow-right-black lg:block ml-3 group-hover:ml-5 motion-safe:duration-200" />
          </div>
        </div>
        {data.location && (
          <div className="flex items-center gap-1 md:hidden">
            <MapPinIcon
              aria-hidden="true"
              focusable="false"
              className="mr-1 h-4 w-3 text-black"
            />
            <div className="text-xxs">{data.location}</div>
          </div>
        )}
      </Link>
    </div>
  );
}
