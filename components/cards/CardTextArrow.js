import { Image as DatoImage } from 'react-datocms';
import Link from 'next/link';

import { resolveLinkById } from 'lib/utils';

function CardTitleIn({ locale, image, title, description, id }) {
  return (
    <div className="pb-8 md:pb-0">
      <Link href={`/${resolveLinkById(id, locale)}`}>
        <a title={title}>
          <div className="absolute z-20 left-4 md:left-8 top-4 md:top-6 text-white uppercase text-xs lg:text-lg font-semibold ">
            <span>{title}</span>
          </div>
          <DatoImage className="" data={image.responsiveImage} alt={image.alt} title={image.title} />
          <div class="md:block absolute top-0 h-1/3 left-0 right-0 bg-gradient-to-b z-10 from-black-transparent"></div>
        </a>
      </Link>
      <div className="hidden lg:block text-sm w-10/12 py-6 pb-4">
        {description}
      </div>
      <div className="hidden lg:block bg-arrow-right-black w-[38px] h-[38px]" />
    </div>
  )
}

export default CardTitleIn;
