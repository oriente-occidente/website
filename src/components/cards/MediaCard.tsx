"use client";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { GenericCardProps } from "@/types";
import resolveLink from "@/lib/resolveLink";
import translate from "@/lib/locales";
import {
  PaperClipIcon,
  MusicalNoteIcon,
  VideoCameraIcon,
  PhotoIcon,
  DocumentTextIcon,
  SpeakerWaveIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export function CatTitle(catTitle: string) {
  let title = null;
  switch (catTitle) {
    case "document":
    case "media_document":
      title = (
        <PaperClipIcon
          aria-hidden="true"
          focusable="false"
          className="h-4 w-4"
          color="#D83D35"
        />
      );
      break;
    case "audio":
    case "media_audio":
      title = (
        <MusicalNoteIcon
          aria-hidden="true"
          focusable="false"
          className="h-4 w-4"
          color="#D83D35"
        />
      );
      break;
    case "photo":
    case "media_photo":
      title = (
        <PhotoIcon
          aria-hidden="true"
          focusable="false"
          className="h-4 w-4"
          color="#D83D35"
        />
      );
      break;
    case "video":
    case "media_video":
      title = (
        <VideoCameraIcon
          aria-hidden="true"
          focusable="false"
          className="h-4 w-4"
          color="#D83D35"
        />
      );
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
      <Link
        href={link}
        title={title}
        className="group"
        aria-label={`${translate("goTo", locale)} ${title}`}
      >
        {data.image ? (
          <div className="relative overflow-hidden">
            <Image
              className="object-cover w-full duration-300 group-hover:scale-105"
              src={data.image.url ? data.image.url : data.image}
              alt={data.image.alt ? data.image.alt : "Oriente Occidente"}
              width={400}
              height={300}
            />
          </div>
        ) : (
          <div className="relative aspect-[4/3.2] overflow-hidden flex items-center justify-center border-1 bg-gray-light">
            {(categoryTitle.toLowerCase() === "audio" ||
              categoryTitle.toLowerCase() === "media_audio") && (
              <SpeakerWaveIcon className="h-[150px] text-gray-mid" />
            )}
            {(categoryTitle.toLowerCase() === "document" ||
              categoryTitle.toLowerCase() === "media_document") && (
              <DocumentTextIcon className="h-[150px] text-gray-mid" />
            )}
            {(categoryTitle.toLowerCase() === "video" ||
              categoryTitle.toLowerCase() === "media_video") && (
              <VideoCameraIcon className="h-[150px] text-gray-mid" />
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
            <div className="h-[20px] w-[20px] bg-arrow-right-black lg:block ml-3 group-hover:ml-5 motion-safe:duration-200" aria-hidden="true" />
          </div>
        </div>
      </Link>
    </div>
  );
}
