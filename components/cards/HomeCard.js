import { Image as DatoImage } from 'react-datocms';
import translate from 'lib/locales';
import { resolveLinkById } from 'lib/utils';

import Link from 'next/link';

function HomeCard({ count, categoryTitle, dateEvent, data, locale }) {
  const { responsiveImage, alt, title, id } = data.imageHero;

  return (
    <Link href={resolveLinkById(data.id, locale)}>
      <a title={data.titleHero}>
        <div className="pb-8 md:pb-16 lg:pb-20 pl-4 md:pl-6 relative h-[240px] md:h-[640px] xl:h-[45vw]">
          <div className="relative flex h-full justify-between lg:pl-8 2xl:pl-[calc((100vw-1390px)/2)]">
            <div>
              <div className="tracking-wider uppercase text-xxs md:text-sm lg:text-base md:tracking-wide relative after:h-px after:w-12 lg:after:w-40 after:bg-black after:absolute after:top-7 lg:after:top-12 after:left-0">
                0{count + 1}/
              </div>
              <div className="hidden md:block mt-4 mb-12 lg:py-16 title--small">
                [placeholder]
              </div>
            </div>
            <div className="w-3/4 lg:w-8/12 relative">
              <DatoImage
                className="w-full h-full"
                data={responsiveImage}
                alt={alt}
                title={title}
              />
              <div className="absolute h-1/2 w-full left-0 top-0 bg-gradient-to-b z-10 from-black-transparent"></div>
              <div className="hidden md:block absolute h-1/2 bottom-0 left-0 right-0 bg-gradient-to-t z-10 from-black-transparent"></div>
              <div className="md:hidden text-white text-xl after:w-10 after:h-10 font-thin absolute left-1/2 -translate-x-2/4 after:border-white after:border bottom-4 after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-y-2/4 after:-translate-x-2/4">
                +
              </div>
              <div className="hidden z-20 md:block text-white text-sm uppercase after:w-28 after:h-28 font-thin absolute bottom-16 left-1/2 -translate-x-2/4 after:border-white after:border after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-y-2/4 after:-translate-x-2/4">
                {translate('more', locale)}
              </div>
            </div>
            <h2 className="text-lg z-20 md:text-xl lg:text-2xl xl:text-3xl xl:w-2/3 uppercase text-white font-semibold absolute top-1/2 -translate-y-2/4">
              {data.titleHero}
            </h2>
          </div>
        </div>
        <div className="md:hidden ml-20 pl-1 mt-4 mb-12 lg:py-16 title--small relative after:h-px after:w-32 after:bg-black after:absolute after:-top-3 after:left-1">
          [placeholder]
        </div>
      </a>
    </Link>
  );
}

export default HomeCard;
