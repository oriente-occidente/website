import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SwiperCore, { Pagination, Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Image as DatoImage } from "react-datocms";

function Gallery({ slides }) {
  SwiperCore.use([Pagination, Navigation]);
  const showArrows = slides.length > 1 ? true : false
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={0}
        speed={900}
        slidesPerView={1}
        pagination={true}
        navigation={showArrows}
        className="SwiperGallery"
      >
        {slides?.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className="relative">
                <DatoImage
                  className="max-w-[1400px]"
                  data={slide.responsiveImage}
                  alt={slide.alt}
                  title={slide.title}
                />
                <div className="from-black-transparent absolute inset-0 z-10 max-w-[1400px] bg-gradient-to-t to-transparent"></div>
                {slide.title &&
                  <div className="absolute bottom-0 left-0 right-0 z-1 px-4 pt-3 pb-2 text-xxs text-white bg-gradient-to-t from-black/80 text-shadow">
                    {slide.title}
                  </div>
                }
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Gallery;
