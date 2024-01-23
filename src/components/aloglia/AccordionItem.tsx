"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { RefinementList } from "react-instantsearch";

import translate from "@/lib/locales";

export default function AccordionItem({ filter, locale }: any) {
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
      <button
        className="w-full text-[21px] uppercase border-b pb-4 flex justify-between items-center cursor-pointer"
        onClick={() => handleToggle()}
      >
        <span>{translate(`search-filters.${filter.name}`, locale)}</span>
        <ChevronDownIcon
          aria-hidden="true"
          className={`h-4 w-4 motion-safe:duration-300 ${clicked ? "rotate-180" : ""}`}
        />
      </button>
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
            searchablePlaceholder={`${translate("search.placeholder", locale)}...`}
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
