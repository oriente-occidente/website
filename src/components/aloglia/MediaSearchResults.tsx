"use client";
import { UseHitsProps, useHits } from "react-instantsearch";
import Hit from "./MediaHit";

type MediaSearchResultsProps = UseHitsProps & {
  locale: string;
};

export default function MediaSearchResults({
  locale,
  ...props
}: MediaSearchResultsProps) {
  const { hits } = useHits(props);
  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 lg:grid-cols-2 xl:gap-3 4xl:gap-4 4xl:grid-cols-3 ">
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
