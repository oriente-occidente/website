// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import translate from 'lib/locales';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, menu, footer, locale }) {
  // const router = useRouter();
  // const { locale } = router;
  return (
    <>
      <Header locale={locale} data={menu} />
      <main>{children}</main>
      <Footer locale={locale} data={footer} />
    </>
  );
}

export default Layout;
