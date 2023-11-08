"use client";
import {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
  EffectFade,
  Parallax,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image as DatoImage } from "react-datocms";

function Gallery({ slides }) {
  return (
    <div className="relative swiper-gallery-standard">
      <Swiper
        modules={[Autoplay, A11y, Pagination, Navigation, EffectFade, Parallax]}
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
