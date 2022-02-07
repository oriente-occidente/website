import { Image } from 'react-datocms';

export default function Team({ locale, data }) {
  if (!data) return null;
  return (
    <div className="custom-nth-child mb-4 w-[49%] lg:w-[32%]">
      {data.image?.responsiveImage && (
        <Image
          className=""
          data={data.image.responsiveImage}
          alt={data.image.alt}
          title={data.image.title}
        />
      )}
      <div className="mt-1 text-xxs uppercase text-black-light xl:text-xs">
        {data.role}
      </div>
      <h2 className="text-sm font-semibold uppercase xl:text-base">
        {data.title}
      </h2>
    </div>
  );
}
