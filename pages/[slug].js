import Link from 'next/link';
import { Image } from 'react-datocms';

import fetchDato from 'lib/api/dato';
import * as queries from 'lib/queries';
import Layout from 'components/Layout';
import MyStructuredContent from 'components/MyStructuredContent';
import SEO from 'components/Seo';

function Page({ page, preview }) {
  return (
    <Layout>
      <SEO tags={page?.seo} />
      page
    </Layout>
  );
}
// export async function getStaticPaths() {
//   const response = await fetchDato(queries.allPages);
//   const pages = response.pages.reduce((all, page) => {
//     const { slugs } = page;
//     return [...all, ...slugs];
//   }, []);
//   const paths = pages.map(({ slug, locale }) => ({
//     params: { slug },
//     locale,
//   }));
//   // console.log('paths', paths);
//   return { paths, fallback: 'blocking' };
// }

// export async function getStaticProps({ params, locale, preview = false }) {
//   const { slug } = params;

//   const reponse = await fetchDato(queries.page, { slug, locale }, preview);
//   const page = reponse?.page;

//   return {
//     props: {
//       page,
//       preview,
//     },
//   };
// }
export default Page;
