import { doQuery } from 'lib/api';
import Layout from 'components/Layout';
import { camelCase } from 'lib/utils';
import ResultsGrid from 'components/ResultsGrid';
import ResultsGridSorted from 'components/ResultsGridSorted';
import WorkshopByCategory from 'components/WorkshopByCategory';
import Filters from 'components/Filters';

function Page({ data, locale }) {
  // const router = useRouter();
  const { pageInfo, site, menu, footer, ...rest } = data;

  const pluk = (data) => {
    const { festivalEvents, otherEvents, courses, workshops } = data;
    return { festivalEvents, otherEvents, courses, workshops };
  };
  const { __typename: pageType } = pageInfo;
  const payload = rest[pageType];
  console.log('payload', payload);
  if (!payload) {
    return <div>404</div>;
  }

  const isPage = pageType === 'page';
  const isIndex = isPage && payload.isIndex;
  const indexType = isIndex && payload.indexType;
  const showFilters = indexType === 'festival-events';
  const list =
    isIndex && indexType
      ? showFilters
        ? pluk(rest, 'festivalEvents, otherEvents, courses, workshops')
        : rest[camelCase(indexType)]
      : [];
  const isSorted = indexType === 'workshops' || indexType === 'other-events';
  const group = indexType ? indexType : null;

  return (
    <>
      <Layout footer={footer} menu={menu} locale={locale} alts={pageInfo.urls}>
        {isIndex && !showFilters && isSorted && (
          <>
            {indexType === 'workshops' ? (
              <WorkshopByCategory list={list} group={group} locale={locale} />
            ) : (
              <ResultsGridSorted list={list} group={group} locale={locale} />
            )}
          </>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale, preview = false }) {
  let params = { slugs: ['studio', 'formazione'] };
  const data = await doQuery(locale, params, preview);
  if (!data?.pageInfo?.__typename) {
    console.log('ERROR no PageInfo', data?.pageInfo);
    return {
      redirect: { destination: '/404', permanent: false },
    };
  }
  return {
    props: { data, locale, params },
  };
}
export default Page;
