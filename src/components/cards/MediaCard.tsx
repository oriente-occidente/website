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
import translate from "@/lib/locales";
import {
  PaperClipIcon,
  MusicalNoteIcon,
  VideoCameraIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

export function CatTitle(catTitle: string) {
  let title = null;
  switch (catTitle) {
    case "document":
    case "media_document":
      title = <PaperClipIcon aria-hidden="true" focusable="false" className="h-4 w-4" color="#D83D35" />;
      break;
    case "audio":
    case "media_audio":
      title = <MusicalNoteIcon aria-hidden="true" focusable="false" className="h-4 w-4" color="#D83D35" />;
      break;
    case "photo":
    case "media_photo":
      title = <PhotoIcon aria-hidden="true" focusable="false" className="h-4 w-4" color="#D83D35" />;
      break;
    case "video":
    case "media_video":
      title = <VideoCameraIcon aria-hidden="true" focusable="false" className="h-4 w-4" color="#D83D35" />;
      break;
    default:
      <></>;
  }

  return title;
}

export default function MediaCard({ data, locale }: GenericCardProps) {
  let categoryTitle = data.contentType || data._modelApiKey;
  const link = resolveLink({ ...data, locale });
  const title = data.title || data.description || data.id;
  return (
    <div className="relative">
      <Link href={link} title={title} className="group" aria-label={`Vai a ${title}`}>
        {data.image ? (
          <div className="relative h-[220px] overflow-hidden md:h-[360px]">
            <img
              className="dato-image-cover duration-300 group-hover:scale-105"
              src={data.image.url ? data.image.url : data.image}
            />
          </div>
        ) : (
          <div className="relative h-[220px] overflow-hidden md:h-[360px] flex items-center justify-center border-1 border-gray-100 bg-cat-linguaggi">
            {categoryTitle.toLowerCase() === "audio" ||
              (categoryTitle.toLowerCase() === "media_audio" && (
                <SpeakerWaveIcon className="h-[150px] text-black" />
              ))}
            {(categoryTitle.toLowerCase() === "document" ||
              categoryTitle.toLowerCase() === "media_document") && (
              <DocumentTextIcon className="h-[150px] text-black" />
            )}
          </div>
        )}
        <div className="z-20">
          <div className="mt-4 mb-3 ">
            {categoryTitle && (
              <div
                className={
                  "px-2 font-semibold text-xs uppercase mr-2 border border-red text-red inline-flex flex-nowrap items-center gap-1"
                }
              >
                {CatTitle(categoryTitle.toLowerCase())}
                {translate(categoryTitle.toLowerCase(), locale)}
              </div>
            )}
            {data.creationDate && (
              <span className="font-semibold text-xs uppercase md:ml-2">
                {formatDate(data.startDate, locale)}
              </span>
            )}
          </div>
          {(title || data.description) && (
            <h2 className="text-base font-semibold uppercase text-black md:text-lg group-hover:underline line-clamp-2">
              {title ? title : data.description}
            </h2>
          )}
          <div className="mt-3 uppercase font-semibold text-xxs flex items-center">
            <div>{translate("goToContents", locale)}</div>
            <div className="h-[20px] w-[20px] bg-arrow-right-black lg:block ml-3 group-hover:ml-5 motion-safe:duration-200" />
          </div>
        </div>
      </Link>
    </div>
  );
}
