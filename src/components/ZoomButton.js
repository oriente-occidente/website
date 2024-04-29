import { MagnifyingGlassPlusIcon} from "@heroicons/react/24/outline";
import translate from "@/lib/locales";
import "react-awesome-lightbox/build/style.css";
import Fancybox from "@/components/Fancybox";

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
        className="inline-flex border border-black px-4 py-3 text-3xs md:text-xxs font-semibold uppercase"
      >
        {translate("zoom", locale)} 
        <MagnifyingGlassPlusIcon aria-hidden="true" focusable="false" className="mx-1 h-5 w-5 rotate-90" /> 
        
      </a>
    </Fancybox>
  );
}
