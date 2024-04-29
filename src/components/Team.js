"use client";
import { Image } from "react-datocms";
import Link from "next/link";
import { AtSymbolIcon, LinkIcon } from "@heroicons/react/24/outline";

export default function Team({ locale, data }) {
  if (!data) return null;
  return (
    <div className="custom-nth-child mb-4 w-[49%] lg:w-[32%]">
      {data.image?.responsiveImage && (
        <Image
          className=""
          data={data.image.responsiveImage}
          alt={data.image.alt}
          title={data.image.title}
        />
      )}
      <div className="mt-1 text-xxs uppercase text-black-light xl:text-xs">
        {data.role}
      </div>
      <h2 className="text-sm font-semibold uppercase xl:text-base">
        {data.title}
      </h2>
      <div className="flex justify-between">
        {data.email && (
          <div className="mt-1 text-4xs text-black-light xl:text-xxs">
            <Link
              href={`mailto:${data.email}`}
              title={`Email ${data.title}`}
              className="hover:text-red"
            >
              <AtSymbolIcon
                aria-hidden="true" focusable="false"
                className="h-4 w-4 mr-1 inline-block"
              />
              email
            </Link>
          </div>
        )}
        {data.linkedin && (
          <div className="mt-1 text-4xs text-black-light xl:text-xs inline-block hover:text-red">
            <Link
              href={`${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              title={`Linkedin ${data.title}`}
              className="hover:text-red"
            >
              <LinkIcon
                aria-hidden="true" focusable="false"
                className="h-4 w-4 mr-1 inline-block"
              />
              linkedin
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
