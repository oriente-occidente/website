import Link from "next/link";
import LanguageSwitcherLanding from "components/LanguageSwitcherLanding";

function HeaderLanding(props) {
  const { locale, alts } = props;

  return (
    <header className="absolute inset-x-0 top-0 z-40 h-[70px] border-b bg-white/80 md:h-[80px] lg:h-[110px]">
      <div className="container flex h-full items-center justify-between py-2 sm:px-6 lg:justify-start lg:space-x-10 lg:py-3">
        <div>
          <Link href="https://orienteoccidente.it">
            <a title="Open in new page" target="_blank" className="flex">
              <span className="sr-only">Oriente Occidente</span>
              <img
                className="h-10 w-auto object-contain sm:h-12 lg:h-16"
                src="/new-logo.svg"
                alt="Oriente Occidente"
              />
            </a>
          </Link>
        </div>
        <div className="lg:flex lg:flex-1 lg:items-center lg:justify-end">
          <div className="text-xxs text-black-light hover:text-red ml-14 pt-1 font-semibold uppercase tracking-widest lg:flex">
            <LanguageSwitcherLanding locale={locale} alts={alts} />
          </div>
        </div>
      </div>
    </header>
  );
}
export default HeaderLanding;
