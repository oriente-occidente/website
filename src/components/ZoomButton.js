import { ZoomInIcon } from "@heroicons/react/outline";
import translate from "lib/locales";
import "react-awesome-lightbox/build/style.css";
import Fancybox from "lib/fancybox";

export default function ZoomButton({ locale, imageUrl }) {

  return (
    <Fancybox
      options={{
        Thumbs: false,
      }}
    >
      <a
        data-fancybox="gallery"
        href={imageUrl}
        className="inline-flex border border-black px-4 py-3 text-xxs font-semibold uppercase"
      >
        {translate("zoom", locale)} 
        <ZoomInIcon aria-hidden="true" className="mx-1 h-5 w-5 rotate-90" />
      </a>
    </Fancybox>
  );
}
