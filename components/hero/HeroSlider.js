import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Image as DatoImage } from 'react-datocms';

function HeroSlider({ slides }) {
  SwiperCore.use([Pagination, Navigation]);
  return (
    <header className="relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        speed={900}
        loop={true}
        slidesPerView={1}
        autoplay={true}
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
                className="h-80vh md:h-50vh xl:h-80vh object-cover"
                data={responsiveImage}
                alt={alt}
                title={title}
              />
              <div className="container relative">
                <h2 className="z-20 absolute bottom-16 md:bottom-12 2xl:bottom-24 font-normal w-4/5 md:w-2/3 xl:w-1/2 right-4 xl:right-0 text-base md:text-lg xl:text-2xl text-white text-right">
                  {slide.title}
                </h2>
              </div>
              <div className="absolute -top-20 bottom-0 left-0 right-0 bg-gradient-to-t z-10 from-black-transparent"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </header>
  );
}

export default HeroSlider;
