import translate from 'lib/locales';
import { isFinished, enhanceEvents, sortDesc, sortAsc } from 'lib/utils';
import PreviewCard from 'components/cards/PreviewCard';

const MAX = 6;
function ResultsGridWorkshop({ list, locale, group }) {
  const resultList = enhanceEvents(list);
  const finished = sortDesc(
    resultList?.filter((e) => e.finished),
    'startDate'
  );
  const active = sortAsc(
    resultList?.filter((e) => !e.finished),
    'nextDate'
  );
  const showHeaders = finished.length > 0 && active.length > 0;

  return (
    <div className="my-4 container">
      {showHeaders && (
        <div className="border-b border-black  mt-20 pb-5 font-semibold uppercase text-lg">
          {translate('next_events', locale)}
        </div>
      )}
      {active.length > 0 && (
        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
          {active?.map((item) => (
            <PreviewCard locale={locale} data={item} key={item.id} />
          ))}
        </div>
      )}
      {showHeaders && (
        <div className="border-b border-black  mt-20 pb-5 font-semibold uppercase  text-lg">
          {translate('previous_events', locale)}
        </div>
      )}
      {finished.length > 0 && (
        <div className="lg:grid lg:grid-cols-2 lg:gap-6 ">
          {finished?.slice(0, MAX).map((item) => (
            <PreviewCard locale={locale} data={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );

  // return (
  //   <div className="border-color-gray border-t py-6">
  //     <div className="container lg:grid lg:grid-cols-2 lg:gap-6">
  //       {sortList(list, group).map((item) => (
  //         <PreviewCard
  //           locale={locale}
  //           data={item}
  //           key={item.id}
  //           group={group}
  //           year={[].join(', ')}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );
}

export default ResultsGridWorkshop;
