import Header from './Header';
import Footer from './Footer';

function Layout({ children, menu, footer, locale }) {
  
  return (
    <>
      <Header locale={locale} data={menu} />
      <main>{children}</main>
      <Footer locale={locale} data={footer} />
    </>
  );
}

export default Layout;
