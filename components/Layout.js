import Link from 'next/link';

import Header from './Header';
import Footer from './Footer';
import translate from 'lib/locales';

function Layout({
  children,
  menu,
  footer,
  locale,
  alts,
  hideNewsletter = false,
  landing = false,
}) {
  // console.log('menu', JSON.stringify(menu, null, 2));
  // console.log('footer', JSON.stringify(footer, null, 2));
  return (
    <>
      <div data-datocms-noindex>
        <a className="skip-link" href="#main-content">
          {translate('skipContent', locale)}
        </a>
        <a className="skip-link" href="#footer">
          {translate('skipFooter', locale)}
        </a>
      </div>
      {menu && <Header locale={locale} data={menu} alts={alts} />}

      <main className="min-h-[50vh] pt-[70px] md:pt-[80px] lg:pt-[110px]">
        {children}
      </main>
      {footer && (
        <Footer locale={locale} data={footer} hideNewsletter={hideNewsletter} />
      )}
    </>
  );
}

export default Layout;
