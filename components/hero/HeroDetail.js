import { Image as DatoImage } from 'react-datocms';

import Gallery from 'components/galleries/Gallery';
import { formatDate } from 'lib/utils';

function HeroDetail({ data, locale }) {
  const {
    titleHero,
    descriptionHero,
    imageHero,
    isFestival,
    dateEvento,
    paymentSettings,
    slideshowHero,
  } = data;

  return (
    <header className="border-t md:border-none border-gray pb-10 md:py-0 md:grid md:grid-cols-4 md:gap-4 xl:container xl:mx-auto overflow-hidden">
      {isFestival == true ? (
        <div className="border-b border-gray py-3 md:border-none md:pt-4 xl:pt-8">
          <div className="container">
            <div className="uppercase text-black text-xxs font-semibold tracking-wider md:pb-2">
              Festival
            </div>
            {dateEvento != null ? (
              <>
                {dateEvento.map((date) => (
                  <div key={date.id} className="text-xxs text-black-light">
                    {formatDate(date.startTime, locale || 'en')}
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </div>
      ) : null}
      <div className="relative md:col-span-3 md:border-l md:border-color-gray xl:pt-4">
        <div className="px-4 md:px-12">
          <h1 className="text-base uppercase pt-4 pb-1">{titleHero}</h1>
          <h2 className="text-base uppercase font-semibold">
            {descriptionHero}
          </h2>
        </div>
        {paymentSettings != null ? (
          <>
            {paymentSettings.map((item) => (
              <div
                key={item.id}
                className="px-4 md:px-12 lg:flex justify-between items-center"
              >
                <h2 className="py-4 lg:py-6 text-xxs tracking-widest">
                  {item.description}
                </h2>
                {/* <Link href={sectionLink.slug} key={sectionLink.slug}> */}
                <a className="button--with-arrow">Link</a>
                {/* </Link> */}
              </div>
            ))}
          </>
        ) : null}
        <div className="mt-6 md:mt-8 lg:mt-2 pl-4 md:pl-0 xl:w-[calc(100%+3rem)] 2xl:w-[calc((100vw-((100vw-1380px)/2))-333px-1rem)]">
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

        <div className="hidden md:absolute top-0 h-full md:bottom-0 left-0 md:left-[25%] max-w-[1400px] right-1/2 bg-gradient-to-r z-10 from-black-transparent"></div>
      </div>
    </header>
  );
}

export default HeroDetail;
