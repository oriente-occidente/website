import { Image as DatoImage } from 'react-datocms';
import Link from 'next/link';

import { resolveLinkById, formatDate } from 'lib/utils';

function CardOutTitle({ data, locale }) {
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
        <a title={title}>
          <div className="md:relative md:h-[360px]">
            <DatoImage
              className="md:h-full"
              data={data.image.responsiveImage}
              alt={data.image.alt}
              title={data.image.title}
            />
            <div className="flex space-x-4 absolute z-20 left-4 md:left-8 md:bottom-8 top-48 md:top-auto text-white uppercase text-xxs md:text-xs font-semibold ">
              <span>{data.title}</span>
              <span className="hidden md:block normal-case font-light">
                {formatDate(data.eventDate, locale)}
              </span>
            </div>
            <div className="absolute top-40 md:h-1/3 md:top-auto md:bottom-0 left-0 right-0 bg-gradient-to-t z-10 from-black-transparent to-transparent" />
          </div>
          <h2 className="text-sm md:text-base z-20 uppercase text-black font-normal md:font-semibold mt-2">
            {data.title}
          </h2>
          <h3 className="text-sm md:text-base z-20 uppercase text-black font-semibold">
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
