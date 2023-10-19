"use client";
import { Image as DatoImage } from "react-datocms";
import translate from "@/lib/locales";
import { resolveLinkById } from "@/lib/utils";
import Link from "next/link";

function HomeCard({ count, categoryTitle, data, locale }) {
  return (
    <Link
      href={resolveLinkById(data.id, locale)}
      locale={locale}
      title={data.titleHero}
      className="group"
    >
      <div className="relative h-[240px] pb-8 pl-4 md:h-[640px] md:pb-16 md:pl-6 lg:pb-20 xl:h-[45vw]">
        <div className="relative flex h-full justify-between lg:pl-8 2xl:pl-[calc((100vw-1390px)/2)]">
          <div>
            <div className="relative text-xxs uppercase tracking-wider after:absolute after:top-7 after:left-0 after:h-px after:w-12 after:bg-black md:text-sm md:tracking-wide lg:text-base lg:after:top-12 lg:after:w-40">
              0{count}/
            </div>
            <div className="title--small mt-4 mb-12 hidden md:block lg:py-16">
              {data.descriptionHero}
            </div>
          </div>
          <div className="relative w-3/4 overflow-hidden lg:w-8/12">
            {data.imageHero ? (
              <DatoImage
                className="h-full w-full duration-300 group-hover:scale-105"
                data={data.imageHero.responsiveImage}
                alt={data.imageHero.alt}
                title={data.imageHero.title}
              />
            ) : (
              <div className="h-full w-full duration-300 group-hover:scale-105" />
            )}
            <div className="absolute left-0 top-0 z-10 h-1/2 w-full bg-gradient-to-b from-black-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 z-10 hidden h-1/2 bg-gradient-to-t from-black-transparent to-transparent md:block"></div>
            <div className="absolute left-1/2 bottom-4 -translate-x-2/4 text-xl font-thin text-white after:absolute after:top-1/2 after:left-1/2 after:h-10 after:w-10 after:-translate-y-2/4 after:-translate-x-2/4 after:rounded-full after:border after:border-white md:hidden">
              +
            </div>
            <div className="absolute bottom-16 left-1/2 z-20 hidden -translate-x-2/4 text-xxs font-thin uppercase tracking-widest text-white after:absolute after:top-1/2 after:left-1/2 after:h-28 after:w-28 after:-translate-y-2/4 after:-translate-x-2/4 after:rounded-full after:border after:border-white after:duration-300 group-hover:after:border-red md:block">
              {translate("more", locale)}
            </div>
          </div>
          <h2 className="absolute top-1/2 z-20 -translate-y-2/4 text-lg font-semibold uppercase text-black md:text-xl lg:text-2xl xl:w-2/3 xl:text-3xl">
            <span className="box-decoration-clone bg-white shadow-title md:shadow-title-lg 2xl:shadow-title-xl">
              {/* {titleHero} */}
              {data.titleHero}
            </span>
          </h2>
        </div>
      </div>
      <div className="title--small relative ml-20 mt-4 mb-12 pl-1 after:absolute after:-top-3 after:left-1 after:h-px after:w-32 after:bg-black md:hidden lg:py-16">
        {data.descriptionHero}
      </div>
    </Link>
  );
}

export default HomeCard;
