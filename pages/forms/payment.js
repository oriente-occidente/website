import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { doQueryItem, doQueryById } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import t from 'lib/locales';

function Page({ data, locale }) {
  const { site, menu, footer } = data;
  const [nexi, setNexi] = useState();
  useEffect(() => {
    async function getData() {
      const paymentInfo = await fetch('/api/xpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ code: 123, amount: 15 }),
      }).then((r) => r.json());

      console.log('paymentInfo', paymentInfo);
      setNexi(paymentInfo);
    }
    getData();
  }, []);

  return (
    <Layout footer={footer} menu={menu} locale={locale} hideNewsletter={true}>
      <Seo tags={site.faviconMetaTags} />
      <div className="my-10 p-10">
        <h1 className="h1 mt-10">{t('payment', locale)}</h1>
        {nexi && (
          <div className={`mb-10 rounded-lg border p-4 `}>
            <form name="nexi" method="POST" action={nexi.url}>
              {Object.keys(nexi.params).map((k) => (
                <input type="hidden" key={k} name={k} value={nexi.params[k]} />
              ))}
              <div>
                <button
                  type="submit"
                  className="mt-10 min-w-full border border-gray-700 bg-white py-2 px-4 font-semibold text-gray-700 hover:border-black hover:text-black"
                >
                  {t('send', locale)}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params, locale }) {
  console.log('params', params);
  // const { id: eventId } = params;
  // const payload = doQueryItem(locale, eventId);

  const data = await doQueryById(locale);
  return {
    props: { data, locale },
  };
}
export default Page;
