import PreviewCard from 'components/cards/PreviewCard';

function ResultsGrid({ list, locale }) {
  return (
    <div className="my-4">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-6">
        {list.map((item) => (
          <PreviewCard locale={locale} data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ResultsGrid;
