import Link from 'next/link';

import Layout from 'components/Layout';
import * as queries from 'lib/queries';
import fetchDato from 'lib/api/dato';

function Home({ pages, preview, locale }) {
  return (
    <Layout>
      <h1>h1</h1>
      <p>paragrafo</p>
      <h2>h2</h2>
      <p>paragrafo</p>
      <h3>h3</h3>
      <p>paragrafo</p>
      {pages?.map((item) => {
        const { id, slug, title, pic } = item;
        return (
          <div key={id} className="my-2">
            <Link href={`/${slug}`}>
              <a>
                <h3>
                  {title}- {slug}
                </h3>
              </a>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps({ preview = false, locale }) {
  // const reponse = await fetchDato(queries.pages, { locale }, preview);
  // const home = await fetchDato(queries.home, { locale }, preview);
  return {
    props: {
      pages: [],
      preview,
      locale,
    },
    revalidate: 30,
  };
}

export default Home;
