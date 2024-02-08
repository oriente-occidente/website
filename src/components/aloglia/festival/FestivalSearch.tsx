"use client";
import React from "react";
import { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  InstantSearchProps,
  Stats,
  Configure,
} from "react-instantsearch";
import AccordionItem from "@/components/aloglia/AccordionItem";
import config from "@/data/config";
import translate from "@/lib/locales";
import Pagination from "../Pagination";
import Results from "./FestivalSearchResults";
import { UiState } from "instantsearch.js/es/types";
import CustomClearRefinements from "../CustomCleearRefinements";
import CustomSearchBox from "../CustomSearchBox";
import { SearchPropsType } from "@/types";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || ""
);

export default function Search({ locale }: SearchPropsType) {
  const indexName = `festival`;
  const isDefaultLocale = locale === config.defaultLocale;

  const [notifyReset, setNotifyReset] = useState<boolean>(false);
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const [searchState, setSearchState] = useState<UiState>({});
  const activeFilters =
    searchState &&
    Object.keys(searchState).length > 0 &&
    Object.keys(searchState[indexName]).length > 0;

  const filtersOptions = [
    {
      name: "contentType",
      searchable: false,
      operator: true,
      limit: 5,
      showMore: false,
    },
    {
      name: "years",
      searchable: false,
      operator: true,
      limit: 5,
      showMore: false,
    },
  ];

  const onStateChange: InstantSearchProps["onStateChange"] = ({
    uiState,
    setUiState,
  }) => {
    setUiState(uiState);
    setSearchState(uiState);
    setOpenFilters(false);
  };
  const handleResetNotification = () => {
    setNotifyReset(true);
    setTimeout(() => {
      setNotifyReset(false);
    }, 500);
  };

  const handleOpenFilters = () => {
    setOpenFilters(!openFilters);
  };

  useEffect(() => {
    console.log("SEARCH", window.location.search);
    const params = decodeURIComponent(window.location.search);
    console.log("SEARCH PARAMS", params);
  }, []);

  return (
    <div className="xl:pb-8">
      <InstantSearch
        searchClient={searchClient}
        indexName={indexName}
        onStateChange={onStateChange}
        routing={true}
      >
        {/* AND years:2021 */}
        <Configure filters={`ita:${isDefaultLocale ? "true" : "false"}`} />
        <div className="flex items-center lg:hidden pb-8 mb-8 border-b border-gray border-dashed">
          <button
            className="flex items-center font-bold text-white bg-black capitalize px-4 py-2 mr-6 whitespace-nowrap"
            onClick={() => handleOpenFilters()}
          >
            {openFilters && <>{translate("search.hide-filters", locale)} </>}
            {!openFilters && <>{translate("search.modify-filters", locale)} </>}
          </button>
          {activeFilters && (
            <CustomClearRefinements
              cb={() => handleResetNotification()}
              locale={locale}
              notifyReset={notifyReset}
            />
          )}
        </div>

        <div className="lg:flex lg:justify-between">
          <div
            className={`grid ${
              openFilters ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            } motion-safe:transition-[grid-template-rows] motion-safe:duration-300 lg:h-full lg:w-1/4 lg:shrink-0 lg:sticky lg:top-[110px] lg:z-[1]`}
          >
            <div className="overflow-hidden lg:overflow-visible ">
              <div className="">
                <div className="mb-6">
                  <CustomSearchBox
                    resetNotification={notifyReset}
                    locale={locale}
                    section=""
                  />
                </div>
                <div className="hidden mb-6 pb-6 border-b border-gray border-dashed lg:flex justify-between items-center">
                  <Stats
                    translations={{
                      rootElementText({ nbHits }) {
                        return `${nbHits} ${translate("search.results", locale)} `;
                      },
                    }}
                  />
                  {activeFilters && (
                    <div className="hidden lg:block">
                      <CustomClearRefinements
                        cb={() => handleResetNotification()}
                        locale={locale}
                        notifyReset={notifyReset}
                      />
                    </div>
                  )}
                </div>
              </div>

              {filtersOptions.map((filter) => {
                return (
                  <AccordionItem key={filter.name} filter={filter} locale={locale} />
                );
              })}
            </div>
          </div>

          <div className="lg:w-3/4 lg:pl-10">
            <Results locale={locale} />
            <div className="py-10 w-full ">
              <Pagination locale={locale} />
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}
