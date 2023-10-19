"use client";
import { Image as DatoImage } from "react-datocms";
import Link from "next/link";
import { resolveLinkById, formatDate } from "@/lib/utils";

function CardTitleIn({ locale, data }) {
  let categoryTitle;
  let dateEvent;
  if (data.category) {
    if (Array.isArray(data.category)) {
      categoryTitle = data.category
        .map((cat) => {
          return cat.title;
        })
        .join(", ");
    } else {
      categoryTitle = data.category.title;
    }
  }
  if (data.dateEvento) {
    dateEvent = data.dateEvento
      .map((event) => {
        return event.startTime;
      })
      .join(", ");
  }

  return (
    <div className="pb-8 md:pb-0">
      <Link href={resolveLinkById(data.id, locale)} title={data.title}>
        <div className="absolute left-4 top-48 z-20 flex space-x-4 text-xxs font-semibold uppercase text-white md:left-8 md:bottom-8 md:top-auto md:text-xs ">
          <span>{categoryTitle}</span>
          {eventDate && (
            <span className="hidden font-light normal-case md:inline-block">
              {formatDate(data.eventDate, locale)}
            </span>
          )}
          {data.location && (
            <span className="hidden font-light normal-case md:inline-block">
              , {location}
            </span>
          )}
        </div>
        <DatoImage
          className=""
          data={data.image.responsiveImage}
          alt={data.image.alt}
          title={data.image.title}
        />
        <div className="from-black-transparent-transparent absolute top-40 left-0 right-0 z-10 h-[65px] bg-gradient-to-t to-transparent md:top-auto md:bottom-0 md:h-48"></div>
        <div className="from-black-transparent-transparent absolute top-0 left-0 right-0 z-10 hidden h-48 bg-gradient-to-b to-transparent md:block"></div>
        <h2 className="z-20 mt-2 text-sm font-semibold uppercase text-black md:absolute md:top-6 md:left-8 md:text-lg md:text-white ">
          {data.title}
        </h2>
        {eventDate && (
          <h3 className="text-xxs md:hidden">
            {formatDate(data.eventDate, locale)}
          </h3>
        )}
      </Link>
    </div>
  );
}

export default CardTitleIn;
