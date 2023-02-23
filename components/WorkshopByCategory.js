import translate from "lib/locales";
import { enhanceEvents, sortDesc, sortAsc } from "lib/utils";
import PreviewCard from "components/cards/PreviewCard";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const MAX = 6;
function WorkshopByCategory({ list, locale, group }) {
  const [workshopCat, setWorkshopCat] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let catParam = urlParams.get("cat");
    if (catParam) {
      const cat = urlParams.get("cat").toLowerCase();
      if (cat) setWorkshopCat(cat);
    } else {
      setWorkshopCat("");
    }
  }, []);

  let finished = [];
  let active = [];
  let filterByCategory = null;
  if (workshopCat && workshopCat !== "all") {
    filterByCategory = list.filter(({ workshopCategory }) =>
      workshopCategory.some(({ slug }) => slug == workshopCat)
    );
  }
  const resultList = enhanceEvents(filterByCategory || list);
  finished = sortDesc(
    resultList?.filter((e) => e.finished),
    "startDate"
  );
  active = sortAsc(
    resultList?.filter((e) => !e.finished),
    "nextDate"
  );
  const showHeaders = finished.length > 0 && active.length > 0;

  return (
    <div className="container my-4">
      {workshopCat && workshopCat !== "all" && (
        <div className="pt-1 lg:flex lg:justify-between lg:pt-0">
          <div>
            <h1 className="title">{workshopCat}</h1>
          </div>

          <Link href="studio/formazione" locale={locale}>
            <a className="hover:text-red">
              <div className="flex items-center">
                <div className="mr-4 h-5 w-5 flex-none bg-arrow-left-black" />
                <div>{translate("view_all", locale)}</div>
              </div>
            </a>
          </Link>
        </div>
      )}

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
