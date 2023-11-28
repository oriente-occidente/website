import { Image as DatoImage } from "react-datocms";

export default function MediaDocumentImage({ data, locale }) {
  return <div className="flex w-full justify-center lg:bg-red-light lg:px-10">
      <div className="relative w-full lg:w-2/3">
         <DatoImage
          fill
          objectFit="cover"
          data={data.image.responsiveImage}
          alt={data.image.responsiveImage.alt}
          title={data.image.title}
        />
      </div>
    </div>
}
