import { Image as DatoImage } from 'react-datocms';

function HeroIndex({ data }) {
  const { titleHero, descriptionHero, imageHero } = data

  return (
    <header className="pt-5 pb-10 md:py-0 border-t md:border-none border-gray bg-gray">
      <div className="relative">
        <div className="container min-h-[150px]">
          <h1 className="title--big">
            {titleHero}
          </h1>
        </div>
        { imageHero ?
          <div className="mt-6 md:mt-0 pl-4 md:pl-[25%]">
            <DatoImage className="max-w-[1400px]" data={imageHero.responsiveImage} alt={imageHero.alt} title={imageHero.title} />
          </div>
        : null }
        <div class="hidden md:absolute top-0 h-full md:bottom-0 left-0 md:left-[25%] max-w-[1400px] right-1/2 bg-gradient-to-r z-10 from-black-transparent"></div>
      </div>
      <div className="text-black-light lg:text-black lg:font-light md:pb-10 pt-10 text-sm lg:text-xl px-4 lg:px-20 lg:py-20 md:ml-[25%] md:pl-10 md:border-l border-gray-300">
        {descriptionHero}
      </div>
    </header>
  )
}

export default HeroIndex;
