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
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={0}
        speed={900}
        slidesPerView={1}
        pagination={true}
        navigation={true}
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
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Gallery;
