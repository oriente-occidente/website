"use client";
import Link from "next/link";
import { Fragment } from "react";
import translate from "@/lib/locales";

import config from "@/data/config";

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const { locales } = config;
  // const url = `/api/set-locale?lang=`;
  return (
    <>
      {locales.map((l, i) => {
        const isActive = currentLocale === l;
        return (
          <Fragment key={l}>
            {i > 0 && (
              <span className="hidden text-xs text-gray-600  lg:block">/</span>
            )}
            <Link
              href={`${l === "it" ? "/" : "/en"}`}
              className={`${
                isActive ? "font-semibold" : ""
              } hidden lg:block mx-2 lg:mx hover:text-red  `}
            >
              {l}
            </Link>
            <Link
              href={`${l === "it" ? "/" : "/en"}`}
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
