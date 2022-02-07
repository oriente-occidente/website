import fetchData from "lib/api/dato";
import { festival_events as query, extraContent } from "lib/queries";
import { doQueryItem } from "lib/api";
import useSWR from "swr";

export function useFestivalByDate(locale, year, obj) {
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

export function useQueryItem(locale, id) {
  if (!id) return;
  const { data, error, isValidating } = useSWR(`/ty/${locale}/${id}`, () =>
    doQueryItem(locale, id)
  );
  return {
    loading: isValidating,
    data,
    error,
  };
}
