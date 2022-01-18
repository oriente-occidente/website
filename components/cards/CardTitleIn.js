import { Image as DatoImage } from 'react-datocms';
import Link from 'next/link';

import { resolveLinkById, formatDate } from 'lib/utils';

function CardTitleIn({ locale, data }) {
  let categoryTitle;
  let dateEvent;
  if (data.category) {
    if (Array.isArray(data.category)) {
      categoryTitle = data.category
        .map((cat) => {
          return cat.title;
        })
        .join(', ');
    } else {
      categoryTitle = data.category.title;
    }
  }
  if (data.dateEvento) {
    dateEvent = data.dateEvento
      .map((event) => {
        return event.startTime;
      })
      .join(', ');
  }

  return (
    <div className="pb-8 md:pb-0">
      <Link href={resolveLinkById(data.id, locale)}>
        <a title={data.title}>
          <div className="flex space-x-4 absolute z-20 left-4 md:left-8 md:bottom-8 top-48 md:top-auto text-white uppercase text-xxs md:text-xs font-semibold ">
            <span>{categoryTitle}</span>
            {eventDate && (
              <span className="hidden md:inline-block normal-case font-light">
                {formatDate(data.eventDate, locale)}
              </span>
            )}
            {data.location && (
              <span className="hidden md:inline-block normal-case font-light">
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
          <div className="absolute top-40 md:top-auto h-[65px] md:h-48 md:bottom-0 left-0 right-0 bg-gradient-to-t z-10 from-black-transparent"></div>
          <div className="hidden md:block absolute top-0 h-48 left-0 right-0 bg-gradient-to-b z-10 from-black-transparent"></div>
          <h2 className="text-sm z-20 md:text-lg uppercase text-black md:text-white font-semibold mt-2 md:absolute md:top-6 md:left-8 ">
            {data.title}
          </h2>
          {eventDate && (
            <h3 className="text-xxs md:hidden">
              {formatDate(data.eventDate, locale)}
            </h3>
          )}
        </a>
      </Link>
    </div>
  );
}

export default CardTitleIn;
