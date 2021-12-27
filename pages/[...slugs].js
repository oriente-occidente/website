import Link from 'next/link';

import { doQuery, getPaths } from 'lib/api';
import Layout from 'components/Layout';
// import MyStructuredContent from 'components/MyStructuredContent';
import SEO from 'components/Seo';

function Page({ data, locale }) {
  console.dir(data);
  const { pageInfo } = data;

  return (
    <Layout>
      <div></div>
      <h1>data</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getPaths();
  console.log('paths', paths.length);
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale, preview = false }) {
  const data = await doQuery(locale, params);
  return {
    props: { data, locale },
  };
}
export default Page;
