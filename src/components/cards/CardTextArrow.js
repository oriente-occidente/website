"use client";
import { Image as DatoImage } from "react-datocms";
import Link from "next/link";
import resolveLink from "@/lib/resolveLink";

function CardTextArrow({ locale, data }) {
  return (
    <div className="pb-8 md:pb-0">
      <Link href={resolveLinkById(data.id, locale)} title={data.title}  aria-label={`Vai a ${data.title}`}>
        <div className="absolute left-4 top-4 z-20 text-xs font-semibold uppercase text-white md:left-8 md:top-6 lg:text-lg ">
          <span>{data.title}</span>
        </div>
        <DatoImage
          className=""
          data={data.image.responsiveImage}
          alt={data.image.alt}
          title={data.image.title}
        />
        <div className="absolute top-0 left-0 right-0 z-10 h-1/3 bg-gradient-to-b from-black-transparent to-transparent md:block"></div>
      </Link>
      <div className="hidden w-10/12 py-6 pb-4 text-sm lg:block">
        {data.description}
      </div>
      <div className="hidden h-[38px] w-[38px] bg-arrow-right-black lg:block" />
    </div>
  );
}

export default CardTextArrow;
