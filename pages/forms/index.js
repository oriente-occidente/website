import { useState, useEffect } from 'react';
import { doQueryById } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

function Page({ data, locale }) {
  const { site, menu, footer } = data;
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);

  return (
    <Layout footer={footer} menu={menu} locale={locale}>
      <Seo tags={site.faviconMetaTags} />
      <h1 className="text-lg">Contact Me</h1>
      {success && (
        <p style={{ color: 'green' }}>Successfully submitted form!</p>
      )}

      <form
        name="contact"
        method="POST"
        action={`${locale === 'en' ? '/en' : ''}/forms?success=true`}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
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
