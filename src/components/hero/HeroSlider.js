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
import { Image as DatoImage, SRCImage } from "react-datocms";
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
        lazy={{
          enabled: true,
          loadOnTransitionStart: true,
        }}
        className="mySwiper relative  lg:h-[60vh] xl:h-[70vh]"
      >
        {slides.map((slide, i) => {
          const { image, mobileImg } = slide;
          const { responsiveImage, id } = image;
          return (
            <SwiperSlide key={id}>
              <div
                className="relative aspect-[4/3] md:aspect-auto h-full"
                style={{ background: `${responsiveImage.bgColor}` }}
              >
                <Image
                  src={responsiveImage.src}
                  alt={responsiveImage.alt}
                  width={1600}
                  height={900}
                  className="absolute inset-0 object-cover object-center w-full h-full hidden lg:block"
                  priority={i == 0 ? true : false}
                  fetchPriority={i == 0 ? "high" : "low"}
                />
                <Image
                  src={mobileImg.responsiveImage.src}
                  alt={mobileImg.responsiveImage.alt}
                  width={500}
                  height={300}
                  className="absolute inset-0 object-cover object-center w-full h-full lg:hidden"
                  priority={i == 0 ? true : false}
                  fetchPriority={i == 0 ? "high" : "low"}
                />
              </div>
              {/* <DatoImage
                className="dato-image-cover hidden lg:block"
                data={responsiveImage}
                alt={alt}
                title={title}
                priority={i == 0 ? true : false}
                fetchPriority={i == 0 ? "high" : "low"}
              />
              <DatoImage
                className="lg:hidden"
                data={mobileImg.responsiveImage}
                priority={i == 0 ? true : false}
                fetchPriority={i == 0 ? "high" : "low"}
              /> */}
              <div>
                <div className="container relative h-full">
                  <h2 className="absolute bottom-16 right-4 z-20 w-4/5 text-right text-base font-normal text-white leading-none md:leading-10 md:bottom-12 md:w-2/3 md:text-lg xl:w-1/2 xl:text-2xl 2xl:bottom-24 2xl:right-0">
                    {slide.title}
                  </h2>
                </div>
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
