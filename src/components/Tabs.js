"use client";
import { useState, useEffect } from "react";
import translate from "@/lib/locales";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";

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
  function onKeydown(e, slug) {
    if (e.key === "Enter") {
      setCurrent(slug)
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
        <nav aria-label="Tabs">
          <Tab.Group  onChange={handleChange(current)}>
            <Tab.List className="-mb-px flex flex-wrap lg:flex-nowrap w-full">
              {filteredTabs.map((tab) => {
                const { slug, name, description } = tab;
                const isActive = slug === current;
                return (
                  <Tab key={slug} as={Fragment}>
                    {({ selected }) => (
                      <button
                        onClick={() => setCurrent(slug)}
                        onKeyDown={(e) => onKeydown(e,slug)}
                        className={`group w-full border-transparent border-b text-left px-8 pt-4 hover:!border-black
                          ${
                            selected
                              ? "font-semibold text-blac !border-black"
                              : "text-gray-dark hover:text-black "
                          }
                          ${
                            isActive
                              ? "bg-red-light !border-black font-semibold"
                              : ""
                          }
                          `}
                      >
                        <p
                          className={`${
                            isActive
                              ? "font-semibold text-black"
                              : "text-gray-dark group-hover:text-black group-hover:font-semibold"
                          }`}
                        >
                          {translate(name, locale)}
                        </p>
                        <p className="text-left text-3xs pb-4">
                          {translate(description, locale)}
                        </p>
                      </button>
                    )}
                  </Tab>
                );
              })}
            </Tab.List>
          </Tab.Group>
        </nav>
      </div>

      {/* <div className="container mx-auto px-0">
        <div
          className="-mb-px flex flex-wrap lg:flex-nowrap w-full"
          aria-label="Tabs"
          role="tablist"
        >
          {filteredTabs.map((tab, i) => {
            const { slug, name, description } = tab;
            const isActive = slug === current;
            return (
              // <li  className={` w-full`}>
              <button
                key={slug}
                tabIndex={isActive }
                onClick={() => handleChange(slug)}
                onKeyDown={() => handleChange(slug)}
                className={`${
                  isActive
                    ? "bg-red-light border-black border-b bg-red-light"
                    : "border-transparent border-b"
                } whitespace-nowrap block w-full text-xs font-medium tracking-wider text-left px-8 py-4 cursor-pointer`}
                role="tab"
                aria-selected={isActive}
                aria-current={isActive ? "page" : undefined}
              >
                <p
                  className={`${
                    isActive
                      ? "font-semibold text-black"
                      : "text-gray-dark hover:text-black hover:font-semibold"
                  }`}
                >
                  {translate(name, locale)}
                </p>
                <p className="text-left text-3xs">
                  {translate(description, locale)}
                </p>
              </button>
              // </li>
            );
          })}
        </div>
      </div> */}
    </>
  );
}
