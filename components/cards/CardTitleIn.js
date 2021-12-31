import { Image as DatoImage } from 'react-datocms';
import Link from 'next/link';

import { resolveLinkById, formatDate } from 'lib/utils';

function CardTitleIn({ locale, image, categoryTitle, dateEvent, title, id }) {
  return (
    <div className="pb-8 md:pb-0">
      <Link href={`/${resolveLinkById(id, locale)}`}>
        <a title={title}>
          <div className="flex space-x-4 absolute z-20 left-4 md:left-8 md:bottom-8 top-48 md:top-auto text-white uppercase text-xxs md:text-xs font-semibold ">
            <span>{categoryTitle}</span>
            {eventDate && (
              <span className="hidden md:block normal-case font-light">
                {formatDate(eventDate, locale)}
              </span>
            )}
          </div>
          <DatoImage
            className=""
            data={image.responsiveImage}
            alt={image.alt}
            title={image.title}
          />
          <div className="absolute top-40 md:top-auto h-[65px] md:h-48 md:bottom-0 left-0 right-0 bg-gradient-to-t z-10 from-black-transparent"></div>
          <div className="hidden md:block absolute top-0 h-48 left-0 right-0 bg-gradient-to-b z-10 from-black-transparent"></div>
          <h2 className="text-sm z-20 md:text-lg uppercase text-black md:text-white font-semibold mt-2 md:absolute md:top-6 md:left-8 ">
            {title}
          </h2>
          {eventDate && (
            <h3 className="text-xxs md:hidden">
              {formatDate(eventDate, locale)}
            </h3>
          )}
        </a>
      </Link>
    </div>
  );
}

export default CardTitleIn;
