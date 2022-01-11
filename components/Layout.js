import Header from './Header';
import Footer from './Footer';
import Newsletter from './Newsletter';

function Layout({ children, menu, footer, locale, alts }) {
  return (
    <>
      <Header locale={locale} data={menu} alts={alts} />
      <main>{children}</main>
      <Newsletter locale={locale} />
      <Footer locale={locale} data={footer} />
    </>
  );
}

export default Layout;
