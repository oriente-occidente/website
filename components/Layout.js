import Link from 'next/link';
import { useRouter } from 'next/router';

import Nav from './Nav';
import Footer from './Footer';
import translate from 'lib/locales';

function Layout({ children }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className="h-full">
      <header>
        <Nav />
      </header>
      <main className="h-full">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
