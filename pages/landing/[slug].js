import * as q from 'lib/queries';
import fetchData from 'lib/api/dato';
import { doQueryById } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import HeroDetail from 'components/hero/HeroDetail';
import HeroEmpty from 'components/hero/HeroEmpty';
import HeroIndex from 'components/hero/HeroIndex';
import GalleryPreview from 'components/galleries/GalleryPreview';
import MainContent from 'components/contents/MainContent';
import SectionsParagraphs from 'components/contents/SectionsParagraphs';
import OtherSections from 'components/contents/OtherSections';
import HeaderLanding from 'components/HeaderLanding';
import FooterLanding from 'components/FooterLanding';
function LandingPage({ data, payload, locale }) {
  const { site = null, footer } = data;
  const {
    layoutHero,
    titleHero,
    descriptionHero,
    imageHero,
    slideshowHero,
    id,
  } = payload;
  const heroData = {
    layoutHero,
    titleHero,
    descriptionHero,
    imageHero,
    slideshowHero,
    locale,
  };
  return (
    <Layout locale={locale}>
      {site && <Seo tags={site?.faviconMetaTags} />}
      <HeaderLanding locale={locale} alts={[]} />
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
      {payload.relatedContents?.length > 0 && (
        <div className="mt-20">
          <GalleryPreview slides={payload.relatedContents} locale={locale} />
        </div>
      )}
      <FooterLanding locale={locale} data={footer} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const items = await fetchData(q.landings);
  console.log('ITEMS', items);
  const paths = items.landings.reduce((both, landing) => {
    const slugs = landing.slugs.map((item) => {
      return { params: { slug: item.slug }, locale: item.locale };
    });
    return [...both, ...slugs];
  }, []);
  console.log('PATHS', paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale, preview = false }) {
  const { slug } = params;
  console.log(params);
  // const data = await doQueryById(locale);
  const landingData = await fetchData(q.landing, { locale, slug }, preview);
  const { landing: payload } = landingData;
  const data = await doQueryById(locale);
  return {
    props: { data, locale, payload },
  };
}
export default LandingPage;
