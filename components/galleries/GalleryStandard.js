import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Image as DatoImage } from "react-datocms";

function Gallery({ slides }) {
  SwiperCore.use([Pagination, Navigation, A11y]);
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, A11y]}
        speed={900}
        slidesPerView={1}
        pagination={true}
        navigation={true}
        className="SwiperGalleryStandard"
        breakpoints={{
          1024: {
            slidesPerView: 1.15,
            spaceBetween: 300,
          },
        }}
      >
        {slides?.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className="relative">
                <DatoImage
                  className=""
                  data={slide.responsiveImage}
                  alt={slide.alt}
                  title={slide.title}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Gallery;
