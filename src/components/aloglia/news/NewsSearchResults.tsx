"use client";
import { UseHitsProps, useHits } from "react-instantsearch";
import Hit from "./NewsHit";

type MediaSearchResultsProps = UseHitsProps & {
  locale: string;
};

export default function MediaSearchResults({
  locale,
  ...props
}: MediaSearchResultsProps) {
  const { hits } = useHits(props);
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 4xl:grid-cols-3 gap-x-3 sm:gap-x-5 gap-y-8">
      {hits.length === 0 && "No results"}
      {hits.map((hit: any) => {
        return (
          <div key={hit.objectID}>
            <Hit hit={hit} locale={locale} />
          </div>
        );
      })}
    </div>
  );
}
