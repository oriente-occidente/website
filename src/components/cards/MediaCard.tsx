"use client";
import Link from "next/link";
import {
  DocumentTextIcon,
  SpeakerWaveIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { formatDate } from "@/lib/utils";
import { GenericCardProps } from "@/types";
import resolveLink from "@/lib/resolveLink";

export default function NewsCard({ data, locale }: GenericCardProps) {
  // console.log("data", data.tags);
  let categoryTitle = data.contentType;

  console.log("categoryTitle", categoryTitle);
  const categoryColorClasses: any = {
    photo: "bg-cat-news text-black",
    video: "bg-cat-eventi text-black",
    audio: "bg-cat-linguaggi text-black",
    document: "bg-cat-workshop text-black",
  };
  const categoryClasses =
    categoryColorClasses[categoryTitle ? categoryTitle.toLowerCase() : ""];

  const link = resolveLink({ ...data, locale });
  const title = data.title || data.id;
  return (
    <div className="relative py-4">
      <Link href={link} title={data.title || data.id} className="group">
        {data.image ? (
          <div className="relative h-[220px] overflow-hidden md:h-[360px]">
            <img
              className="dato-image-cover duration-300 group-hover:scale-105"
              src={data.image}
            />
          </div>
        ) : (
          <div className="relative h-[220px] overflow-hidden md:h-[360px] flex items-center justify-center border-1 border-gray-100 bg-cat-linguaggi">
            {categoryTitle.toLowerCase() === "audio" && (
              <SpeakerWaveIcon className="h-[200px] text-black" />
            )}
            {categoryTitle.toLowerCase() === "document" && (
              <DocumentTextIcon className="h-[200px] text-black" />
            )}
          </div>
        )}
        <div className="z-20">
          <div className="mt-4 mb-3">
            {categoryTitle && (
              <span
                className={`px-2 py-1 font-semibold uppercase mr-2 ${categoryClasses}`}
              >
                {categoryTitle}
              </span>
            )}
            {data.creationDate && (
              <span className="font-semibold text-xs uppercase md:ml-2">
                {formatDate(data.startDate, locale)}
              </span>
            )}
          </div>
          {title && (
            <h2 className="text-base font-semibold uppercase text-black md:text-lg group-hover:underline">
              {title}
            </h2>
          )}
          <div className="mt-3 uppercase font-semibold text-xxs flex items-center">
            <div>Vai al contenuto</div>
            <div className=" hidden h-[20px] w-[20px] bg-arrow-right-black lg:block ml-3 group-hover:ml-5 motion-safe:duration-200" />
          </div>
        </div>
      </Link>
    </div>
  );
}
