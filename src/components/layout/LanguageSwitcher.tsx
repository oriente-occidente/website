"use client";
import Link from "next/link";
import { Fragment } from "react";
import translate from "@/lib/locales";
import resolveLink from "@/lib/resolveLink";
import config from "@/data/config";

export default function LanguageSwitcher({
  currentLocale,
  slugData,
}: {
  currentLocale: string;
  slugData: any | undefined;
}) {
  const { locales } = config;
  // const url = `/api/set-locale?lang=`;
  return (
    <>
      {locales.map((l, i) => {
        const isActive = currentLocale === l;
        return (
          <Fragment key={l}>
            {i > 0 && <span className="hidden text-xs text-gray-600 lg:block">/</span>}
            <Link
              href={`${
                l === "it"
                  ? resolveLink({ ...slugData, locale: "it" })
                  : resolveLink({ ...slugData, locale: "en" })
              }`}
              className={`${
                isActive ? "font-semibold" : ""
              } hidden lg:block mx-2 lg:mx hover:text-red  `}
            >
              {l}
            </Link>
            <Link
              href={`${
                l === "it"
                  ? resolveLink({ ...slugData, locale: "it" })
                  : resolveLink({ ...slugData, locale: "en" })
              }`}
              className={`${
                isActive ? "font-semibold" : ""
              } mx-2 lg:mx hover:text-red lg:hidden`}
            >
              {translate(l, l)}
            </Link>
          </Fragment>
        );
      })}
    </>
  );
}
