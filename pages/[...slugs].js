import { useState } from 'react';
import Script from 'next/script';

import { doQuery, getPaths } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import StructuredContent from 'components/MyStructuredContent';
import { camelCase } from 'lib/utils';
import Breadcrumbs from 'components/Breadcrumbs';
import HeroDetail from 'components/hero/HeroDetail';
import HeroEmpty from 'components/hero/HeroEmpty';
import HeroIndex from 'components/hero/HeroIndex';
import GalleryPreview from 'components/galleries/GalleryPreview';
import ResultsGrid from 'components/ResultsGrid';
import Filters from 'components/Filters';
import Modal from 'components/Modal';
import EventForm from 'components/forms/EventForm';

function Page({ data, locale }) {
  const { pageInfo, site, menu, footer, ...rest } = data;

  const { __typename: pageType } = pageInfo;
  const payload = rest[pageType];
  const isPage = pageType === 'page';
  const isIndex = isPage && payload.isIndex;
  const indexType = isIndex && payload.indexType;
  const list = isIndex && indexType ? rest[camelCase(indexType)] : [];
  const showFilters = indexType === 'festival-events';

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

  const [showDialog, setShowDialog] = useState(false);

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

      {isIndex && !showFilters && <ResultsGrid list={list} locale={locale} />}
      {isIndex && showFilters && <Filters list={list} locale={locale} />}
      {!isIndex && (
        <>
          <div className="addthis_inline_share_toolbox_ipet" />
          <Script
            strategy="afterInteractive"
            src={`//s7.addthis.com/js/300/addthis_widget.js#pubid=${process.env.NEXT_PUBLIC_ADDTHIS}`}
          />
        </>
      )}
      {payload.relatedContents?.length > 0 && (
        <div className="mt-20">
          <GalleryPreview slides={payload.relatedContents} locale={locale} />
        </div>
      )}

      <button className="button" onClick={() => setShowDialog(true)}>
        REGISTRATI
      </button>
      <Modal
        title="Contact Form"
        description="Fill the form to get in touch with us"
        open={showDialog}
        onClose={() => setShowDialog(false)}
      >
        <EventForm />
      </Modal>
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
