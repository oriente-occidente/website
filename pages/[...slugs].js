import Link from 'next/link';

import { doQuery, getPaths } from 'lib/api';
import Layout from 'components/Layout';
// import MyStructuredContent from 'components/MyStructuredContent';
// import SEO from 'components/Seo';

function Page({ page, preview, routes, locale }) {
  return (
    <Layout>
      <div>
        <ul>
          {routes?.map((r) => {
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
      <pre>{JSON.stringify(page, null, 2)}</pre>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getPaths();
  console.log('paths', paths.length);
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale, preview = false }) {
  console.log('locale', locale);
  console.log('params', params);
  
  // const { slugs } = params;
  // const slug = slugs.join('/');
  // console.log(slug);

  // const list = routes.map((r) => {
  //   const { id, slugs } = r;
  //   return { id, slug: slugs[locale].join('/') };
  // });
  // console.log('list', list);

  // const match = list.find((l) => l.slug === slug);
  // const pageInfo = routes.find((r) => r.id === match.id);
  // console.log('pageInfo', pageInfo);

  const { id, type, pageInfo, data } = doQuery(locale, params);
  console.log(data);

  return {
    props: {
      page: pageInfo ? pageInfo : null,
      preview,
      data,
      locale,
    },
  };
}
export default Page;
