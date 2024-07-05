import { Image as DatoImage } from "react-datocms";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";
// import dynamic from 'next/dynamic';
import Gallery from "@/components/galleries/Gallery";
import BookButton from "@/components/BookButton";
import translate from "@/lib/locales";

import { formatDate } from "@/lib/utils";

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

  // let Gallery = () => <div />;
  // if (slideshowHero != '') {
  //   Gallery = dynamic(() => import('components/galleries/Gallery'), {
  //     loading: () => <div>...</div>,
  //     ssr: false,
  //   });
  // }

  return (
    <header className="overflow-hidden border-t border-gray pb-10 md:grid md:grid-cols-4 md:gap-4 md:border-none md:py-0 xl:container xl:mx-auto">
      <div className="border-b border-gray py-3 md:border-none md:pt-4 xl:pt-8">
        <div className="pl-4 xl:container">
          {isFestival == true ? (
            <div className="text-xxs font-semibold uppercase tracking-wider text-black md:pb-2">
              Festival
            </div>
          ) : null}
          {dateEvento != null ? (
            <>
              {dateEvento.map((date) => {
                // console.log(date.endtime);
                return (
                  <div
                    key={date.id}
                    className="flex items-center text-xxs text-black-light"
                  >
                    <CalendarIcon
                      aria-hidden="true"
                      focusable="false"
                      className="mr-2 h-4 w-4"
                    />
                    {date.isDaily && formatDate(date.startTime, locale, date.isDaily)}
                    <div>
                      {date.endTime && !date.isDaily && (
                        <div>
                          {translate("from", locale)}{" "}
                          {formatDate(date.startTime, locale, date.isDaily)}
                        </div>
                      )}
                      {date.endTime && !date.isDaily && (
                        <div>
                          {" "}
                          {translate("to", locale)}{" "}
                          {formatDate(date.endTime, locale, date.isDaily)}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </>
          ) : null}
          {location && (
            <h2 className="mt-1 flex items-center text-xxs text-black-light">
              <MapPinIcon aria-hidden="true" focusable="false" className="mr-2 h-4 w-4" />
              {location}
            </h2>
          )}
        </div>
      </div>
      <div className="md:border-color-gray relative md:col-span-3 md:col-start-2 md:border-l lg:w-full xl:pt-4">
        <div className="md:items-flex-start px-4 pt-4 md:flex md:justify-between md:px-12">
          <div className="">
            <h1 className="pt-1 pb-1 text-base uppercase lg:text-xl">{titleHero}</h1>
            {authors && (
              <p className="mb-1 text-base font-semibold uppercase lg:text-xl">
                {authors}
              </p>
            )}
            <p className="text-base font-semibold uppercase">{descriptionHero}</p>
          </div>

          {paymentSettings && (
            <BookButton paymentSettings={paymentSettings} locale={locale} id={pageId} />
          )}
        </div>

        {/* <div className="mt-6 pl-4 md:mt-8 md:pl-0 xl:w-[calc(100%+3rem)] 2xl:w-[calc((100vw-((100vw-1380px)/2))-333px-1rem)]"> */}
        <div className="mt-6 pl-4 md:mt-8 md:pl-0 ">
          {slideshowHero != "" ? (
            <Gallery slides={slideshowHero} />
          ) : imageHero ? (
            <div className="relative">
              <DatoImage
                className="max-w-[1400px]"
                data={imageHero.responsiveImage}
                alt={imageHero.alt}
                title={imageHero.title}
              />
              {imageHero.title && (
                <div className="absolute bottom-0 left-0 right-0 z-1 px-4 pt-3 pb-2 text-xxs text-white bg-gradient-to-t from-black/80 text-shadow">
                  {imageHero.title}
                </div>
              )}
            </div>
          ) : null}
        </div>

        <div className="top-0 left-0 right-1/2 z-10 hidden h-full max-w-[1400px] bg-gradient-to-r from-black-transparent to-transparent md:absolute md:bottom-0 md:left-[25%]"></div>
      </div>
    </header>
  );
}

export default HeroDetail;
