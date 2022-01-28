import useSWR from 'swr';
import fetchData from 'lib/api/dato';
import { festival_events as query } from 'lib/queries';

export function useFestivalByDate(locale, year, obj) {
  console.log('useFestivalByDate', obj);
  const { data, error, isValidating } = useSWR(
    `/program/${locale}/${year}`,
    () =>
      fetchData(query, {
        locale,
        start: obj.startDate,
        end: obj.endDate,
      })
  );
  return {
    loading: isValidating,
    data,
    error,
  };
}


export function useQueryById(locale, year, obj) {
  console.log('useFestivalByDate', obj);
  const { data, error, isValidating } = useSWR(
    `/program/${locale}/${year}`,
    () =>
      fetchData(query, {
        locale,
        start: obj.startDate,
        end: obj.endDate,
      })
  );
  return {
    loading: isValidating,
    data,
    error,
  };
}
