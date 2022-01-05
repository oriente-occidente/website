import { Fragment } from 'react';
import Link from 'next/link';

import config from 'data/config.json';

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
              {i > 0 && <span className="text-xs text-gray-600">/</span>}
              <Link href={`/${link}`} locale={l}>
                <a className={`${isActive ? 'active' : ''}`}>{l}</a>
              </Link>
            </Fragment>
          );
        })}
    </>
  );
}

export default LanguageSwitcher;
