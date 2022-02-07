import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import HomeCard from "components/cards/HomeCard";

function GalleryHome({ slides, background, locale }) {
  return (
    <header className={`relative bg-${background}`}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        speed={900}
        slidesPerView={1.25}
        className="mySwiper"
        breakpoints={{
          1280: {
            spaceBetween: 20,
          },
        }}
      >
        {slides.map((slide, i) => {
          const {
            imageHero,
            titleHero,
            category,
            authors,
            location,
            dateEvento,
            slug,
            id,
          } = slide;
          let categoryTitle;
          let dateEvent;
          if (category) {
            if (Array.isArray(category)) {
              categoryTitle = category
                .map((cat) => {
                  return cat.title;
                })
                .join(", ");
            } else {
              categoryTitle = category.title;
            }
          }
          if (dateEvento) {
            dateEvent = dateEvento
              .map((event) => {
                return event.startTime;
              })
              .join(", ");
          }

          return (
            <div className="relative" key={`gallery-home-${id}`}>
              <SwiperSlide>
                <HomeCard
                  count={i + 1}
                  data={slide}
                  dateEvent={dateEvent}
                  categoryTitle={categoryTitle}
                  locale={locale}
                />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </header>
  );
}

export default GalleryHome;
