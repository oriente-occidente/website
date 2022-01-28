import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import * as q from 'lib/queries';
import fetchData from 'lib/api/dato';
import { doQueryItem, doQueryById } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

function Page({ data, locale, thankyouMessage, choiche }) {
  const { site, menu, footer } = data;
  // const router = useRouter();
  // const { query } = router;

  // const [choiche, setChoiche] = useState(null)
  // async function getData({ id, cp }) {
  //   if (id && cp) {
  //     const data = await doQueryItem(locale, id);
  //     const choiche = data?.paymentSettings.find((p) => p.id === cp);
  //     console.log('choiche data:', p);
  //     setChoice(choiche);
  //   }
  // }
  // useEffect(() => {
  //   if (query) {
  //     console.log('QUERY2:', query);
  //     getData(query);
  //   }
  // }, [query]);

  return (
    <Layout footer={footer} menu={menu} locale={locale} hideNewsletter={true}>
      <Seo tags={site.faviconMetaTags} />

      <div className="p-10 my-10">
        <h1 className="text-lg">{thankyouMessage.titleThanks}</h1>
        <p>{thankyouMessage.textThanks}</p>
        {!choiche && <div>Loading...</div>}
        {choiche && (
          <div className="bg-gray-50 p-4">
            <a href={choiche?.paymentLink} target="_blank" rel="noopener">
              {`${choiche?.description} - ${choiche?.amount}€`}
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ locale, query }) {
  const { id, cp } = query;
  console.log('WUERY', query);
  const data = await doQueryById(locale);
  const ty = await fetchData(q.extra_content, { locale });
  const payload = await doQueryItem(locale, id);

  const choiche = payload.paymentSettings?.find((p) => p.id === query.cp);
  const thankyouMessage = ty.extraContent;
  return {
    props: { data, locale, thankyouMessage, payload, query, choiche },
  };
}

// export async function getStaticProps({ params, locale }) {
//   const data = await doQueryById(locale);
//   const ty = await fetchData(q.extra_content, { locale });
//   const thankyouMessage = ty.extraContent;
//   console.log('thankyouMessage', thankyouMessage);
//   return {
//     props: { data, locale, thankyouMessage },
//   };
// }
export default Page;
