import Link from 'next/link';

import translate from "lib/locales"
import Layout from 'components/Layout';
import * as queries from 'lib/queries';
import fetchDato from 'lib/api/dato';
import routes from 'data/routes.json';
import HeroSlider from "components/hero/HeroSlider";
import GalleryPreview from "components/galleries/GalleryPreview";
import GalleryHome from "components/galleries/GalleryHome";

function Home({ routes, data, locale, home }) {
  const { homeSlideshow, homeSections } = home;
  const { site, footer, menu } = data;
  return (
    <Layout footer={footer} menu={menu} locale={locale}>
      <h1 className="sr-only">Oriente Occidente</h1>
      <HeroSlider slides={homeSlideshow} />

      {homeSections.map((block) => {
        const { sectionLinkLabel, sectionLink, slides, id, title, layout } = block;
        return (
          <>
            <div
              className="container flex justify-between items-center border-t border-gray"
              key={id}
            >
              <h2 className="py-8 lg:py-16 title--small">
                {title}
              </h2>
              <Link href={sectionLink.slug} key={sectionLink.slug}>
                <a className="button--with-arrow">{sectionLinkLabel}</a>
              </Link>
            </div>
            {
              layout == 'Mission' ?
                <div className="bg-gray">
                  <div className="container py-8 lg:pb-12 lg:pt-16 title--small">
                    {translate('discoverActivities', locale)}
                  </div>
                </div>
              : null
            }
            <div>
              {
                layout == 'PrimoPiano' ?
                  <GalleryPreview slides={slides}/>
                :
                  <GalleryHome slides={slides} background={"gray"} locale={locale}/>
              }
            </div>
          </>
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
    revalidate: 30,
  };
}

export default Home;
