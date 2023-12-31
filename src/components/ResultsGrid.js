"use client";
import PreviewCard from "components/cards/PreviewCard";

function ResultsGrid({ list, locale, group }) {
  function getMaxYear(collection) {
    return collection.reduce((max, curr) => {
      return max > curr.year ? max : curr.year;
    }, 0);
  }

  function getYears(item, group) {
    if (group === "artistic-residences") {
      return item.artisticResidence
        .map((res) => res.year)
        .sort()
        .reverse();
    } else if (group === "associated-artists") {
      return item.associatedArtist
        .map((res) => res.year)
        .sort()
        .reverse();
    }
    return [];
  }

  function sortList(list, group) {
    if (group === "artistic-residences") {
      return list.sort((a, b) => {
        const aMax = getMaxYear(a.artisticResidence);
        const bMax = getMaxYear(b.artisticResidence);
        return bMax > aMax ? 1 : bMax < aMax ? -1 : 0;
      });
    } else if (group === "associated-artists") {
      return list.sort((a, b) => {
        const aMax = getMaxYear(a.associatedArtist);
        const bMax = getMaxYear(b.associatedArtist);
        return bMax > aMax ? 1 : bMax < aMax ? -1 : 0;
      });
      // } else if (group === 'projects') {
      //no need to sort  PROJECTS is alredy ok from query
      //   return list.sort((a, b) => {
      //     const p1 = a.position;
      //     const p2 = b.position;
      //     return p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      //   });
    }
    return list;
  }

  return (
    <div className="border-color-gray border-t py-6">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-6">
        {sortList(list, group).map((item) => (
          <PreviewCard
            locale={locale}
            data={item}
            key={item.id}
            group={group}
            year={getYears(item, group).join(", ")}
          />
        ))}
      </div>
    </div>
  );
}

export default ResultsGrid;
