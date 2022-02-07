import { Image as DatoImage } from "react-datocms";
import { LocationMarkerIcon, CalendarIcon } from "@heroicons/react/outline";
// import dynamic from 'next/dynamic';
import Gallery from "components/galleries/Gallery";
import BookButton from "components/BookButton";
import { formatDate } from "lib/utils";

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
    <div className="border-t border-gray bg-gray pb-10 md:border-none md:py-0">
      <header className="relative overflow-hidden md:grid md:grid-cols-4 md:gap-4 xl:container xl:mx-auto">
        <h1 className="title--big z-20 py-4 px-4 xl:pl-6">{titleHero}</h1>
        <div className="md:border-color-gray relative md:col-span-3 md:col-start-2 md:border-l">
          <div className="pl-4 md:pl-0 xl:w-[calc(100%+3rem)] 2xl:w-[calc((100vw-((100vw-1380px)/2))-333px-1rem)]">
            {slideshowHero != "" ? (
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
          <div className="top-0 left-0 right-1/2 z-10 hidden h-full max-w-[1400px] bg-gradient-to-r from-black-transparent to-transparent md:absolute md:bottom-0 md:left-[25%]" />
        </div>
      </header>
      <div className="md:container md:mx-auto md:grid md:grid-cols-4 md:gap-4">
        <div className="gap-4 border-gray-300 pt-6 md:col-span-3 md:col-start-2 md:border-l md:pb-10">
          {descriptionHero && (
            <div className="px-4 text-sm text-black-light md:pl-10 lg:px-20 lg:pt-2 lg:text-xl lg:font-light lg:text-black">
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
            <div className="px-4 pt-4 md:pl-10 lg:px-20">
              {dateEvento != null ? (
                <>
                  {dateEvento.map((date) => (
                    <div
                      key={date.id}
                      className="flex items-center text-xxs text-black-light"
                    >
                      <CalendarIcon
                        aria-hidden="true"
                        className="mr-2 h-4 w-4"
                      />
                      {formatDate(date.startTime, locale || "en", date.isDaily)}
                    </div>
                  ))}
                </>
              ) : null}
              {location && (
                <h2 className="mt-1 flex items-center text-xxs text-black-light">
                  <LocationMarkerIcon
                    aria-hidden="true"
                    className="mr-2 h-4 w-4"
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
