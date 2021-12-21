import Link from 'next/link';

import Layout from 'components/Layout';
import * as queries from 'lib/queries';
import fetchDato from 'lib/api/dato';
import routes from 'data/routes.json';

function Home({ routes, preview, locale }) {
  return (
    <Layout>
      <h1>h1</h1>
      <p>paragrafo</p>
      <h2>h2</h2>
      <p>paragrafo</p>
      <h3>h3</h3>
      <p>paragrafo</p>
      <div>
        <ul>
          {routes.map((r) => {
            const data = r.urls.find((u) => u.locale === locale);
            const { url } = data;
            return (
              <li key={url}>
                <Link href={url} locale={locale}>
                  <a>
                    {url} - {r.id}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false, locale }) {
  // const home = await fetchDato(queries.home, { locale }, preview);
  return {
    props: {
      preview,
      locale,
      routes,
    },
    revalidate: 30,
  };
}

export default Home;
