import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation"
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import HomeCard from '../cards/HomeCard';

function GalleryHome({ slides, background, locale }) {
  return (
    <header className={`relative bg-${background}`}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        speed={900}
        loop={true}
        slidesPerView={1.25}
        // centeredSlides={true}
        // autoplay={true}
        className="mySwiper"
        breakpoints={{
          "1280": {
            "spaceBetween": 20
          }
        }}
      >
        {slides.map((slide, count) => {
          count = count++;
          const { imageHero, titleHero, category, dateEvento, slug, id } = slide;
          let categoryTitle;
          let dateEvent;
          if (category) {
            if (Array.isArray(category)){
              categoryTitle = category.map((cat) =>{
                return cat.title
              }).join(', ');
            } else {
              categoryTitle = category.title
            }
          }
          if (dateEvento) {
            dateEvent = dateEvento.map((event) => {
              return event.startTime
            }).join(', ');
          }
          return (
            <div className="relative">
              <SwiperSlide key={slug}>
                <HomeCard count={count} data={slide} dateEvent={dateEvent} categoryTitle={categoryTitle} locale={locale}>
                </HomeCard>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </header>
  )
}

export default GalleryHome;
