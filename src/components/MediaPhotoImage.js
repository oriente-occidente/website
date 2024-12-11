import { Image as DatoImage } from "react-datocms";
import ZoomButton from "@/components/ZoomButton";

export default function MediaPhoto({ photo, locale }) {
  return (
    <>
      <div key={photo.image.id} className="w-full">
        <DatoImage
          fill
          objectFit="cover"
          data={photo.image.responsiveImage}
          alt={photo.image.responsiveImage.alt}
          title={photo.image.responsiveImage.title}
          className="mx-auto"
        />
      </div>
      <div>
        <div className="flex items-center justify-center py-12 md:pt-4 lg:pt-6">
          <ZoomButton
            imageUrl={photo.image.responsiveImage.src}
            locale={locale}
          />
        </div>
        <div className="px-6 md:px-10">
          {photo.image.title && (
            <div className="pb-6 text-sm font-bold uppercase leading-5 text-black">
              {photo.image.title}
            </div>
          )}
          {photo.description && (
            <div className="text-sm leading-7 text-black">
              {photo.description}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
