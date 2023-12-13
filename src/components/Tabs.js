"use client";
import { useState, useEffect } from "react";
import translate from "@/lib/locales";

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

export default function Tabs({ selected, handleSelect, locale, catLengths }) {
  const [current, setCurrent] = useState("festivalEvents");
  function handleChange(value) {
    if (value && handleSelect) {
      handleSelect(value);
    }
  }

  useEffect(() => {
    if (selected) {
      setCurrent(selected);
    }
  }, [selected]);

  const filteredTabs = tabs.filter(
    (tab) => tab.slug === "all" || catLengths[tab.slug] > 0
  );

  return (
    <>
      <div className="container mx-auto px-0">
        <nav
          className="-mb-px flex flex-wrap lg:flex-nowrap w-full"
          aria-label="Tabs"
        >
          {filteredTabs.map((tab) => {
            const { slug, name, description } = tab;
            const isActive = slug === current;
            return (
              <div
                key={slug}
                className={`${
                  isActive
                    ? "border-black border-b bg-red-light"
                    : "border-transparent border-b"
                } px-8 pt-4 text-base w-full cursor-pointer`}
              >
                <a
                  onClick={() => handleChange(slug)}
                  className={`${
                    isActive ? "bg-red-light" : ""
                  } whitespace-nowrap pt-4 text-xs font-medium tracking-wider`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <p
                    className={`${
                      isActive
                        ? "font-semibold text-black"
                        : "text-gray-dark hover:text-black"
                    }`}
                  >
                    {translate(name, locale)}
                  </p>
                  <p className="text-left text-3xs pb-4">
                    {translate(description, locale)}
                  </p>
                </a>
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
}
