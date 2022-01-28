// import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import queryString from 'query-string';

import { doQueryItem, doQueryById } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

function Page({ data, locale }) {
  const { site, menu, footer } = data;
  const [payload, setPayload] = useState(null);
  const [triggher, setTRiggher] = useState(null);
  // const router = useRouter();
  // const { query } = router;

  async function getData({ id, cp }) {
    if (id && cp) {
      const data = await doQueryItem(locale, id);
      console.log('event data:', data);
      const choiche = data?.paymentSettings.find((p) => p.id === cp);
      setPayload({ data, choiche });
    } else {
      setTRiggher(Date.now());
    }
  }

  useEffect(() => {
    // if (window.location.search.includes('success=true'))
    const query = queryString.parse(location.search);
    console.log('QUERY:', query);
    getData(query);
  });

  // console.log(payload);
  return (
    <Layout footer={footer} menu={menu} locale={locale} hideNewsletter={true}>
      <Seo tags={site.faviconMetaTags} />
      <div className="p-10 my-10">
        <h1 className="text-lg">Thank You</h1>
        {!payload && <div>Loading...</div>}
        {!!payload && payload?.choiche && (
          <div>
            <h3 className="text-lg font-semibold">
              Richiesta inviata corretamente
            </h3>
            <div>{payload?.choiche?.description}</div>
            <div>Il costo dell'evento è di {payload?.choiche?.amount}€</div>
            <div>
              Qui puoi aquistare il tuo biglietto:
              <a
                class="text-green-900"
                href={payload?.choiche?.paymentLink}
                target="_blank"
                rel="noopener"
              >
                {payload?.choiche?.paymentLink}
              </a>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params, locale }) {
  const data = await doQueryById(locale);
  return {
    props: { data, locale },
  };
}
export default Page;
