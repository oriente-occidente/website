import Link from 'next/link';
import { Fragment } from 'react';

import translate from 'lib/locales';
import * as queries from 'lib/queries';
import fetchData from 'lib/fetchData';
import { resolveLinkById } from 'lib/utils';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import HeroSlider from 'components/hero/HeroSlider';
import GalleryPreview from 'components/galleries/GalleryPreview';
import GalleryHome from 'components/galleries/GalleryHome';

function Home({ data, locale, home }) {
  if (!data || !home) return null;
  const { homeSlideshow, homeSections, seo } = home;
  const { site, footer, menu } = data;
  return (
    <Layout footer={footer} menu={menu} locale={locale}>
      <Seo tags={[...site.faviconMetaTags, ...seo]} />
      <h1 className="sr-only">Oriente Occidente</h1>
      <HeroSlider slides={homeSlideshow} />
      {homeSections.map((block) => {
        return (
          <Fragment key={block.id}>
            <div
              className="border-gray container flex items-center justify-between border-t"
              key={block.id}
            >
              <h2 className="title--small py-8 lg:py-16">{block.title}</h2>
              <Link
                href={resolveLinkById(block.sectionLink.id, locale)}
                locale={locale}
              >
                <a className="button--with-arrow">{block.sectionLinkLabel}</a>
              </Link>
            </div>
            {block.layout == 'Mission' ? (
              <div className="bg-gray">
                <div className="title--small container py-8 lg:pb-12 lg:pt-16">
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
  const response = await fetchData(queries.getHomepage, { locale }, preview);
  const data = await fetchData(queries.site, { locale }, preview);
  return {
    props: {
      locale,
      data,
      home: response.home,
    },
  };
}

export default Home;
