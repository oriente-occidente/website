import { doQueryById, getFormPaths } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

import EventForm from 'components/forms/EventForm';

function Page({ data, locale }) {
  const { pageInfo, site, menu, footer, ...rest } = data;

  const { __typename: pageType } = pageInfo;
  const payload = rest[pageType];
  const { titleHero, paymentSettings } = payload;
  return (
    <Layout footer={footer} menu={menu} locale={locale} alts={pageInfo.urls}>
      <Seo
        tags={[...site.faviconMetaTags, ...payload.seo]}
        alt={pageInfo.urls}
      />
      <EventForm
        locale={locale}
        paymentSettings={paymentSettings}
        title={titleHero || payload.title}
      />
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getFormPaths();
  // console.log('paths', paths.length);
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params, locale, preview = false }) {
  const data = await doQueryById(locale, params);
  return {
    props: { data, locale },
  };
}
export default Page;
