import Link from 'next/link';
import { Image, StructuredText } from 'react-datocms';

import fetchDato from 'lib/api/dato';
import * as queries from 'lib/queries';
import Layout from 'components/Layout';
import MyStructuredContent from 'components/MyStructuredContent';
import SEO from 'components/Seo';

function Post({ post, preview }) {
  if (!post) {
    return <div>Ops, post is null</div>;
  }
  const { title, pic, excerpt, content } = post;

  return (
    <Layout>
      <SEO tags={post.seo} />
      <Link href="/">
        <a>back</a>
      </Link>
      <Image data={pic.responsiveImage} />
      <h1>{title}</h1>
      <StructuredText data={excerpt} />
      <MyStructuredContent content={content} />
    </Layout>
  );
}
export async function getStaticPaths() {
  const locale = 'en';
  const reponse = await fetchDato(queries.posts, { locale });
  const paths = reponse.posts.map(({ slug }) => ({
    params: { slug },
    locale,
  }));
  console.log('paths', paths);
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params, locale, preview = false }) {
  const { slug } = params;
  const reponse = await fetchDato(queries.post, { slug, locale }, preview);
  return {
    props: {
      post: reponse?.post,
      preview,
    },
    revalidate: 30,
  };
}

export default Post;
