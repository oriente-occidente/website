import Link from "next/link";

import Header from "./Header";
import Footer from "./Footer";
import translate from "lib/locales";

function Layout({
  children,
  menu,
  footer,
  locale,
  alts,
  hideNewsletter = false,
}) {
  return (
    <>
      <div data-datocms-noindex>
        <Link href="#content">
          <a className="skip-link">{translate("skipContent", locale)}</a>
        </Link>
        <Link href="#footer">
          <a className="skip-link">{translate("skipFooter", locale)}</a>
        </Link>
      </div>
      <Header locale={locale} data={menu} alts={alts} />
      <main
        id="content"
        className="min-h-[50vh] pt-[70px] md:pt-[80px] lg:pt-[110px]"
      >
        {children}
      </main>
      <Footer locale={locale} data={footer} hideNewsletter={hideNewsletter} />
    </>
  );
}

export default Layout;
