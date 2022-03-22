import { Fragment } from "react";
import Link from "next/link";

import config from "data/config.json";
import translate from "lib/locales";

function LanguageSwitcherLanding({ locale, alts }) {
  const { locales } = config.site;
  return (
    <>
      {locales &&
        locales.map((l, i) => {
          const isActive = locale === l;
          const link = alts?.find((alt) => alt.locale === l)?.value ?? "";
          {
            console.log("alts:", alts);
          }
          return (
            <Fragment key={l}>
              {i > 0 && (
                <span className="hover:text-red text-xs text-gray-600 lg:block">
                  /
                </span>
              )}
              <Link
                href={`https://presentiaccessibili.orienteoccidente.it/${
                  l == "en" ? "en" : ""
                }`}
                locale={l}
              >
                <a
                  className={`${
                    isActive ? "font-semibold" : ""
                  } hover:text-red lg:block`}
                >
                  {l}
                </a>
              </Link>
              {/* <Link href={`/${link}`} locale={l}>
                <a
                  className={`${
                    isActive ? "font-semibold" : ""
                  } hover:text-red mr-6 lg:hidden`}
                >
                  {translate(l, locale)}
                </a>
              </Link> */}
            </Fragment>
          );
        })}
    </>
  );
}

export default LanguageSwitcherLanding;
