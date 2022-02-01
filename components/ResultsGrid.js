import PreviewCard from 'components/cards/PreviewCard';

function ResultsGrid({ list, locale, group }) {
  function getMaxYear(collection) {
    return collection.reduce((max, curr) => {
      return max > curr.year ? max : curr.year;
    }, 0);
  }

  function getYear(item, group) {
    if (group === 'artistic-residences') {
      return getMaxYear(item.artisticResidence);
    } else if (group === 'associated-artists') {
      return getMaxYear(item.associatedArtist);
    }
    return null;
  }

  function sortList(list, group) {
    if (group === 'artistic-residences') {
      return list.sort((a, b) => {
        const aMax = getMaxYear(a.artisticResidence);
        const bMax = getMaxYear(b.artisticResidence);
        return bMax > aMax ? 1 : bMax < aMax ? -1 : 0;
      });
    } else if (group === 'associated-artists') {
      return list.sort((a, b) => {
        const aMax = getMaxYear(a.associatedArtist);
        const bMax = getMaxYear(b.associatedArtist);
        return bMax > aMax ? 1 : bMax < aMax ? -1 : 0;
      });
    }
    return list;
  }
  console.log(list);
  return (
    <div className="py-6 border-t border-color-gray">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-6">
        {sortList(list, group).map((item) => (
          <PreviewCard
            locale={locale}
            data={item}
            key={item.id}
            group={group}
            year={getYear(item, group)}
          />
        ))}
      </div>
    </div>
  );
}

export default ResultsGrid;
