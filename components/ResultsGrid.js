import PreviewCard from 'components/cards/PreviewCard';

function ResultsGrid({ list, locale }) {
  return (
    <div className="my-10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {list.map((item) => (
          <PreviewCard locale={locale} data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ResultsGrid;
