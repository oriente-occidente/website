"use client";
import Link from "next/link";
import { Fragment } from "react";

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
            <div>
              <Link
                href={`${l === "it" ? "/" : "/en"}`}
                className={`${
                  isActive ? "font-semibold" : ""
                } mx-2 lg:mx hover:text-red  `}
              >
                {l}
              </Link>
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
