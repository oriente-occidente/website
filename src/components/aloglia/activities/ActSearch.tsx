"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  RefinementList,
  InstantSearchProps,
  Stats,
  Configure,
} from "react-instantsearch";

import config from "@/data/config";
import translate from "@/lib/locales";
import Pagination from "../Pagination";
import Results from "./ActSearchResults";
import { UiState } from "instantsearch.js/es/types";
import CustomClearRefinements from "../CustomCleearRefinements";
import CustomSearchBox from "../CustomSearchBox";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || ""
);

type MediaSearchPropsType = {
  locale: string;
};

export function AccordionItem({ filter, locale }: any) {
  const [clicked, setClicked] = useState(true);
  const content = useRef(null);
  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 1024) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }, [screenWidth]);

  return (
    <div className="my-5 lg:my-10" key={filter.name}>
      <h3
        className="text-[21px] uppercase border-b pb-4 flex justify-between items-center cursor-pointer"
        onClick={() => handleToggle()}
      >
        <span>{translate(`search-filters.${filter.name}`, locale)}</span>
        <ChevronDownIcon
          aria-hidden="true"
          className={`h-4 w-4 motion-safe:duration-300 ${
            clicked ? "rotate-180" : ""
          }`}
        />
      </h3>
      <div
        ref={content}
        className={`grid motion-safe:transition-[grid-template-rows] motion-safe:duration-300 ${
          clicked ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
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
              list: "",
              item: "cursor-pointer p-2 hover:underline relative overflow-hidden",
              checkbox:
                "peer appearance-none checked:border-b -ml-12 mr-12 pl-8 checked:border-black before:content-[''] before:z-[1] before:block before:w-[14px] before:h-[14px] before:rounded-sm before:border before:border-[2px] before:border-black before:mt-[4px] before:ml-5 ",
              label: "cursor-pointer flex items-start ",
              count:
                "ml-2 font-normal px-[3px] py-[1px] bg-border rounded-md before:content-['('] after:content-[')']",
              selectedItem:
                "font-bold shadow-[0_-1px_0_#000_inset] bg-red-light after:content-[''] after:absolute after:z-10 after:top-[14px] after:left-[17px] after:block after:w-[12px] after:h-[5px] after:border-l-2 after:border-b-2 after:border-black after:-rotate-45 after:shadow-[0_2px_0_#FFF5F5,0_-2px_0_#FFF5F5_inset]",
              searchBox: "inline p-2 rounded ",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Search({ locale }: MediaSearchPropsType) {
  const indexName = `activities`;
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
    <div className="xl:pb-8">
      <InstantSearch
        searchClient={searchClient}
        indexName={indexName}
        onStateChange={onStateChange}
        routing={true}
      >
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
                    section="video"
                  />
                </div>
                <div className="hidden mb-6 pb-6 border-b border-gray border-dashed lg:flex justify-between items-center">
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
                  <AccordionItem
                    key={filter.name}
                    filter={filter}
                    locale={locale}
                  />
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
