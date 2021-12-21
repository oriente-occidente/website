import Link from 'next/link';
import { Image } from 'react-datocms';
import _ from 'lodash';

import fetchDato from 'lib/api/dato';
import * as queries from 'lib/queries';
import Layout from 'components/Layout';
// import MyStructuredContent from 'components/MyStructuredContent';
// import SEO from 'components/Seo';

import routes from 'data/routes.json';
import { listStyleType } from 'tailwindcss/defaultTheme';

function Page({ page, preview, routes, locale }) {
  return (
    <Layout>
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
      <pre>{JSON.stringify(page, null, 2)}</pre>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = routes.reduce((all, r) => {
    const routePaths = r.paths.map((p) => {
      const { slugs, locale } = p;
      return { params: { slugs }, locale };
    });
    return [...all, ...routePaths];
  }, []);

  console.log('paths', paths.length);
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale, preview = false }) {
  const { slugs } = params;
  const slug = slugs.join('/');
  console.log(slug);

  const list = routes.map((r) => {
    const { id, slugs } = r;
    return { id, slug: slugs[locale].join('/') };
  });
  console.log('list', list);

  const match = list.find((l) => l.slug === slug);
  const pageInfo = routes.find((r) => r.id === match.id);
  console.log('pageInfo', pageInfo);

  // const reponse = await fetchDato(queries.page, { slug, locale }, preview);
  // const page = reponse?.page;

  return {
    props: {
      page: pageInfo ? pageInfo : null,
      preview,
      routes,
      locale,
    },
  };
}
export default Page;
