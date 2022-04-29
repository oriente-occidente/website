// import { useState } from 'react';

import dynamic from 'next/dynamic';

import { doQuery /*, getPaths */, queryRoutesByParams } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import { camelCase, getBreadcrumbs } from 'lib/utils';
import Breadcrumbs from 'components/Breadcrumbs';
import HeroDetail from 'components/hero/HeroDetail';
import HeroEmpty from 'components/hero/HeroEmpty';
import HeroIndex from 'components/hero/HeroIndex';
import GalleryPreview from 'components/galleries/GalleryPreview';
import ResultsGrid from 'components/ResultsGrid';
import Filters from 'components/Filters';

// import Modal from 'components/Modal';
import MainContent from 'components/contents/MainContent';
import SectionsParagraphs from 'components/contents/SectionsParagraphs';
import OtherSections from 'components/contents/OtherSections';

// import ShareButtons from 'components/ShareButtons';

function Page({ data, locale }) {
  const { pageInfo, site, menu, footer, ...rest } = data;
  const pluk = (data) => {
    const { festivalEvents, otherEvents, courses, workshops } = data;
    return { festivalEvents, otherEvents, courses, workshops };
  };
  const { __typename: pageType } = pageInfo;
  const payload = rest[pageType];
  const isPage = pageType === 'page';
  const isIndex = isPage && payload.isIndex;
  const indexType = isIndex && payload.indexType;
  const showFilters = indexType === 'festival-events';
  const list =
    isIndex && indexType
      ? showFilters
        ? pluk(rest, 'festivalEvents, otherEvents, courses, workshops')
        : rest[camelCase(indexType)]
      : [];
  const group = indexType ? indexType : null;

  const {
    layoutHero,
    titleHero,
    descriptionHero,
    imageHero,
    slideshowHero,
    isFestival,
    authors,
    dates: dateEvento,
    location,
    paymentSettings,
  } = payload;

  const heroData = {
    layoutHero,
    titleHero,
    descriptionHero,
    imageHero,
    authors,
    location,
    slideshowHero,
    isFestival,
    dateEvento,
    paymentSettings,
    pageId: pageInfo.id,
    locale,
  };

  const ShareButtons = !isIndex
    ? dynamic(() => import('components/ShareButtons'), { ssr: false })
    : null;

  return (
    <>
      <Seo
        tags={[...site.faviconMetaTags, ...payload.seo]}
        alt={pageInfo.urls}
      />
      <Layout footer={footer} menu={menu} locale={locale} alts={pageInfo.urls}>
        <Breadcrumbs
          id="#main-content"
          background={heroData.layoutHero == 'index' ? 'gray' : null}
          paths={getBreadcrumbs(pageInfo.slugs[locale], payload.slug, locale)}
          locale={locale}
        />
        {heroData.layoutHero == 'detail' && imageHero ? (
          <HeroDetail data={heroData} />
        ) : heroData.layoutHero == 'index' && imageHero ? (
          <HeroIndex data={heroData} />
        ) : (
          <HeroEmpty data={heroData} />
        )}

        {payload?.content && (
          <MainContent locale={locale} data={payload.content} />
        )}
        {payload?.sections && payload.sections.length > 0 && (
          <SectionsParagraphs lcoale={locale} sections={payload.sections} />
        )}
        {payload?.otherSections && payload.otherSections.length > 0 && (
          <OtherSections locale={locale} data={payload.otherSections} />
        )}
        {isIndex && !showFilters && (
          <ResultsGrid list={list} group={group} locale={locale} />
        )}
        {isIndex && showFilters && (
          <Filters
            list={list}
            locale={locale}
            datesOfYear={rest?.festivalDates?.datesOfYear.filter(
              (d) => d.active
            )}
          />
        )}
        {payload.relatedContents?.length > 0 && (
          <div className="mt-20 mb-6">
            <GalleryPreview slides={payload.relatedContents} locale={locale} />
          </div>
        )}
        {!isIndex && <ShareButtons />}
      </Layout>

      {/*
      <Modal
        title="Contact Form"
        description="Fill the form to get in touch with us"
        open={showDialog}
        onClose={() => setShowDialog(false)}
      >
        <EventForm
          locale={locale}
          paymentSettings={paymentSettings}
          title={titleHero || payload.title}
        />
      </Modal>
      */}
    </>
  );
}
export async function getStaticPaths() {
  const paths = []; //getPaths();
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params, locale, preview = false }) {
  console.log('PARAMS', params);
  const routes = queryRoutesByParams(params, locale, preview);
  const data = await doQuery(routes, locale, params, preview);
  return {
    props: { data, locale, params },
  };
}
export default Page;
