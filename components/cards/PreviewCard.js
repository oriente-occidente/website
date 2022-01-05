import { Image as DatoImage } from 'react-datocms';
import Link from 'next/link';

import { resolveLinkById } from 'lib/utils';

function PreviewCard({ data, locale }) {
  const image = data.imageHero;
  return (
    <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
      <div>
        <Link href={resolveLinkById(data.id, locale)} locale={locale}>
          <a title={data.title}>
            <div className="max-h-100 flex justify-center py-2 px-2 bg-gray-50">
              <DatoImage
                data={image.responsiveImage}
                alt={image.alt}
                title={image.title}
              />
            </div>
          </a>
        </Link>

        <h2 className="text-sm md:text-md uppercase text-black font-semibold mt-2  flex justify-center">
          {data.title}
        </h2>
      </div>
    </div>
  );
}

export default PreviewCard;
