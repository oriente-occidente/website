"use client";
import Tabs from "@/components/Tabs";
import PreviewCard from "@/components/cards/PreviewCard";
import CategoryCard from "@/components/cards/CategoryCard";
import translate from "@/lib/locales";
import { enhanceEvents, sortDesc, sortAsc, sortFlatEvents } from "@/lib/utils";
import { useEffect, useState } from "react";

const tabs = [
  { name: "tab_festival", slug: "all", description: "festivalDescription" },
  {
    name: "tab_events",
    slug: "festivalEvents",
    description: "eventsDescription",
  },
  {
    name: "tab_workshops",
    slug: "workshops",
    description: "workshopsDescription",
  },
  {
    name: "tab_languages",
    slug: "languages",
    description: "languagesDescription",
  },
  // { name: 'tab_talks', slug: 'courses' },
];

function Filters({ locale, list = null }) {
  const [typeFilter, setTypeFilter] = useState(null);

  function handleTypeFilter(value) {
    setTypeFilter(value);
  }

  useEffect(() => {
    if (typeFilter) {
      const url = `${window.location.pathname}?type=${typeFilter}`;
      window.history.pushState({ path: url }, "", url);
    }
  }, [typeFilter]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (
        params.get("type") &&
        tabs.find((t) => t.slug == params.get("type"))
      ) {
        setTypeFilter(params.get("type"));
      } else {
        setTypeFilter("all");
      }
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

      // return enhanceEvents(allResults);
      return sortFlatEvents(allResults);
    } else {
      return sortFlatEvents(results[typeFilter]);
    }
  }

  // console.log("typeFilter", typeFilter);
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

  return (
    <div className="mt-10">
      <div className="border-gray md:border-b">
        <Tabs
          locale={locale}
          selected={typeFilter}
          handleSelect={(value) => handleTypeFilter(value)}
          catLengths={catLengths}
          tabs={tabs}
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
              <CategoryCard locale={locale} data={item} key={item.id} />
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
              <CategoryCard locale={locale} data={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Filters;
