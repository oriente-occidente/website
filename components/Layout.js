import Header from './Header';
import Footer from './Footer';

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
      <Header locale={locale} data={menu} alts={alts} />
        <main className="pt-[70px] md:pt-[80px] lg:pt-[110px] min-h-[50vh]">{children}</main>
      <Footer locale={locale} data={footer} hideNewsletter={hideNewsletter} />
    </>
  );
}

export default Layout;
