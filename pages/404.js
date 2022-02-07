import Link from "next/link";

import Layout from "components/Layout";
import fetchDato from "lib/api/dato";
import * as queries from "lib/queries";
import translate from "lib/locales";

function tempate404({ data, locale }) {
  const { site, footer, menu } = data;
  return (
    <Layout footer={footer} menu={menu} locale={locale}>
      <header className="overflow-hidden border-t border-gray py-5" />
      <div className="container">
        <h1 className="title">{translate("404title", locale)}</h1>
        <h2 className="text-black-light md:mt-1 md:text-sm">
          {translate("404text", locale)}
        </h2>
        <Link href="/" locale={locale}>
          <a className="button--with-arrow">{translate("404cta", locale)}</a>
        </Link>
      </div>
    </Layout>
  );
}
export async function getStaticProps({ preview = false, locale }) {
  const data = await fetchDato(queries.site, { locale }, preview);
  return {
    props: {
      locale,
      data,
    },
    // revalidate: 30,
  };
}

export default tempate404;
