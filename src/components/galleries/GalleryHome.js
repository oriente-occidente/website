"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  A11y,
  Parallax,
  Pagination,
  Navigation,
} from "swiper/modules";
import HomeCard from "@/components/cards/HomeCard";

function GalleryHome({ slides, background, locale }) {
  return (
    <header className={`relative bg-${background}`}>
      <Swiper
        modules={[Autoplay, A11y, Parallax, Pagination, Navigation]}
        spaceBetween={24}
        speed={900}
        slidesPerView={1.25}
        className="mySwiper"
        lazy={{
          enabled: true,
          checkInView: true,
          loadOnTransitionStart: true,
        }}
        breakpoints={{
          1280: {
            spaceBetween: 20,
          },
        }}
        a11y={{
          prevSlideMessage: 'Slide precedente',
          nextSlideMessage: 'Slide successiva',
          firstSlideMessage: 'Prima slide',
          lastSlideMessage: 'Ultima slide',
          paginationBulletMessage: 'Vai alla slide {{index}}',
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
