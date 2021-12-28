import { Image as DatoImage } from 'react-datocms';

import Link from 'next/link';

function StandardCard({ count, slug, mainTitle, image }) {
  const { responsiveImage, alt, title, id } = image;

  return (
    <div className="pb-8 pl-4 relative h-[240px]">
      <Link href={slug}>
        <a title={mainTitle}>
          <div className="relative flex h-full justify-between">
            <div className="tracking-wider uppercase lg:py-12 text-xxs md:text-sm lg:text-base md:tracking-wide relative after:h-px after:w-12 after:bg-black after:absolute after:top-7 after:left-0">
              0{count + 1}/
            </div>
            <div className="w-3/4 relative">
              <DatoImage className="w-full h-full" data={responsiveImage} alt={alt} title={title} />
              <div class="absolute h-full w-full left-0 top-0 bg-gradient-to-b z-10 from-black-transparent"></div>
              {/* <div className="text-white text-xl after:w-9 after:h-9 font-thin absolute left-1/2 -translate-x-2/4 after:border-white after:border bottom-4 after:rounded-full after:absolute after:inset-0">+</div> */}
            </div>
            <h2 className="text-lg z-20 md:text-lg uppercase text-white font-semibold absolute top-1/2 -translate-y-2/4">
              {mainTitle}
            </h2>
          </div>
            {/* <div class="hidden md:block absolute top-0 h-48 left-0 right-0 bg-gradient-to-b z-10 from-black-transparent"></div> */}
        </a>
      </Link>
    </div>
  )
}

export default StandardCard;
