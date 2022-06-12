import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import * as q from 'lib/queries';
import fetchData from 'lib/api/fetcher';
import { doQueryItem, doQueryById } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import t from 'lib/locales';
import { formatDate } from 'lib/utils';
import Table from 'components/Table';

function Page({ data, locale, thankyouMessage }) {
  const { site, menu, footer } = data;
  const [payload, setPayload] = useState(null);
  const [paymentId, setPaymentId] = useState(null);
  const [eventId, setEventId] = useState(null);
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (query.id) {
      setEventId(query.id);
    }
  }, [query]);

  const handleChange = (e) => {
    const value = e.target?.value;
    if (!value) return;
    setPaymentId(value);
  };
  useEffect(() => {
    if (eventId) {
      doQueryItem(locale, eventId)
        .then((payload) => {
          console.log('event data:', payload);
          setPayload(payload);
        })
        .catch((e) => console.log(e));
    }
  }, [eventId]);

  const action = `${locale === 'en' ? '/en' : ''}/forms/thankyou?id=${eventId}${
    paymentId ? '&cp=' + paymentId : ''
  }`;
  const choiche = paymentId
    ? payload.paymentSettings?.find((p) => p.id === paymentId)
    : null;

  const titles = ['', t('dates', locale), t('amount', locale)];
  const rows = payload?.paymentSettings?.map((p) => {
    const { description, startDate, endDate, amount } = p;
    const range = `${startDate ? formatDate(p.startDate, locale) : ''} - ${
      endDate ? formatDate(endDate, locale) : ''
    }`;
    const price = `${amount ? amount + ' €' : ''}`;
    return [description, range, price];
  });
  return (
    <Layout footer={footer} menu={menu} locale={locale} hideNewsletter={true}>
      <Seo tags={site.faviconMetaTags} />
      <div className="my-10 p-10">
        {payload && (
          <>
            <h3 className="h3">{payload?.title}</h3>
            <Table titles={titles} rows={rows} />
          </>
        )}
        <h1 className="h1 mt-10">{t('registration_form', locale)}</h1>
        <div className={`mb-10 rounded-lg border p-4 `}>
          <form
            name="register"
            method="POST"
            action={action}
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="register" />
            <input type="hidden" name="locale" value={locale} />
            <input type="hidden" name="title" value={payload?.title} />
            <input
              type="hidden"
              name="level-name"
              value={choiche?.description}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
              <div>
                <label htmlFor={'level'}>{t('level', locale)}</label>
                <select
                  className="min-w-full rounded text-gray-700"
                  name="level"
                  // value={paymentId}
                  defaultValue={''}
                  required="required"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">select a value</option>
                  {payload?.paymentSettings?.map((o) => (
                    <option value={o.id} key={o.id}>
                      {o.description}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor={'firstName'}>{t('firstName', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="firstName"
                  type="text"
                  maxLength="250"
                  required="required"
                />
              </div>
              <div>
                <label htmlFor={'lastName'}>{t('lastName', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="lastName"
                  type="text"
                  maxLength="250"
                  required="required"
                />
              </div>
              <div>
                <label htmlFor={'email'}>{t('email', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="email"
                  type="email"
                  maxLength="250"
                  required="required"
                />
              </div>
              <div>
                <label htmlFor={'address'}>{t('address', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="address"
                  type="text"
                  maxLength="250"
                  required="required"
                />
              </div>
              <div>
                <label htmlFor={'city'}>{t('city', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="city"
                  type="text"
                  maxLength="250"
                  required="required"
                />
              </div>
              <div>
                <label htmlFor={'stateCode'}>{t('stateCode', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="stateCode"
                  type="text"
                  maxLength="250"
                  required="required"
                />
              </div>
              <div>
                <label htmlFor={'zipCode'}>{t('zipCode', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="zipCode"
                  type="text"
                  maxLength="250"
                  required="required"
                />
              </div>
              <div>
                <label htmlFor={'phone'}>{t('phone', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="phone"
                  type="text"
                  maxLength="250"
                  required="required"
                />
              </div>
              <div>
                <label htmlFor={'notes'}>{t('notes', locale)}</label>
                <textarea
                  className="min-w-full rounded text-gray-700"
                  rows={4}
                  name="notes"
                  type="textarea"
                  maxLength="500"
                />
              </div>

              <div>
                <input
                  className="mr-4 rounded text-gray-700"
                  name="privacy"
                  type="checkbox"
                  required="required"
                />
                <label
                  className="px-2"
                  htmlFor={'privacy'}
                  dangerouslySetInnerHTML={{
                    __html: thankyouMessage.textPrivacy,
                  }}
                />
              </div>
            </div>
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
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params, locale }) {
  const data = await doQueryById(locale);
  const ty = await fetchData(q.extra_content, { locale });
  const thankyouMessage = ty.extraContent;
  return {
    props: { data, locale, thankyouMessage },
  };
}
export default Page;
