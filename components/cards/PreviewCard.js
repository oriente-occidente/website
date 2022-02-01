import { Image as DatoImage } from 'react-datocms';
import Link from 'next/link';
import { LocationMarkerIcon, CalendarIcon } from '@heroicons/react/outline';

import { resolveLinkById, showDates } from 'lib/utils';

function PreviewCard({ data, locale, group = null, year }) {
  let categoryTitle;
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

  return (
    <div className="py-4 relative">
      <Link href={resolveLinkById(data.id, locale, group)}>
        <a title={data.title} className="group">
          <div className="relative">
            <div className="absolute z-20 left-4 md:left-8 bottom-2 md:bottom-8 top-auto text-white uppercase text-xxs md:text-xs font-semibold ">
              <span>{categoryTitle}</span>
              {data.dates && (
                <div className="hidden md:flex gap-x-2 items-center">
                  <CalendarIcon aria-hidden="true" className="w-4 h-4" />
                  <span className="md:pr-1 normal-case font-light">
                    {showDates(data.dates, locale)}
                  </span>
                </div>
              )}
              {data.location && (
                <div className="hidden md:flex gap-x-2 items-center">
                  <LocationMarkerIcon aria-hidden="true" className="w-4 h-4" />
                  <span className="md:pr-1 normal-case font-light">
                    {data.location}
                  </span>
                </div>
              )}
              {year && (
                <div className="hidden md:flex gap-x-2 items-center">
                  <span className="md:pr-1 normal-case font-light">{year}</span>
                </div>
              )}
            </div>
            <div className="overflow-hidden h-[220px] md:h-[360px] relative">
              <DatoImage
                className="object-cover duration-300 group-hover:scale-105"
                data={data.imageHero.responsiveImage}
                alt={data.imageHero.alt}
                title={data.imageHero.title}
              />
            </div>
            <div className="absolute top-auto bottom-0 left-0 right-0 h-[65px] md:h-[180px] bg-gradient-to-t z-10 from-black/80 to-transparent"></div>
          </div>
          <div className="z-20  mt-2">
            {data.title &&
              (data.authors ||
                !data.titleHero ||
                data.titleHero !== data.title) && (
                <h2 className="text-sm md:text-base uppercase text-black-light">
                  {data.title}
                </h2>
              )}
            {data.titleHero && !data.authors && (
              <h3 className="text-sm md:text-base uppercase text-black font-semibold ">
                {data.titleHero}
              </h3>
            )}
            {data.authors && (
              <div className="text-sm md:text-base uppercase text-black font-semibold ">
                {data.authors}
              </div>
            )}
          </div>
          {data.dates && (
            <div className="md:hidden flex gap-1 items-center">
              <CalendarIcon
                aria-hidden="true"
                className="w-3 h-4 mr-1 text-black"
              />
              <div className="text-xxs">{showDates(data.dates, locale)}</div>
            </div>
          )}
          {data.location && (
            <div className="md:hidden flex gap-1 items-center">
              <LocationMarkerIcon
                aria-hidden="true"
                className="w-3 h-4 mr-1 text-black"
              />
              <div className="text-xxs">{data.location}</div>
            </div>
          )}
        </a>
      </Link>
    </div>
  );
}

export default PreviewCard;
