import Link from 'next/link';

import Layout from 'components/Layout';
import * as queries from 'lib/queries';
import fetchDato from 'lib/api/dato';
import routes from 'data/routes.json';
import HeroSlider from "components/HeroSlider";
import GalleryPreview from "components/GalleryPreview";

function Home({ routes, preview, locale, home }) {
  const { homeSlideshow, homeSections } = home;
  return (
    <Layout>
      {/* {homeSlideshow.map((block) => {
        const { title } = block;
        return (
          <h1>{title}</h1>
        )
      })} */}
      {/* <h1>h1</h1>
      <p>paragrafo</p>
      <h2>h2</h2>
      <p>paragrafo</p>
      <h3>h3</h3>
      <p>paragrafo</p>
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
      </div> */}

      <HeroSlider slides={homeSlideshow} />

      {homeSections.map((block) => {
        const { sectionLinkLabel, sectionLink, slides, id, title } = block;
        return (
          <>
            <div className="container flex justify-between items-center" key={id}>
              <h2 className="uppercase py-8 lg:py-12 text-xxs md:text-sm lg:text-base md:tracking-wide">{title}</h2>
              <Link href={sectionLink.slug} key={sectionLink.slug}>
                <a className="button--with-arrow">
                  {sectionLinkLabel}
                </a>
              </Link>
            </div>
            <div>
              <GalleryPreview slides={slides}/>
            </div>
          </>
        );
      })}

    </Layout>
  );
}

export async function getStaticProps({ preview = false, locale }) {
  const response = await fetchDato(queries.getHomepage, { locale }, preview);
  return {
    props: {
      preview,
      locale,
      routes,
      home: response.home
    },
    revalidate: 30,
  };
}

export default Home;
