import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Image as DatoImage } from "react-datocms";

function HeroSlider({ slides }) {
  SwiperCore.use([Pagination, Navigation]);
  return (
    <header className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        speed={900}
        slidesPerView={1}
        pagination={true}
        navigation={true}
        className="mySwiper"
      >
        {slides.map((slide) => {
          const { image } = slide;
          const { responsiveImage, alt, title, id } = image;
          return (
            <SwiperSlide key={id}>
              <DatoImage
                className="h-80vh object-cover md:h-50vh xl:h-80vh"
                data={responsiveImage}
                alt={alt}
                title={title}
              />
              <div className="container relative">
                <h2 className="absolute bottom-16 right-4 z-20 w-4/5 text-right text-base font-normal text-white md:bottom-12 md:w-2/3 md:text-lg xl:w-1/2 xl:text-2xl 2xl:bottom-24 2xl:right-0">
                  {slide.title}
                </h2>
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black-lessTransparent to-transparent"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </header>
  );
}

export default HeroSlider;
