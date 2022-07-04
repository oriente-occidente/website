import Link from "next/link";
import { Image } from "react-datocms";

export default function Partners({ locale, data }) {
  if (!data) return null;
  return (
    <div className="w-1/2 pr-8 pb-4 text-center md:w-1/3 md:pb-12 xl:w-1/4 inline-block">
      <div className="border relative pb-[100%]">
        <Link href={data.url}>
          <a target="_blank" title={data.title} className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
            {data.image?.responsiveImage && (
              <Image
                data={data.image.responsiveImage}
                className="max-w-[150px] max-h-[150px] object-contain w-[auto]"
                alt={data.image?.alt}
              />
            )}
          </a>
        </Link>
      </div>
      <div className="pt-[10px] text-[10px]">{data.title}</div>
    </div>
  );
}
