import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation"
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Link from 'next/link';

import StandardCard from '../cards/StandardCard';

function GalleryPreview({ slides }) {
  return (
    <header className="relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        speed={900}
        loop={true}
        slidesPerView={1.3}
        centeredSlides={true}
        // autoplay={true}
        className="mySwiper"
        breakpoints={{
          "1024": {
            "slidesPerView": 2,
            "spaceBetween": 40
          },
          "1280": {
            "slidesPerView": 2.5,
            "spaceBetween": 10
          }
        }}
      >
        {slides.map((slide) => {
          let categoryTitle;
          let dateEvent;
          if (slide.category) {
            if (Array.isArray(slide.category)){
              categoryTitle = slide.category.map((cat) =>{
                return cat.title
              }).join(', ');
            } else {
              categoryTitle = slide.category.title
            }
          }
          if (slide.dateEvento) {
            dateEvent = slide.dateEvento.map((event) => {
              return event.startTime
            }).join(', ');
          }
          return (
            <div className="relative">
              <SwiperSlide key={slide.id}>
                <StandardCard data={slide} categoryTitle={categoryTitle} dateEvent={dateEvent}>
                </StandardCard>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </header>
  )
}

export default GalleryPreview;
