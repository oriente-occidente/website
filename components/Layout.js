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
      <Nav />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
