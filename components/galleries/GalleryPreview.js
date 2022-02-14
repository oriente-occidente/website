import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SwiperCore, { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import StandardCard from "components/cards/StandardCard";
import { closestInterval } from "lib/utils";

function GalleryPreview({ slides, locale }) {
  return (
    <header className="relative">
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={24}
        speed={900}
        slidesPerView={1.3}
        centeredSlides={true}
        initialSlide={2}
        className="mySwiper"
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
                <StandardCard
                  locale={locale}
                  data={slide}
                  categoryTitle={categoryTitle}
                  eventDate={eventDate}
                />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </header>
  );
}

export default GalleryPreview;
