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
            <>
              {i > 0 && <span className="text-xs text-gray-600">/</span>}
              <Link href={`/${link}`} key={`${l}`} locale={l}>
                <a className={`${isActive ? 'active' : ''}`}>{l}</a>
              </Link>
            </>
          );
        })}
    </>
  );
}

export default LanguageSwitcher;
