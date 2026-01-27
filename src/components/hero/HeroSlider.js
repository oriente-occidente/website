"use client";
import { useState, useRef } from "react";
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
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef(null);

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay, A11y, EffectFade, Parallax, Pagination, Navigation]}
        spaceBetween={0}
        speed={900}
        slidesPerView={1}
        pagination={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: true,
        }}
        a11y={{
          prevSlideMessage: "Slide precedente",
          nextSlideMessage: "Slide successiva",
          firstSlideMessage: "Prima slide",
          lastSlideMessage: "Ultima slide",
          paginationBulletMessage: "Vai alla slide {{index}}",
        }}
        lazy={{
          enabled: true,
          loadOnTransitionStart: true,
        }}
        className="mySwiper relative md:h-[50vh] lg:h-[60vh] xl:h-[70vh]"
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

      {/* Pulsante Pausa/Play per accessibilità WCAG 2.2.2 */}
      <button
        onClick={toggleAutoplay}
        aria-label={
          isPlaying
            ? "Metti in pausa la presentazione"
            : "Riproduci la presentazione"
        }
        aria-pressed={!isPlaying}
        className="absolute bottom-4 left-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black lg:bottom-8 lg:left-8"
      >
        {isPlaying ? (
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
        <span className="sr-only">{isPlaying ? "Pausa" : "Play"}</span>
      </button>
    </div>
  );
}

export default HeroSlider;
