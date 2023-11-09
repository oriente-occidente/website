import { Image as DatoImage } from "react-datocms";
import ZoomButton from "components/ZoomButton";

export default function MediaPhoto({ photo, locale }) {
  return (
    <>
      <div key={photo.image.id}>
        <img src={photo.image.url} alt={photo.image.alt} />
        {/* <DatoImage
          fill
          objectFit="cover"
          className=""
          data={photo.image.responsiveImage.src}
          alt={photo.image.responsiveImage.alt}
          title={photo.image.title}
        /> */}
      </div>
      <div className="">
        <div className="flex items-center justify-center pt-4 pb-12 lg:pt-6">
          <ZoomButton imageUrl={photo.image.url} />
        </div>
        <div className="px-6 md:px-10">
          <div className="pb-6 text-sm font-bold uppercase leading-5 text-black">
            {photo.image.title}
          </div>
          <div className="text-sm leading-7 text-black">
            {photo.description}
          </div>
        </div>
      </div>
    </>
  );
}
