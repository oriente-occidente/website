import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import queryString from 'query-string';

import * as q from 'lib/queries';
import fetchData from 'lib/api/dato';
import { doQueryItem, doQueryById } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

function Page({ data, locale, thankyouMessage }) {
  const { site, menu, footer } = data;
  const [payload, setPayload] = useState(null);
  const [triggher, setTRiggher] = useState(null);
  const router = useRouter();
  const { query } = router;

  async function getData({ id, cp }) {
    if (id && cp) {
      const data = await doQueryItem(locale, id);
      const choiche = data?.paymentSettings.find((p) => p.id === cp);
      const p = { data, choiche };
      console.log('payload data:', p);
      setPayload(p);
    }
  }

  useEffect(() => {
    // if (window.location.search.includes('success=true'))
    const q = queryString.parse(location.search);
    console.log('QUERY1:', q);
    getData(q);
  }, []);

  useEffect(() => {
    if (query) {
      console.log('QUERY2:', query);
      getData(query);
    }
  }, [query]);

  // console.log(payload);
  return (
    <Layout footer={footer} menu={menu} locale={locale} hideNewsletter={true}>
      <Seo tags={site.faviconMetaTags} />
      {triggher}
      <div className="p-10 my-10">
        <h1 className="text-lg">{thankyouMessage.titleThanks}</h1>
        <p>{thankyouMessage.textThanks}</p>
        {!payload && <div>Loading...</div>}
        {!!payload && payload?.choiche && (
          <div className="bg-gray-50 p-4">
            <a
              href={payload?.choiche?.paymentLink}
              target="_blank"
              rel="noopener"
            >
              {`${payload.choiche.description} - ${payload?.choiche?.amount}€`}
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params, locale }) {
  const data = await doQueryById(locale);
  const ty = await fetchData(q.extra_content, { locale });
  const thankyouMessage = ty.extraContent;
  console.log('thankyouMessage', thankyouMessage);
  return {
    props: { data, locale, thankyouMessage },
  };
}
export default Page;
