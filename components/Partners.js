import Link from 'next/link';
import { Image } from "react-datocms";

export default function Partners({ locale, data }) {
  return (
    <div className="w-1/2 md:w-1/3 xl:w-1/5 pr-8 pb-4 md:pb-12 text-center">
      <Link href={data.url}>
        <a
          target="_blank"
          title={data.title}
        >
          <Image
            data={data.image.responsiveImage}
            className="max-h-[55px] max-w-[170px] object-contain"
          />
        </a>
      </Link>
    </div>
  );
}
