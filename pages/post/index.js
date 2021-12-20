import Link from 'next/link';


import Layout from 'components/Layout';
import * as queries from 'lib/queries';
import fetchDato from 'lib/api/dato';

function Home({ posts, preview }) {
  return (
    <Layout>
      {preview ? (
        <div>
          Preview Mode Active.{' '}
          <Link href="/api/stop-preview">
            <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2  ">
              stop preview
            </a>
          </Link>
        </div>
      ) : (
        <div>
          <Link href="/api/start-preview">
            <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2  ">
              Start Preview
            </a>
          </Link>
        </div>
      )}
      <h1 className="text-xl uppercase text-secondary ">Blog Posts</h1>
      {posts.map((post) => {
        const { id, slug, title, pic } = post;
        return (
          <div key={id} className="my-10">
            <Link href={`/post/${slug}`}>
              <a>
                <img src={pic.url} lazy="true" />
                <h3>{title}</h3>
              </a>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps({ preview = false, locale }) {
  const reponse = await fetchDato(queries.posts, { locale }, preview);
  const posts = reponse?.posts;
  return {
    props: {
      posts,
      preview,
    },
    revalidate: 30,
  };
}

export default Home;
