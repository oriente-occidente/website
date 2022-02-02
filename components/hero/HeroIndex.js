import { Image as DatoImage } from 'react-datocms';
import { LocationMarkerIcon, CalendarIcon } from '@heroicons/react/outline';
// import dynamic from 'next/dynamic';
import Gallery from 'components/galleries/Gallery';
import BookButton from 'components/BookButton';
import { formatDate } from 'lib/utils';

function HeroIndex({ data, locale }) {
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

  // let Gallery = () => <div />;
  // if (slideshowHero != '') {
  //   Gallery = dynamic(() => import('components/galleries/Gallery'), {
  //     loading: () => <div>...</div>,
  //     ssr: false,
  //   });
  // }

  return (
    <div className="border-t md:border-none bg-gray border-gray pb-10 md:py-0">
      <header className="relative md:grid md:grid-cols-4 md:gap-4 xl:container xl:mx-auto overflow-hidden">
        <h1 className="title--big z-20 py-4 px-4 xl:pl-6">{titleHero}</h1>
        <div className="relative md:col-start-2 md:col-span-3 md:border-l md:border-color-gray">
          <div className="pl-4 md:pl-0 xl:w-[calc(100%+3rem)] 2xl:w-[calc((100vw-((100vw-1380px)/2))-333px-1rem)]">
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
          <div className="hidden md:absolute top-0 h-full md:bottom-0 left-0 md:left-[25%] max-w-[1400px] right-1/2 bg-gradient-to-r z-10 from-black-transparent to-transparent" />
        </div>
      </header>
      <div className="md:grid md:grid-cols-4 md:gap-4 md:container md:mx-auto">
        <div className="md:col-start-2 md:col-span-3 md:pb-10 gap-4 pt-6 md:border-l border-gray-300">
          {descriptionHero && (
            <div className="text-black-light lg:text-black lg:font-light text-sm lg:text-xl lg:pt-2 px-4 lg:px-20 md:pl-10">
              {descriptionHero}
            </div>
          )}
          {paymentSettings != null && (
            <div className="pt-4 md:pl-6 lg:pl-16">
              <BookButton
                paymentSettings={paymentSettings}
                locale={locale}
                id={pageId}
              />
            </div>
          )}
          {dateEvento && (
            <div className="pt-4 px-4 lg:px-20 md:pl-10">
              {dateEvento != null ? (
                <>
                  {dateEvento.map((date) => (
                    <div
                      key={date.id}
                      className="text-xxs text-black-light flex items-center"
                    >
                      <CalendarIcon
                        aria-hidden="true"
                        className="w-4 h-4 mr-2"
                      />
                      {formatDate(date.startTime, locale || 'en', date.isDaily)}
                    </div>
                  ))}
                </>
              ) : null}
              {location && (
                <h2 className="text-xxs text-black-light mt-1 flex items-center">
                  <LocationMarkerIcon
                    aria-hidden="true"
                    className="w-4 h-4 mr-2"
                  />
                  {location}
                </h2>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroIndex;
