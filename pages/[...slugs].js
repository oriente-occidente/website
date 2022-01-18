// import { useState } from 'react';
import Script from 'next/script';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
import Partners from 'components/Partners';
import Team from 'components/Team';
// import EventForm from 'components/forms/EventForm';
// import Modal from 'components/Modal';
// import { useAppContext } from 'lib/ctx';

function Page({ data, locale }) {
  const { pageInfo, site, menu, footer, ...rest } = data;
  // const { state, dispatch } = useAppContext();
  const router = useRouter();

  const handleRegistration = (value) => {
    // dispatch({ type: 'SET_EVENT', value });
    router.push(`/forms/register?id=${value}`);
  };

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

  console.dir(payload);

  let bgBreadcrumb;
  if (heroData.layoutHero == 'index') {
    bgBreadcrumb = 'gray';
  } else {
    bgBreadcrumb = null;
  }

  const isBookable = paymentSettings?.reduce(
    (result, p) => result || p.bookable,
    false
  );

  const today = dayjs(new Date());
  const isFuture = paymentSettings?.reduce((result, p) => {
    const start = dayjs(p.startDate);
    return result || today.isBefore(start);
  }, false);
  const showBookButton = isBookable && isFuture;
  // const [showDialog, setShowDialog] = useState(false);

  function getStructuredContent(c) {
    return c &&
      (c.value ||
        (c.links && c.links.length > 0) ||
        (c.blocks && c.links.blocks > 0))
      ? c
      : null;
  }

  const content = getStructuredContent(payload.content);
  const sections = payload.sections?.filter(
    (s) => getStructuredContent(s.body) !== null
  );
  const otherSections = payload.otherSections;

  // console.log('paymentSettings', paymentSettings);
  // console.log('isBookable', isBookable);
  // console.log('isFuture', isFuture);
  //forms/${pageInfo.id}

  return (
    <>
      <Seo
        tags={[...site.faviconMetaTags, ...payload.seo]}
        alt={pageInfo.urls}
      />
      <Layout footer={footer} menu={menu} locale={locale} alts={pageInfo.urls}>
        <Breadcrumbs background={bgBreadcrumb} />
        {heroData.layoutHero == 'detail' && imageHero ? (
          <HeroDetail data={heroData} />
        ) : heroData.layoutHero == 'index' && imageHero ? (
          <HeroIndex data={heroData} />
        ) : (
          <HeroEmpty data={heroData} />
        )}

        {content && (
          <div className="md:grid md:grid-cols-4 md:gap-4 md:container md:mx-auto">
            <div className="md:col-span-3 md:border-l md:col-start-2 border-color-gray">
              <div className="px-4 md:px-12 md:py-8">
                <StructuredContent locale={locale} content={content} />
              </div>
            </div>
          </div>
        )}

        {sections && (
          <div className="md:grid md:grid-cols-4 md:gap-4 md:container md:mx-auto">
            <div className="px-4 hidden md:block">
              <div className="sticky top-0 py-2">
                {sections.map((section) => (
                  <div key={section.id}>
                    <Link href={`#${section.id}`}>
                      <a className="" title={`Link to ${section.title}`}>
                        <h2 className="uppercase text-xxs tracking-wider mb-1">
                          {section.title}
                        </h2>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 md:border-l border-color-gray">
              {payload.sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="px-4 md:py-2 md:px-12"
                >
                  <StructuredContent locale={locale} content={section.body} />
                </div>
              ))}
            </div>
          </div>
        )}

        {otherSections && (
          <div className="md:grid md:grid-cols-4 md:gap-4 md:container md:mx-auto">
            <div className="md:col-span-3 md:border-l md:col-start-2 border-color-gray">
              <div className="px-4 md:px-12">
                <div className="flex flex-wrap items-center	py-2 lg:py-10 2xl:py-16">
                  {otherSections.map((section) => (
                    <>
                      {section.__typename == 'PartnerRecord' ? (
                        <>
                          <Partners locale={locale} data={section} />
                        </>
                      ) : (
                        <>
                          <Team locale={locale} data={section} />
                        </>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {isIndex && !showFilters && <ResultsGrid list={list} locale={locale} />}
        {isIndex && showFilters && <Filters list={list} locale={locale} />}

        {payload.relatedContents?.length > 0 && (
          <div className="mt-20">
            <GalleryPreview slides={payload.relatedContents} locale={locale} />
          </div>
        )}
        {showBookButton && (
          <div className="container">
            <button
              className="w-48 bg-white text-gray-700 font-semibold hover:text-black py-2 px-4 border border-gray-700 hover:border-black"
              onClick={() => handleRegistration(pageInfo.id)}
            >
              REGISTRATI
            </button>
          </div>
        )}

        {!isIndex && (
          <>
            <div className="addthis_inline_share_toolbox_ipet" />
            <Script
              strategy="afterInteractive"
              src={`//s7.addthis.com/js/300/addthis_widget.js#pubid=${process.env.NEXT_PUBLIC_ADDTHIS}`}
            />
          </>
        )}
      </Layout>
      {/* <Modal
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
      </Modal> */}
    </>
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
    props: { data, locale, params },
  };
}
export default Page;
