import { Image as DatoImage } from 'react-datocms';
import Link from 'next/link';
import { LocationMarkerIcon, CalendarIcon } from '@heroicons/react/outline';

import { resolveLinkById, showDates } from 'lib/utils';

function StandardCard({ data, locale, categoryTitle }) {
  const image = data.imageHero;
  return (
    <div className="pb-8 md:pb-0">
      <Link href={resolveLinkById(data.id, locale)} locale={locale}>
        <a title={data.title} className="group">
          <div className="relative">
            <div className="absolute z-20 left-4 md:left-8 bottom-2 md:bottom-6 top-auto text-white uppercase text-xxs md:text-xs font-semibold">
              <span>{categoryTitle}</span>
              {data.dates && (
                <div className="hidden md:flex gap-x-2 items-center">
                  <CalendarIcon aria-hidden="true" className="w-4 h-4" />
                  <span className="hidden md:block normal-case font-light">
                    {showDates(data.dates, locale)}
                  </span>
                </div>
              )}
              {data.location && (
                <div className="hidden md:flex gap-x-2 items-center">
                  <LocationMarkerIcon aria-hidden="true" className="w-4 h-4" />
                  <span className="hidden md:inline-block normal-case font-light">
                    {data.location}
                  </span>
                </div>
              )}
            </div>
            {image != null ? (
              <div className="overflow-hidden">
                <DatoImage
                  className="duration-300 group-hover:scale-105"
                  data={image.responsiveImage}
                  alt={image.alt}
                  title={image.title}
                />
              </div>
            ) : null}
            <div className="absolute h-[65px] md:h-48 bottom-0 left-0 right-0 bg-gradient-to-t z-10 from-black/80 to-transparent"></div>
          </div>
          <div className="hidden md:block absolute top-0 h-48 left-0 right-0 bg-gradient-to-b z-10 from-black/80 to-transparent"></div>
          <div className="md:absolute z-20 md:top-6 md:left-8">
            <h2 className="text-sm md:text-lg uppercase text-black md:text-white font-semibold mt-2 duration-300 group-hover:text-red">
              {data.title}
            </h2>
            {data.authors && (
              <div className="text-xs md:text-base uppercase text-black md:text-white font-semibold md:mt-2">
                {data.authors}
              </div>
            )}
          </div>
          {data.dates && (
            <div className="md:hidden flex gap-1 items-center">
              <CalendarIcon aria-hidden="true" className="w-3 h-4 mr-1 text-black" />
              <h3 className="inline-block md:hidden normal-case text-xxs">
                {showDates(data.dates, locale)}
              </h3>
            </div>
          )}
          {data.location && (
            <div className="md:hidden flex gap-1 items-center">
              <LocationMarkerIcon aria-hidden="true" className="w-3 h-4 mr-1 text-black" />
              <div className="inline-block md:hidden normal-case text-xxs">
                {data.location}
              </div>
            </div>
          )}
        </a>
      </Link>
    </div>
  );
}

export default StandardCard;
