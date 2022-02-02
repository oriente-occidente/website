import Link from 'next/link';
import { Fragment } from 'react';
import dynamic from 'next/dynamic';

import translate from 'lib/locales';
import * as queries from 'lib/queries';
import fetchDato from 'lib/api/dato';
import { resolveLinkById } from 'lib/utils';

import Layout from 'components/Layout';
import Seo from 'components/Seo';

// import HeroSlider from 'components/hero/HeroSlider';
// import GalleryPreview from 'components/galleries/GalleryPreview';
// import GalleryHome from 'components/galleries/GalleryHome';

let GalleryHome = dynamic(() => import('components/galleries/GalleryHome'), {
  loading: () => <div>...</div>,
  ssr: false,
});

let GalleryPreview = dynamic(
  () => import('components/galleries/GalleryPreview'),
  {
    loading: () => <div />,
    ssr: false,
  }
);

let HeroSlider = dynamic(() => import('components/hero/HeroSlider'), {
  loading: () => <div />,
  ssr: false,
});

function Home({ data, locale, home }) {
  const { homeSlideshow, homeSections, seo } = home;
  const { site, footer, menu } = data;
  return (
    <Layout footer={footer} menu={menu} locale={locale}>
      <Seo tags={[...site.faviconMetaTags, ...seo]} />
      <h1 className="sr-only">Oriente Occidente</h1>
      <HeroSlider slides={homeSlideshow} />

      {homeSections.map((block) => {
        // console.log('block:', block);
        return (
          <Fragment key={block.id}>
            <div
              className="container flex justify-between items-center border-t border-gray"
              key={block.id}
            >
              <h2 className="py-8 lg:py-16 title--small">{block.title}</h2>
              <Link
                href={resolveLinkById(block.sectionLink.id, locale)}
                locale={locale}
              >
                <a className="button--with-arrow">{block.sectionLinkLabel}</a>
              </Link>
            </div>
            {block.layout == 'Mission' ? (
              <div className="bg-gray">
                <div className="container py-8 lg:pb-12 lg:pt-16 title--small">
                  {translate('discoverActivities', locale)}
                </div>
              </div>
            ) : null}
            <div>
              {block.layout == 'PrimoPiano' ? (
                <GalleryPreview slides={block.slides} locale={locale} />
              ) : (
                <GalleryHome
                  slides={block.slides}
                  background={'gray'}
                  locale={locale}
                />
              )}
            </div>
          </Fragment>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps({ preview = false, locale }) {
  const response = await fetchDato(queries.getHomepage, { locale }, preview);
  const data = await fetchDato(queries.site, { locale }, preview);
  return {
    props: {
      locale,
      data,
      home: response.home,
    },
    // revalidate: 30,
  };
}

export default Home;
