"use client";
import React, { useState, useRef, useEffect } from "react";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch";
import translate from "@/lib/locales";

type ResetBoxProops = {
  resetNotification: boolean;
  locale: any;
  section?: string;
  customPlaceholder?: string;
  initialQuery?: string;
  replaceUrl?: boolean;
};
type SearchBoxCustomProps = UseSearchBoxProps & ResetBoxProops;

export default function CustomSearchBox(props: SearchBoxCustomProps) {
  const { query, refine, clear, isSearchStalled } = useSearchBox(props);
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);

  function reset() {
    clear();
    setInputValue("");
  }

  useEffect(() => {
    if (props.resetNotification) {
      reset();
    }
  }, [props.resetNotification]);

  function setQuery(newQuery: string) {
    setInputValue(newQuery);
  }

  useEffect(() => {
    if (props.initialQuery) {
      setQuery(props.initialQuery);
      refine(props.initialQuery);
    }
  }, [props.initialQuery]);

  const placeholder = props.customPlaceholder
    ? props.customPlaceholder
    : translate(
        `search.${props.section ? props.section + "-" : ""}placeholder`,
        props.locale
      );
  return (
    <form
      action=""
      role="search"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        if (props.replaceUrl) {
          const url = window.location.href.split("?")[0];
          window.location.href = url + "?query=" + inputValue;
        } else {
          refine(inputValue);
          if (inputRef.current) {
            inputRef.current.blur();
          }
        }
      }}
      onReset={(event) => {
        event.preventDefault();
        event.stopPropagation();

        setQuery("");

        if (inputRef.current) {
          inputRef.current.focus();
        }
      }}
    >
      <label htmlFor="search" className="text-base lg:text-lg">
        {translate("search.title", props.locale)}
      </label>
      <div className="lg:mt-6 block md:flex md:items-center w-full relative">
        <input
          type="search"
          ref={inputRef}
          className="peer/search w-full h-12 py-1 px-4 text-sm text-gray-700 placeholder-gray-600 border rounded-sm focus:shadow-outline"
          autoCorrect="off"
          autoCapitalize="off"
          autoComplete="off"
          spellCheck="false"
          placeholder={placeholder}
          maxLength={512}
          name="search"
          aria-label={translate("layout.search_label", props.locale)}
          id="search"
          value={inputValue}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
          }}
          required={true}
          autoFocus
        />
        <button
          type="submit"
          title={translate("layout.search_label", props.locale)}
          className="absolute top-1 bottom-1 right-10 peer-placeholder-shown/search:right-4 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        ></button>
      </div>
      <span hidden={!isSearchStalled}>
        {translate("search.searching", props.locale)}
      </span>
    </form>
  );
}
