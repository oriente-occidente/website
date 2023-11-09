import { Image as DatoImage } from "react-datocms";

export default function MediaDocumentImage({ data, locale }) {
  return <div className="flex w-full justify-center lg:bg-[#FFF5F5] lg:px-10">
      <div className="relative h-[400px] md:w-full lg:h-[530px] lg:w-[440px]">
        <img
          className="h-[400px] object-cover md:w-full lg:h-[530px] lg:object-cover"
          src={data.image.url}
          alt={data.image.alt}
        />
        {/* <DatoImage
          fill
          objectFit="cover"
          className=""
          data={data.image.responsiveImage.src}
          alt={pdata.image.responsiveImage.alt}
          title={data.image.title}
        /> */}
      </div>
    </div>
}
