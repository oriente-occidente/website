import useSWR from 'swr';
import { doQuery } from 'lib/api';

const filterPosts = ``;

export function useFeedByDate( locale, date }) {
  const { data, error } = useSWR(`/feed/${date}`, () =>
    doQuery(filterPosts, { locale, date })
  );
  console.log('data', data);
  return {
    loading: !error && !data,
    data,
    error,
  };
}
