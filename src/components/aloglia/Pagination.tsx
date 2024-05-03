"use client";
import { useState, useEffect } from "react";
import { Pagination } from "react-instantsearch";
import translate from "@/lib/locales";

type SharedPaginationProps = {
  locale: string;
  isMainSearch?: boolean;
  resLength?: number;
};

export default function SharedPagination({
  locale,
  isMainSearch = false,
  resLength,
}: SharedPaginationProps) {
  const [visiblePages, setVisiblePages] = useState(3);
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 479px)");
    const tablet = window.matchMedia("(max-width: 797px)");

    if (mobile.matches) {
      setVisiblePages(1);
    } else if (tablet.matches) {
      setVisiblePages(2);
    }
  },[setVisiblePages]);

  const firstLastClass = isMainSearch ? "hidden" : "hidden md:block";
  const prevNextClass = resLength && resLength <= 3 ? "hidden" : "";
  return (
    <Pagination
      onClick={() => {
        scrollTo(0, 0);
      }}
      padding={visiblePages}
      classNames={{
        root: "",
        list: "flex justify-center lg:justify-start",
        item: "mx-2 group",
        selectedItem:
          "[&_a]:bg-black [&_a]:border-black [&_a]:hover:shadow-[0_3px_6px_0px_rgba(0,0,0,0.3)] text-white font-bold",
        firstPageItem: firstLastClass,
        previousPageItem: prevNextClass,
        pageItem: "",
        disabledItem: "",
        nextPageItem: prevNextClass,
        lastPageItem: firstLastClass,
        link: "py-1 px-2 sm:py-2 sm:px-4 border-[1px] text-sm sm:text-base font-bold rounded-sm hover:border-black py-2 px-4 ",
      }}
      // translations={{
      //   firstPageItemText: translate(
      //     "search-pagination.firstPageItemText",
      //     locale
      //   ),
      //   previousPageItemText: translate(
      //     "search-pagination.previousPageItemText",
      //     locale
      //   ),
      //   nextPageItemText: translate(
      //     "search-pagination.nextPageItemText",
      //     locale
      //   ),
      //   lastPageItemText: translate(
      //     "search-pagination.lastPageItemText",
      //     locale
      //   ),
      //   pageItemText: ({ currentPage, nbPages }) => `${currentPage}`,
      //   firstPageItemAriaLabel: translate(
      //     "search-pagination.firstPageItemAriaLabel",
      //     locale
      //   ),
      //   previousPageItemAriaLabel: translate(
      //     "search-pagination.previousPageItemAriaLabel",
      //     locale
      //   ),
      //   nextPageItemAriaLabel: translate(
      //     "search-pagination.nextPageItemAriaLabel",
      //     locale
      //   ),
      //   lastPageItemAriaLabel: translate(
      //     "search-pagination.lastPageItemAriaLabel",
      //     locale
      //   ),
      //   pageItemAriaLabel: ({ currentPage, nbPages }) =>
      //     `${translate(
      //       "search-pagination.gotoPage",
      //       locale
      //     )} ${currentPage} ${translate(
      //       "search-pagination.of",
      //       locale
      //     )} ${nbPages}`,
      // }}
    />
  );
}
