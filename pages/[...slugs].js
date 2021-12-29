import Link from 'next/link';

import { doQuery, getPaths } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import StructuredContent from 'components/MyStructuredContent';
import { resolveLinkById, camelCase } from 'lib/utils';
import Breadcrumbs from 'components/Breadcrumbs';

function Print({ title, data }) {
  return (
    <div>
      <h1>{title}</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <hr />
    </div>
  );
}

function Page({ data, locale }) {
  const { pageInfo, site, menu, footer, ...rest } = data;

  const { __typename: pageType } = pageInfo;
  const payload = rest[pageType];
  const isPage = pageType === 'page';
  const isIndex = isPage && payload.isIndex;
  const indexType = isIndex && payload.indexType;

  const list = isIndex && indexType ? rest[camelCase(indexType)] : [];

  const {
    layoutHero,
    titleHero,
    descriptionHero,
    imageHero,
    slideshowHero,
  } = payload;
  const heroData = {
    layoutHero,
    titleHero,
    descriptionHero,
    imageHero,
    slideshowHero,
  };

  return (
    <Layout footer={footer} menu={menu} locale={locale}>
      <Seo
        tags={[...site.faviconMetaTags, ...payload.seo]}
        alt={pageInfo.urls}
      />
      <Breadcrumbs/>
      <div>{payload?.title}</div>
      <div>
        <Print title={'HERO'} data={heroData} />
      </div>
      {isIndex && (
        <div>
          <Print title="RENDER LIST of" data={camelCase(indexType)} />
          <Print title="list" data={list} />
        </div>
      )}
      {payload.content && (
        <StructuredContent locale={locale} content={payload.content} />
      )}
      {payload.sections?.map((section) => {
        const { id, title, body } = section;
        return (
          <div key={id}>
            <h1>{title}</h1>
            <StructuredContent locale={locale} content={body} />
          </div>
        );
      })}
      <hr />
      <div>
        <h1>LINKS</h1>
        <ul className="px-10">
          {payload.relatedContents?.map((related) => {
            return (
              <li key={related.id}>
                <Link
                  href={`${resolveLinkById(related.id, locale)}`}
                  locale={locale}
                >
                  <a>{related.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <hr />
        <Print title={'Related Contents'} data={payload.relatedContents} />
      </div>
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
