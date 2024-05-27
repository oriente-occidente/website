"use client";
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Parallax,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image as DatoImage } from "react-datocms";
import Image from "next/image";

function HeroSlider({ slides }) {
  return (
    <div className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, A11y, EffectFade, Parallax, Pagination, Navigation]}
        spaceBetween={0}
        speed={900}
        slidesPerView={1}
        pagination={true}
        navigation={true}
        // preloadImages={true}
        lazyload="true"
        className="mySwiper relative h-[40vh] md:h-[60vh] xl:h-[70vh]"
      >
        {slides.map((slide, i) => {
          const { image } = slide;
          const { responsiveImage, alt, title, id } = image;
          return (
            <SwiperSlide key={id}>
              <DatoImage
                className="dato-image-cover"
                data={responsiveImage}
                alt={alt}
                title={title}
                priority={i == 0 ? true : false}
                fetchpriority={i == 0 ? "high" : "low"}
              />
              {/* <Image
                className="h-full w-full duration-300 group-hover:scale-105"
                src={image.url ? image.url : image}
                alt={
                  image.alt ? image.alt : "Oriente Occidente"
                }
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority={i == 0 ? true : false}
                sizes={image.responsiveImage.sizes}
              /> */}
              <div className="container relative h-full">
                <h2 className="absolute bottom-16 right-4 z-20 w-4/5 text-right text-base font-normal text-white md:bottom-12 md:w-2/3 md:text-lg xl:w-1/2 xl:text-2xl 2xl:bottom-24 2xl:right-0">
                  {slide.title}
                </h2>
              </div>
              <div className="from-black-lessTransparent absolute inset-0 z-10 bg-gradient-to-t to-transparent"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default HeroSlider;
