import Link from 'next/link';

import translate from "lib/locales"
import Layout from 'components/Layout';
import * as queries from 'lib/queries';
import fetchDato from 'lib/api/dato';
import routes from 'data/routes.json';
import HeroSlider from "components/HeroSlider";
import GalleryPreview from "components/galleries/GalleryPreview";
import GalleryHome from "components/galleries/GalleryHome";

function Home({ routes, data, locale, home }) {
  const { homeSlideshow, homeSections } = home;
  const { site, footer, menu } = data;
  return (
    <Layout footer={footer} menu={menu} locale={locale}>
      <HeroSlider slides={homeSlideshow} />

      {homeSections.map((block) => {
        const { sectionLinkLabel, sectionLink, slides, id, title, layout } = block;
        return (
          <>
            <div
              className="container flex justify-between items-center"
              key={id}
            >
              <h2 className="uppercase py-8 lg:py-12 text-xxs md:text-sm lg:text-base md:tracking-wide">
                {title}
              </h2>
              <Link href={sectionLink.slug} key={sectionLink.slug}>
                <a className="button--with-arrow">{sectionLinkLabel}</a>
              </Link>
            </div>
            {
              layout == 'Mission' ?
                <div className="bg-gray container uppercase py-8 lg:py-12 text-xxs md:text-sm lg:text-base md:tracking-wide">
                  {translate('discoverActivities', locale)}
                </div>
              : null
            }
            <div>
              {
                layout == 'PrimoPiano' ?
                  <GalleryPreview slides={slides}/>
                :
                  <GalleryHome slides={slides} background={"gray"}/>
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
