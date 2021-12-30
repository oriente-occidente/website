import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import SwiperCore, {
  Pagination, Navigation
} from 'swiper';
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation"
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Image as DatoImage } from 'react-datocms';

function Gallery({ slides }) {
  SwiperCore.use([Pagination, Navigation]);
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        speed={900}
        loop={true}
        slidesPerView={1}
        // autoplay={true}
        pagination={true}
        navigation={true}
        className="SwiperGallery"
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className="relative">
                <DatoImage className="max-w-[1400px]" data={slide.responsiveImage} alt={slide.alt} title={slide.title} />
                <div class="absolute inset-0 max-w-[1400px] bg-gradient-to-t z-10 from-black-transparent"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}

export default Gallery;
