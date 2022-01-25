import { Image as DatoImage } from 'react-datocms';
import Link from 'next/link';

import { resolveLinkById, formatDate } from 'lib/utils';

function StandardCard({ data, locale, categoryTitle, eventDate }) {
  const image = data.imageHero;
  return (
    <div className="pb-8 md:pb-0">
      <Link href={resolveLinkById(data.id, locale)} locale={locale}>
        <a title={data.title}>
          <div className="relative">
            <div className="absolute md:flex z-20 left-4 md:left-8 bottom-2 md:bottom-6 top-auto text-white uppercase text-xxs md:text-xs font-semibold ">
              <span>{categoryTitle}</span>
              {eventDate && (
                <span className="hidden md:block md:pl-4 md:pr-1 normal-case font-light">
                  {formatDate(eventDate, locale)}
                </span>
              )}
              {data.location && (
                <span className="hidden md:inline-block normal-case font-light">
                  - {data.location}
                </span>
              )}
            </div>
            {
              image != null ?
                <DatoImage
                  className=""
                  data={image.responsiveImage}
                  alt={image.alt}
                  title={image.title}
                />
              : null
            }
            <div className="absolute h-[65px] md:h-48 bottom-0 left-0 right-0 bg-gradient-to-t z-10 from-black-transparent to-transparent"></div>
          </div>
          <div className="hidden md:block absolute top-0 h-48 left-0 right-0 bg-gradient-to-b z-10 from-black-transparent to-transparent"></div>
          <div className="md:absolute z-20 md:top-6 md:left-8">
            <h2 className="text-sm md:text-lg uppercase text-black md:text-white font-semibold mt-2">
              {data.title}
            </h2>
            {data.authors && (
              <div className="text-xs md:text-base uppercase text-black md:text-white font-semibold md:mt-2">
                {data.authors}
              </div>
            )}
          </div>
          {eventDate && (
            <h3 className="inline-block md:hidden normal-case text-xxs mr-1">
              {formatDate(eventDate, locale)}
            </h3>
          )}
          {data.location && (
            <span className="inline-block md:hidden normal-case text-xxs">
              - {data.location}
            </span>
          )}
        </a>
      </Link>
    </div>
  );
}

export default StandardCard;
