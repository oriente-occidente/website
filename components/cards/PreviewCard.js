import { Image as DatoImage } from 'react-datocms';
import Link from 'next/link';

import { resolveLinkById, formatDate } from 'lib/utils';

function PreviewCard({ data, locale }) {

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
    <div className="py-4 relative">
      {console.log('data preview:', data)}
      <Link href={`/${resolveLinkById(data.id, locale)}`}>
        <a title={data.title}>
          <div className="relative">
            <div className="flex absolute z-20 left-4 md:left-8 bottom-2 md:bottom-8 top-auto text-white uppercase text-xxs md:text-xs font-semibold ">
              <span>{categoryTitle}</span>
              {data.dateEvento && (
                <span className="hidden md:block md:pl-4 md:pr-1 normal-case font-light">
                  {formatDate(data.eventDate, locale)}
                </span>
              )}
              {data.location && (
                <span className="hidden md:block md:pr-1 normal-case font-light">
                - {data.location}
                </span>
              )}
            </div>
            <DatoImage
              className="h-[220px] md:h-[360px] object-cover"
              data={data.imageHero.responsiveImage}
              alt={data.imageHero.alt}
              title={data.imageHero.title}
            />
            <div className="absolute top-auto bottom-0 left-0 right-0 h-[65px] bg-gradient-to-t z-10 from-black-transparent"></div>
          </div>
          <div className="z-20">
            {data.title && (
              <h2 className="text-sm md:text-base uppercase text-black-light mt-2">
                {data.title}
              </h2>
            )}
            {data.titleHero && (
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
          {data.dateEvento && (
            <div className="text-xxs md:hidden">
              {formatDate(data.eventDate, locale)}
            </div>
          )}
        </a>
      </Link>
    </div>
  );
}

export default PreviewCard;
