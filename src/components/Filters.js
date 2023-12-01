"use client";
import Tabs from "@/components/Tabs";
import PreviewCard from "@/components/cards/PreviewCard";
import translate from "@/lib/locales";
import { enhanceEvents, sortDesc, sortAsc } from "@/lib/utils";
import { useEffect, useState } from "react";

function Filters({ locale, list = null }) {
  const [typeFilter, setTypeFilter] = useState("festivalEvents");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    console.log("params", params);
    if (params.get("type")) {
      setTypeFilter(params.get("type"));
    }
  }, []);

  function filterData(data, typeFilter) {
    const results = data ? data : null;
    if (!results) return [];
    if (typeFilter === "all") {
      const allResults =
        Object.keys(results).reduce((all, key) => {
          if (results[key]) {
            all = [...all, ...results[key]];
          }
          return all;
        }, []) || [];
      //TODO SORT BY DATE
      return enhanceEvents(allResults);
    } else {
      return enhanceEvents(results[typeFilter]);
    }
  }

  console.log("typeFilter", typeFilter);
  const resultList = filterData(list, typeFilter);
  const finished = sortDesc(
    resultList?.filter((e) => e.finished),
    "startDate"
  );
  const active = sortAsc(
    resultList?.filter((e) => !e.finished),
    "nextDate"
  );
  const showHeaders = finished.length > 0 && active.length > 0;
  const catLengths = {};

  for (const key in list) {
    if (Array.isArray(list[key])) {
      catLengths[key] = list[key].length;
    }
  }

  function changeRoute(value) {
    document.location.href = `${window.location.pathname}?type=${value}`;
  }
  return (
    <div className="mt-10">
      <div className="border-gray md:border-b">
          <Tabs
            locale={locale}
            selected={typeFilter}
            handleSelect={(value) => changeRoute(value)}
            catLengths={catLengths}
          />
          {/* <div className="md:border-b md:border-gray md:pt-4 md:pb-8 xl:border-none xl:pt-0 xl:pb-0">
            <div className="px-4 pt-4 md:flex md:justify-between md:px-6 xl:pt-2">
              {""}
            </div>
          </div> */}
      </div>

      <div className="my-4 container">
        {showHeaders && (
          <div className="border-b border-black mt-20 pb-5 font-semibold uppercase text-lg">
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
          <div className="border-b border-black mt-20 pb-5 font-semibold uppercase text-lg">
            {translate("previous_events", locale)}
          </div>
        )}
        {finished.length > 0 && (
          <div className="lg:grid lg:grid-cols-2 lg:gap-6 ">
            {finished?.map((item) => (
              <PreviewCard locale={locale} data={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Filters;
