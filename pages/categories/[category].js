import Layout from 'components/Layout';

const categories = ['vini', 'liquori'];

function Page({ params }) {
  return (
    <Layout>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = categories.map((category) => ({
    params: { category },
    locale: 'en',
  }));
  // console.log('paths', paths);
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params, locale }) {
  return {
    props: {
      params,
      locale,
    },
  };
}
export default Page;
