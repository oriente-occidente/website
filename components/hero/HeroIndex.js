import { Image as DatoImage } from 'react-datocms';

import Gallery from 'components/galleries/Gallery';

function HeroIndex({ data }) {
  const { titleHero, descriptionHero, imageHero, slideshowHero } = data;

  return (
    <div className="border-t md:border-none bg-gray border-gray pb-10 md:py-0">
      <header className="relative md:grid md:grid-cols-4 md:gap-4 xl:container xl:mx-auto">
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
          <div className="hidden md:absolute top-0 h-full md:bottom-0 left-0 md:left-[25%] max-w-[1400px] right-1/2 bg-gradient-to-r z-10 from-black-transparent" />
        </div>
      </header>
      <div className="md:grid md:grid-cols-4 md:gap-4 md:container md:mx-auto">
        <div className="md:col-start-2 md:col-span-3">
          <div className="text-black-light lg:text-black lg:font-light md:pb-10 pt-10 text-sm lg:text-xl px-4 lg:px-20 lg:py-20 md:pl-10 md:border-l border-gray-300">
            {descriptionHero}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroIndex;
