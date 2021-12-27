import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation"
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Link from 'next/link';

import StandardCard from './card/StandardCard';

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
        autoplay={true}
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
          const { imageHero, titleHero, category, dateEvento, slug } = slide;
          const { responsiveImage, alt, title, id } = imageHero;
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
              <SwiperSlide key={id}>
                <StandardCard slug={slug} mainTitle={titleHero} image={imageHero} category={categoryTitle} date={dateEvent}>
                </StandardCard>
                {/* <Link href={slug}>
                  <a title={titleHero}>
                    <div className="flex space-x-4 absolute z-20 left-4 md:left-8 md:bottom-8 top-48 md:top-auto text-white uppercase text-xxs md:text-xs font-semibold ">
                      <span>{categoryTitle}</span>
                      <span className="normal-case font-light">{dateEvent}</span>
                    </div>
                    <DatoImage className="" data={responsiveImage} alt={alt} title={title} />
                      <div class="absolute top-40 md:top-auto h-[65px] md:h-48 md:bottom-0 left-0 right-0 bg-gradient-to-t z-10 from-black-transparent"></div>
                      <div class="hidden md:block absolute top-0 h-48 left-0 right-0 bg-gradient-to-b z-10 from-black-transparent"></div>
                    <h2 className="text-sm z-20 md:text-lg uppercase text-black md:text-white font-semibold mt-2 md:absolute md:top-6 md:left-8 ">
                      {titleHero}
                    </h2>
                    <h3 className="text-xxs md:hidden">{dateEvent}</h3>
                  </a>
                </Link> */}
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </header>
  )
}

export default GalleryPreview;
