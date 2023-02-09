import translate from "lib/locales";
import { isFinished, enhanceEvents, sortDesc, sortAsc } from "lib/utils";
import PreviewCard from "components/cards/PreviewCard";
import { useEffect } from "react";
import { useRouter } from "next/router";

const MAX = 6;
function WorkshopByCategory({ list, locale, group }) {
  const router = useRouter();
  const { cat } = router.query;

  // const [cat, setCat] = useState(cat);
  // useEffect(() => {}, [router.query]);

  let finished = [];
  let active = [];
  if (cat) {
    // const listByCategory = list.filter((e) => e.category === cat);
    const resultList = enhanceEvents(list);
    finished = sortDesc(
      resultList?.filter((e) => e.finished),
      "startDate"
    );
    active = sortAsc(
      resultList?.filter((e) => !e.finished),
      "nextDate"
    );
  }
  const showHeaders = finished.length > 0 && active.length > 0;

  return (
    <div className="container my-4">
      <h1>WORKSHOPS !!! </h1>
      <h1>CATEGORY ? {cat}</h1>

      {showHeaders && (
        <div className="mt-20 border-b  border-black pb-5 text-lg font-semibold uppercase">
          {translate("next_events", locale)}
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
        <div className="mt-20 border-b  border-black pb-5 text-lg font-semibold  uppercase">
          {translate("previous_events", locale)}
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

export default WorkshopByCategory;
