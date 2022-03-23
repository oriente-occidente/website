import { Fragment } from "react";
import Link from "next/link";

import config from "data/config.json";
import translate from "lib/locales";

function LanguageSwitcherLanding({ locale, alts }) {
  const { locales } = config.site;
  const itLanguage = {
    show: "en",
    href: "https://presentiaccessibili.orienteoccidente.it/en",
  };
  const enLanguage = {
    show: "it",
    href: "https://presentiaccessibili.orienteoccidente.it",
  };
  return (
    <>
      {locales &&
        locales.map((l, i) => {
          const isActive = locale === l;
          const link = alts?.find((alt) => alt.locale === l)?.value ?? "";
          return (
            <Fragment key={l}>
              {/* {i > 0 && (
                <span className="text-xs text-gray-600 hover:text-red lg:block">
                  /
                </span>
              )} */}
              <Link
                href={`${l == "it" ? itLanguage.href : enLanguage.href}`}
                locale={l}
              >
                <a
                  className={`${
                    isActive ? "font-semibold" : "hidden"
                  } hover:text-red`}
                >
                  {`${l == "it" ? itLanguage.show : enLanguage.show}`}
                </a>
              </Link>
            </Fragment>
          );
        })}
    </>
  );
}

export default LanguageSwitcherLanding;
