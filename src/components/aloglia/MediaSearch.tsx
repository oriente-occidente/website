"use client";
import React from "react";
import { useState } from "react";

import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  RefinementList,
  InstantSearchProps,
  Stats,
} from "react-instantsearch";
import translate from "@/lib/locales";
import Pagination from "./Pagination";
import Results from "./MediaSearchResults";
import { UiState } from "instantsearch.js/es/types";
import CustomClearRefinements from "./CustomCleearRefinements";
import CustomSearchBox from "./CustomSearchBox";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || ""
);

type MediaSearchPropsType = {
  locale: string;
};
export default function MediaSearch({ locale }: MediaSearchPropsType) {
  const indexName = `media_${locale}`;
  const [notifyReset, setNotifyReset] = useState<boolean>(false);
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const [searchState, setSearchState] = useState<UiState>({});

  const filtersOptions = [
    {
      name: "contentType",
      searchable: false,
      operator: true,
      limit: 5,
      showMore: false,
    },
    {
      name: "category",
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
    {
      name: "festival",
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

  return (
    <div className="px-[24px] 4xl:container xl:pb-8">
      <InstantSearch
        searchClient={searchClient}
        indexName={indexName}
        onStateChange={onStateChange}
      >
        <div className="flex items-center lg:hidden pb-8 mb-8 border-b border-gray border-dashed">
          <button
            className="flex items-center font-bold text-white bg-black capitalize px-4 py-2 mr-6 whitespace-nowrap"
            onClick={() => handleOpenFilters()}
          >
            {openFilters && <>{translate("search.hide-filters", locale)} </>}
            {!openFilters && <>{translate("search.modify-filters", locale)} </>}
          </button>
          <CustomClearRefinements
            cb={() => handleResetNotification()}
            locale={locale}
            notifyReset={notifyReset}
          />
        </div>

        <div className="lg:flex lg:justify-between">
          <div
            className={`${
              openFilters ? "h-auto" : "h-0 overflow-hidden"
            } lg:overflow-auto lg:h-full lg:w-1/4 lg:shrink-0 lg:sticky lg:top-0 lg:z-[1]`}
          >
            <div className="mb-10 pb-6  border-b border-gray border-dashed max-h-screen">
              <div className="mt-8 lg:mt-0 mb-6">
                <CustomSearchBox
                  resetNotification={notifyReset}
                  locale={locale}
                  section="video"
                />
              </div>
              <div className="mb-6 pb-6 border-b border-gray border-dashed">
                <Stats
                  translations={{
                    rootElementText({ nbHits }) {
                      return `${nbHits} ${translate(
                        "search.results",
                        locale
                      )} `;
                    },
                  }}
                />
              </div>
            </div>

            <div className="hidden lg:block">
              <CustomClearRefinements
                cb={() => handleResetNotification()}
                locale={locale}
                notifyReset={notifyReset}
              />
            </div>

            {filtersOptions.map((filter) => {
              return (
                <div className="my-10">
                  <h3 className="text-md uppercase font-bold mb-6">
                    {translate(`search-filters.${filter.name}`, locale)}
                  </h3>
                  <RefinementList
                    searchable={filter.searchable}
                    attribute={filter.name}
                    searchablePlaceholder={`${translate(
                      "search.placeholder",
                      locale
                    )}...`}
                    operator={filter.operator ? "or" : "and"}
                    limit={filter.limit}
                    showMore={filter.showMore}
                    translations={{
                      showMoreButtonText({ isShowingMore }) {
                        return isShowingMore
                          ? translate("search.show-less", locale)
                          : translate("search.show-more", locale);
                      },
                    }}
                    classNames={{
                      root: "text-xs",
                      list: "my-2",
                      item: "cursor-pointer mb-4 hover:underline",
                      checkbox:
                        "mr-2 h-5 w-5 peer appearance-none  checked:bg-border  before:content-[''] before:z-[1] before:block before:w-5 before:h-5 before:shadow-[0_0_0_2px_#000_inset] before:mr-2",
                      label: "cursor-pointer relative flex items-start ",
                      count:
                        "ml-2 font-normal px-[3px] py-[1px] bg-border rounded-md",
                      selectedItem: "font-bold underline",
                      searchBox: "inline p-2 rounded ",
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="lg:w-3/4 lg:pl-10">
            <div className="pt-10">
              <Results locale={locale} />
            </div>
            <div className="py-10 w-full ">
              <Pagination locale={locale} />
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}
