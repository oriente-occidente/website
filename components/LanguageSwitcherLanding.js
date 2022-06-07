import { Fragment } from 'react';
import Link from 'next/link';

import { getLocales } from 'lib/utils';
import translate from 'lib/locales';

function LanguageSwitcherLanding({ locale, alts }) {
  const locales = getLocales();
  return (
    <>
      {locales &&
        locales.map((l, i) => {
          const isActive = locale === l;
          const link = alts?.find((alt) => alt.locale === l)?.value ?? '';
          return (
            <Fragment key={l}>
              {/* {i > 0 && (
                <span className="text-xs text-gray-600 hover:text-red lg:block">
                  /
                </span>
              )} */}
              <Link href={`/landing/${link}`} locale={l}>
                <a
                  className={`${
                    isActive ? 'hidden' : ''
                  } font-semibold hover:text-red`}
                >
                  {l}
                </a>
              </Link>
            </Fragment>
          );
        })}
    </>
  );
}

export default LanguageSwitcherLanding;
