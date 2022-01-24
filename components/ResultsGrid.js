import PreviewCard from 'components/cards/PreviewCard';

function ResultsGrid({ list, locale, group }) {
  return (
    <div className="py-6 border-t border-color-gray">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-6">
        {list.map((item) => (
          <PreviewCard
            locale={locale}
            data={item}
            key={item.id}
            group={group}
          />
        ))}
      </div>
    </div>
  );
}

export default ResultsGrid;
