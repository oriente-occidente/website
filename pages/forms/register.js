import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';

import { doQueryItem, doQueryById } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import t from 'lib/locales';
import { formatDate } from 'lib/utils';

function Page({ data, locale }) {
  const { site, menu, footer } = data;
  const [success, setSuccess] = useState(false);
  const [payload, setPayload] = useState(null);
  const [choiche, setChoiche] = useState(null);
  const [paymentId, setPaymentId] = useState(null);
  const [eventId, setEventId] = useState(null);
  // const { state, dispatch } = useAppContext();
  // const { eventId, paymentId } = state;
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    // if (window.location.search.includes('success=true')) {
    if (query) {
      const { success, id, choicheId = null } = query;
      if (success === 'true') {
        setSuccess(true);
        if (choicheId) {
          setPaymentId(choicheId);
        }
      }
      if (id) {
        setEventId(id);
      }
    }
  }, [query]);

  const handleChange = (e) => {
    const value = e.target?.value;
    if (!value) return;
    console.log('choosen ID:', value);
    // dispatch({ type: 'SET_PAYMENT', value });
    setPaymentId(value);
  };

  useEffect(() => {
    if (eventId) {
      //todo fetch event data
      doQueryItem(locale, eventId)
        .then((result) => {
          console.log('event data:', result);
          setPayload(result);
        })
        .catch((e) => console.log(e));
    }
  }, [eventId]);

  useEffect(() => {
    if (paymentId && payload) {
      //todo fetch event payload
      const choosen = payload.paymentSettings.find((p) => p.id === paymentId);
      console.log('choosen:', choosen);
      setChoiche(choosen);
    }
  }, [paymentId, payload]);

  return (
    <Layout footer={footer} menu={menu} locale={locale} hideNewsletter={true}>
      <Seo tags={site.faviconMetaTags} />
      <div className="p-10 my-10">
        <h1 className="text-lg">Registration Form</h1>
        {payload && (
          <>
            <h2 className="text-lg my-10">{payload.title}</h2>
            <ul className="list">
              {payload.paymentSettings?.map((p) => {
                return (
                  <li key={p.id} className="list-item">
                    <span>{p.description}</span>
                    <span>, PRICE: {p.amount} €</span>
                    <span>
                      , DATES:{' '}
                      {p.startDate ? formatDate(p.startDate, locale) : ''} -{' '}
                      {p.endDate ? formatDate(p.endDate, locale) : ''}
                    </span>
                  </li>
                );
              })}
            </ul>
          </>
        )}
        {success && (
          <div>
            <h3 className="text-lg font-semibold">
              Richiesta inviata corretamente
            </h3>
            <div>{choiche?.description}</div>
            <div>Il costo dell'evento è di {choiche?.amount}€</div>
            <div>
              Qui puoi aquistare il tuo biglietto:
              <a
                class="text-green-900"
                href={choiche?.paymentLink}
                target="_blank"
                rel="noopener"
              >
                {choiche?.paymentLink}
              </a>
            </div>
          </div>
        )}
        <div className={`my-10 ${success && choiche ? 'hidden' : ''}`}>
          <form
            name="register"
            method="POST"
            action={`${
              locale === 'en' ? '/en' : ''
            }/forms/register?success=true&id=${eventId}&choicheId=${paymentId}`}
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="register" />
            <input type="hidden" name="locale" value={locale} />
            <input type="hidden" name="title" value={data?.title} />
            <input
              type="hidden"
              name="level-name"
              value={choiche?.description}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
              <div>
                <label htmlFor={'level'}>{t('level', locale)}</label>
                <select
                  className="min-w-full rounded text-gray-700"
                  name="level"
                  value={paymentId}
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
                />
              </div>
              <div>
                <label htmlFor={'lastName'}>{t('lastName', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="lastName"
                  type="text"
                  maxLength="250"
                />
              </div>
              <div>
                <label htmlFor={'email'}>{t('email', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="email"
                  type="email"
                  maxLength="250"
                />
              </div>
              <div>
                <label htmlFor={'address'}>{t('address', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="address"
                  type="text"
                  maxLength="250"
                />
              </div>
              <div>
                <label htmlFor={'city'}>{t('city', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="city"
                  type="text"
                  maxLength="250"
                />
              </div>
              <div>
                <label htmlFor={'stateCode'}>{t('stateCode', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="stateCode"
                  type="text"
                  maxLength="250"
                />
              </div>
              <div>
                <label htmlFor={'zipCode'}>{t('zipCode', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="zipCode"
                  type="text"
                  maxLength="250"
                />
              </div>
              <div>
                <label htmlFor={'phone'}>{t('phone', locale)}</label>
                <input
                  className="min-w-full rounded text-gray-700"
                  name="phone"
                  type="text"
                  maxLength="250"
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
                  className="rounded text-gray-700 mr-4"
                  name="privacy"
                  type="checkbox"
                />
                <label
                  className="px-2"
                  htmlFor={'privacy'}
                  dangerouslySetInnerHTML={{ __html: 'PRIVACY AGREEMENT' }}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mt-10 min-w-full bg-white text-gray-700 font-semibold hover:text-black py-2 px-4 border border-gray-700 hover:border-black"
              >
                Send
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
  return {
    props: { data, locale },
  };
}
export default Page;
