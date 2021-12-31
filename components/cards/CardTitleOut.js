import { Image as DatoImage } from 'react-datocms';
import Link from 'next/link';

import { resolveLinkById } from 'lib/utils';

function CardOutTitle({ data, locale, title, dateEvent, subtitle, image }) {
  return (
    <div className="pb-8 md:pb-0">
      <Link href={`/${resolveLinkById(id, locale)}`}>
        <a title={title}>
          <div className="md:relative md:h-[360px]">
            <DatoImage className="md:h-full" data={image.responsiveImage} alt={image.alt} title={image.title} />
            <div className="flex space-x-4 absolute z-20 left-4 md:left-8 md:bottom-8 top-48 md:top-auto text-white uppercase text-xxs md:text-xs font-semibold ">
              <span>{title}</span>
              <span className="hidden md:block normal-case font-light">{dateEvent}</span>
            </div>
            <div class="absolute top-40 md:h-1/3 md:top-auto md:bottom-0 left-0 right-0 bg-gradient-to-t z-10 from-black-transparent" />
          </div>
          <h2 className="text-sm md:text-base z-20 uppercase text-black font-normal md:font-semibold mt-2">
            {title}
          </h2>
          <h3 className="text-sm md:text-base z-20 uppercase text-black font-semibold">
            {subtitle}
          </h3>
          <div className="text-xxs md:hidden">{dateEvent}</div>
        </a>
      </Link>
    </div>
  )
}

export default CardOutTitle;
