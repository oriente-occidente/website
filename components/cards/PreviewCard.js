import { Image as DatoImage } from 'react-datocms';
import Link from 'next/link';

import { resolveLinkById, showDates } from 'lib/utils';

function PreviewCard({ data, locale, group = null }) {
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
            <div className="flex absolute z-20 left-4 md:left-8 bottom-2 md:bottom-8 top-auto text-white uppercase text-xxs md:text-xs font-semibold ">
              <span>{categoryTitle}</span>
              {data.dates && (
                <span className="hidden md:block md:pl-4 md:pr-1 normal-case font-light">
                  {showDates(data.dates, locale)}
                </span>
              )}
              {data.location && (
                <span className="hidden md:block md:pr-1 normal-case font-light">
                  - {data.location}
                </span>
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
            <div className="absolute top-auto bottom-0 left-0 right-0 h-[65px] md:h-[120px] bg-gradient-to-t z-10 from-black-transparent to-transparent"></div>
          </div>
          <div className="z-20">
            {data.title && (
              <h2 className="text-sm md:text-base uppercase text-black-light mt-2">
                {data.title}
              </h2>
            )}
            {data.titleHero && data.titleHero != data.title && (
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
            <div className="text-xxs md:hidden">
              {showDates(data.dates, locale)}
            </div>
          )}
        </a>
      </Link>
    </div>
  );
}

export default PreviewCard;
