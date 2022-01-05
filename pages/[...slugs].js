import Link from 'next/link';

import { doQuery, getPaths } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import StructuredContent from 'components/MyStructuredContent';
import { resolveLinkById, camelCase } from 'lib/utils';
import Breadcrumbs from 'components/Breadcrumbs';
import HeroDetail from 'components/hero/HeroDetail';
import HeroEmpty from 'components/hero/HeroEmpty';
import HeroIndex from 'components/hero/HeroIndex';
import GalleryPreview from 'components/galleries/GalleryPreview';
import PreviewCard from 'components/cards/PreviewCard';

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

  console.log('list', list);

  const {
    layoutHero,
    titleHero,
    descriptionHero,
    imageHero,
    slideshowHero,
    isFestival,
    dateEvento,
    paymentSettings,
  } = payload;
  const heroData = {
    layoutHero,
    titleHero,
    descriptionHero,
    imageHero,
    slideshowHero,
    isFestival,
    dateEvento,
    paymentSettings,
  };

  let bgBreadcrumb;
  if (heroData.layoutHero == 'index') {
    bgBreadcrumb = 'gray';
  } else {
    bgBreadcrumb = null;
  }

  return (
    <Layout footer={footer} menu={menu} locale={locale} alts={pageInfo.urls}>
      <Seo
        tags={[...site.faviconMetaTags, ...payload.seo]}
        alt={pageInfo.urls}
      />
      <Breadcrumbs background={bgBreadcrumb} />
      {heroData.layoutHero == 'detail' ? (
        <HeroDetail data={heroData} />
      ) : heroData.layoutHero == 'index' ? (
        <HeroIndex data={heroData} />
      ) : (
        <HeroEmpty data={heroData} />
      )}

      <hr></hr>

      <h1>MAIN CONTENT</h1>
      {payload.content && (
        <StructuredContent locale={locale} content={payload.content} />
      )}

      <h1>SEZIONI PARAGRAFO TITOLO</h1>

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
      {isIndex && (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          {list.map((item) => (
            <PreviewCard locale={locale} data={item} key={item.id} />
          ))}
        </div>
      )}
      <hr />

      <div>
        {payload.relatedContents?.length > 0 && (
          <GalleryPreview slides={payload.relatedContents} locale={locale} />
        )}
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getPaths();
  // console.log('paths', paths.length);
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale, preview = false }) {
  const data = await doQuery(locale, params);
  return {
    props: { data, locale },
  };
}
export default Page;
