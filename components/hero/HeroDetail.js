import { Image as DatoImage } from 'react-datocms';
import { LocationMarkerIcon, CalendarIcon } from '@heroicons/react/outline';
import dynamic from 'next/dynamic';
// import Gallery from 'components/galleries/Gallery';
import BookButton from 'components/BookButton';

import { formatDate } from 'lib/utils';

function HeroDetail({ data, locale }) {
  const {
    titleHero,
    descriptionHero,
    authors,
    location,
    imageHero,
    isFestival,
    dateEvento,
    paymentSettings,
    slideshowHero,
    pageId,
  } = data;

  let Gallery = () => <div />;
  if (slideshowHero != '') {
    Gallery = dynamic(() => import('components/galleries/Gallery'), {
      loading: () => <div>...</div>,
      ssr: false,
    });
  }

  return (
    <header className="border-t md:border-none border-gray pb-10 md:py-0 md:grid md:grid-cols-4 md:gap-4 xl:container xl:mx-auto overflow-hidden">
      <div className="border-b border-gray py-3 md:border-none md:pt-4 xl:pt-8">
        <div className="container">
          {isFestival == true ? (
            <div className="uppercase text-black text-xxs font-semibold tracking-wider md:pb-2">
              Festival
            </div>
          ) : null}
          {dateEvento != null ? (
            <>
              {dateEvento.map((date) => (
                <div
                  key={date.id}
                  className="text-xxs text-black-light flex items-center"
                >
                  <CalendarIcon aria-hidden="true" className="w-4 h-4 mr-2" />
                  {formatDate(date.startTime, locale || 'en', date.isDaily)}
                </div>
              ))}
            </>
          ) : null}
          {location && (
            <h2 className="text-xxs text-black-light mt-1 flex items-center">
              <LocationMarkerIcon aria-hidden="true" className="w-4 h-4 mr-2" />
              {location}
            </h2>
          )}
        </div>
      </div>
      <div className="relative md:col-span-3 md:border-l md:border-color-gray xl:pt-4 md:col-start-2">
        <div className="px-4 md:px-12 md:pt-2">
          <h1 className="text-base uppercase pt-4 pb-1">{titleHero}</h1>
          {authors && (
            <h2 className="text-xs md:text-sm mb-1 uppercase">{authors}</h2>
          )}
          <h2 className="text-base uppercase font-semibold">
            {descriptionHero}
          </h2>
        </div>
        {paymentSettings != null && (
          <div className="full-w flex md:justify-end px-4">
            <BookButton
              paymentSettings={paymentSettings}
              locale={locale}
              id={pageId}
            />
          </div>
        )}

        <div className="mt-6 md:mt-8 pl-4 md:pl-0 xl:w-[calc(100%+3rem)] 2xl:w-[calc((100vw-((100vw-1380px)/2))-333px-1rem)]">
          {slideshowHero != '' ? (
            <Gallery slides={slideshowHero} />
          ) : imageHero ? (
            <DatoImage
              className="max-w-[1400px]"
              data={imageHero.responsiveImage}
              alt={imageHero.alt}
              title={imageHero.title}
            />
          ) : null}
        </div>

        <div className="hidden md:absolute top-0 h-full md:bottom-0 left-0 md:left-[25%] max-w-[1400px] right-1/2 bg-gradient-to-r z-10 from-black-transparent to-transparent"></div>
      </div>
    </header>
  );
}

export default HeroDetail;
