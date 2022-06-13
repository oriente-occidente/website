import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import * as q from 'lib/queries';
import fetchData from 'lib/fetchData';
import { doQueryItem, doQueryById } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

function Page({ data, locale, thankyouMessage }) {
  const { site, menu, footer } = data;
  const router = useRouter();
  const { query } = router;
  const [choiche, setChoiche] = useState(null);
  async function getData({ id, cp }) {
    if (id && cp) {
      const data = await doQueryItem(locale, id);
      const choosen = data?.paymentSettings?.find((p) => p.id === cp);
      console.log('choiche data:', choosen);
      setChoiche(choosen);
    }
  }
  useEffect(() => {
    if (query) {
      console.log('QUERY:', query);
      const url = window.location;
      if (!window.location.search.includes('success=true')) {
        setTimeout(() => {
          window.location.href = `${url}&success=true`;
        }, 1000);
      } else {
        getData(query);
      }
    }
  }, [query]);

  return (
    <Layout footer={footer} menu={menu} locale={locale} hideNewsletter={true}>
      <Seo tags={site.faviconMetaTags} />

      <div className="my-10 p-10">
        <h1 className="text-lg">{thankyouMessage.titleThanks}</h1>
        <p>{thankyouMessage.textThanks}</p>
        {!choiche && <div>Loading...</div>}
        {choiche && (
          <div className="bg-gray-50 p-4">
            <a href={choiche?.paymentLink} target="_blank" rel="noreferrer">
              {`${choiche?.description} ${
                choiche?.amount ? '- ' + choiche.amount + '€' : ''
              }`}
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
}

// export async function getServerSideProps({ locale, query }) {
//   const { id, cp } = query;
//   console.log('WUERY', query);
//   const data = await doQueryById(locale);
//   const ty = await fetchData(q.extra_content, { locale });
//   const payload = await doQueryItem(locale, id);
//   const choiche = payload.paymentSettings?.find((p) => p.id === cp);
//   const thankyouMessage = ty.extraContent;
//   return {
//     props: { data, locale, thankyouMessage, choiche },
//   };
// }

export async function getStaticProps({ params, locale }) {
  const data = await doQueryById(locale);
  const ty = await fetchData(q.extra_content, { locale });
  const thankyouMessage = ty.extraContent;
  return {
    props: { data, locale, thankyouMessage },
  };
}
export default Page;
