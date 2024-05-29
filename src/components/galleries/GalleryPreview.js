"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Parallax,
  Pagination,
} from "swiper/modules";
import StandardCard from "@/components/cards/StandardCard";
import GenericCard from "@/components/cards/GenericCard";

import { closestInterval } from "@/lib/utils";

function GalleryPreview({ slides, locale }) {
  return (
    <header className="relative">
      <Swiper
        modules={[Autoplay, A11y, EffectFade, Parallax, Pagination, Navigation]}
        spaceBetween={24}
        speed={900}
        slidesPerView={1.3}
        centeredSlides={true}
        initialSlide={1}
        className="mySwiper"
        lazy={{
          enabled: true,
          loadPrevNext: true,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
        }}
      >
        {slides.map((slide, i) => {
          const { id } = slide;
          let categoryTitle;

          if (slide.category) {
            if (Array.isArray(slide.category)) {
              categoryTitle = slide.category
                .map((cat) => {
                  return cat.title;
                })
                .join(", ");
            } else {
              categoryTitle = slide.category.title;
            }
          }

          let eventDate = null;
          if (slide.dateEvento) {
            eventDate = closestInterval(
              slide.dateEvento.map((event) => event.startTime)
            );
          }
          return (
            <div className="relative" key={`gallery-preview-${id}`}>
              <SwiperSlide>
                {/* <StandardCard
                  locale={locale}
                  data={slide}
                  categoryTitle={categoryTitle}
                  eventDate={eventDate}
                /> */}
                <GenericCard
                  count={i}
                  locale={locale} 
                  data={slide}
                  categoryTitle={categoryTitle}
                  eventDate={eventDate} />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </header>
  );
}

export default GalleryPreview;
