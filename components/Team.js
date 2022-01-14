import Link from 'next/link';
import { Image } from "react-datocms";

import translate from 'lib/locales';

export default function Team ({ locale, data }) {
  return (
    <div className="mb-4 w-[49%] lg:w-[32%] custom-nth-child">
      {console.log('data:', data)}
      <Image
        className=""
        data={data.image.responsiveImage}
        alt={data.image.alt}
        title={data.image.title}
      />
      <div className="uppercase text-black-light text-xxs xl:text-xs mt-1">
        {data.role}
      </div>
      <h2 className="uppercase text-sm xl:text-base font-semibold">
        {data.title}
      </h2>
    </div>
  );
}