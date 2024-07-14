"use client";
import { useEffect, useRef } from "react";
import { Image as DatoImage } from "react-datocms";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  A11y,
  Parallax,
  Pagination,
  Navigation,
} from "swiper/modules";

function Gallery({ slides }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const showArrows =
    slides.length > 1
      ? {
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }
      : false;
  return (
    <div className="relative swiper-gallery">
      <Swiper
        modules={[Autoplay, A11y, Parallax, Pagination, Navigation]}
        spaceBetween={0}
        speed={700}
        slidesPerView={1}
        pagination={true}
        // navigation={showArrows}
        navigation={true}
        className="SwiperGallery"
        // effect="fade"
        // parallax={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        // onSwiper={(swiper) => {
        //   setTimeout(() => {
        //     swiper?.params?.navigation?.prevEl = prevRef.current;
        //     swiper?.params?.navigation?.nextEl = nextRef.current;
        //     swiper.navigation.destroy();
        //     swiper.navigation.init();
        //     swiper.navigation.update();
        //   });
        // }}
      >
        {slides?.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div
                className="relative aspect-video"
                // data-swiper-parallax="-50%"
              >
                <DatoImage
                  className="dato-image-cover"
                  data={slide.responsiveImage}
                  alt={slide.alt}
                  title={slide.title}
                />
                <div className="from-black-transparent absolute inset-0 z-10 max-w-[1400px] bg-gradient-to-t to-transparent"></div>
                {slide.title && (
                  <div className="absolute bottom-0 left-0 right-0 z-1 px-4 pt-3 pb-2 text-xxs text-white bg-gradient-to-t from-black/80 text-shadow">
                    {slide.title}
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div ref={prevRef} className="swiper-button-prev"></div>
      <div ref={nextRef} className="swiper-button-next"></div>
    </div>
  );
}

export default Gallery;
