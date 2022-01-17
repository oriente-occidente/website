import React from 'react';
import { doQueryById } from 'lib/api';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            Your Name:{' '}
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{' '}
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{' '}
            <textarea
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}

function Page({ data, locale }) {
  const { site, menu, footer } = data;

  return (
    <Layout footer={footer} menu={menu} locale={locale}>
      <Seo tags={site.faviconMetaTags} />
      <ContactForm />
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
