import { Image as DatoImage } from "react-datocms";
import Link from "next/link";

import { resolveLinkById, formatDate } from "lib/utils";

function CardOutTitle({ data, locale }) {
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
      <Link href={resolveLinkById(data.id, locale)}>
        <a title={title}>
          <div className="md:relative md:h-[360px]">
            <DatoImage
              className="md:h-full"
              data={data.image.responsiveImage}
              alt={data.image.alt}
              title={data.image.title}
            />
            <div className="absolute left-4 top-48 z-20 flex space-x-4 text-xxs font-semibold uppercase text-white md:left-8 md:bottom-8 md:top-auto md:text-xs ">
              <span>{data.title}</span>
              <span className="hidden font-light normal-case md:block">
                {formatDate(data.eventDate, locale)}
              </span>
            </div>
            <div className="absolute top-40 left-0 right-0 z-10 bg-gradient-to-t from-black-transparent to-transparent md:top-auto md:bottom-0 md:h-1/3" />
          </div>
          <h2 className="z-20 mt-2 text-sm font-normal uppercase text-black md:text-base md:font-semibold">
            {data.title}
          </h2>
          <h3 className="z-20 text-sm font-semibold uppercase text-black md:text-base">
            {data.subtitle}
          </h3>
          <div className="text-xxs md:hidden">
            {formatDate(data.eventDate, locale)}
          </div>
        </a>
      </Link>
    </div>
  );
}

export default CardOutTitle;
