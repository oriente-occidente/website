import useSWR from 'swr';
import fetchData from 'lib/api/dato';
import { festival_events as query } from 'lib/queries';

export function useFestivalByDate(locale, year) {
  const { data, error, isValidating } = useSWR(
    `/program/${locale}/${year}`,
    () =>
      fetchData(query, {
        locale,
        start: `${year}-01-01`,
        end: `${parseInt(year) + 1}-01-01`,
      })
  );
  return {
    loading: isValidating,
    data,
    error,
  };
}
