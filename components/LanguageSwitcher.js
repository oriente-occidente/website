import { Fragment } from 'react';
import Link from 'next/link';

import config from 'data/config.json';
import translate from 'lib/locales';


function LanguageSwitcher({ locale, alts }) {
  const { locales } = config.site;
  return (
    <>
      {locales &&
        locales.map((l, i) => {
          const isActive = locale === l;
          const link = alts?.find((alt) => alt.locale === l)?.url ?? '';
          return (
            <Fragment key={l}>
              {i > 0 && <span className="text-xs text-gray-600 hover:text-red hidden lg:block">/</span>}
              <Link href={`/${link}`} locale={l}>
                <a className={`${isActive ? 'font-semibold' : ''} hidden lg:block hover:text-red`}>{l}</a>
              </Link>
              <Link href={`/${link}`} locale={l}>
                <a className={`${isActive ? 'font-semibold' : ''} mr-6 lg:hidden hover:text-red`}>{translate(l, locale)}</a>
              </Link>
            </Fragment>
          );
        })}
    </>
  );
}

export default LanguageSwitcher;
