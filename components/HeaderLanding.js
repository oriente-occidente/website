import Link from 'next/link';
import LanguageSwitcher from 'components/LanguageSwitcher';

function HeaderLanding(props) {
  const { locale, alts } = props;

  return (
    <header>
      <div className="inset-x-0 z-40 h-[70px] bg-white/80 md:h-[80px] lg:h-[110px]">
        <>
          <div className="container flex h-full items-center justify-between py-2 sm:px-6 lg:justify-start lg:space-x-10 lg:py-3">
            <div>
              <Link locale={locale} href="/" passHref>
                <a href="#" className="flex">
                  <span className="sr-only">Oriente Occidente</span>
                  <img
                    className="h-10 w-auto object-contain sm:h-12 lg:h-16"
                    src="/logo.svg"
                    alt="Oriente Occidente"
                  />
                </a>
              </Link>
            </div>
            <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end">
              <div className="ml-14 pt-1 text-xxs font-semibold uppercase tracking-widest text-black-light hover:text-red lg:flex">
                <LanguageSwitcher locale={locale} alts={alts} />
              </div>
            </div>
          </div>
        </>
      </div>
    </header>
  );
}
export default HeaderLanding;
