"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

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

  const reset = useCallback(() => {
    clear();
    setInputValue("");
  }, [clear]);

  useEffect(() => {
    if (props.resetNotification) {
      reset();
    }
  }, [props.resetNotification, reset]);

  function setQuery(newQuery: string) {
    setInputValue(newQuery);
  }

  useEffect(() => {
    if (props.initialQuery) {
      setQuery(props.initialQuery);
      refine(props.initialQuery);
    }
  }, [props.initialQuery, refine]);

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
      <div className="lg:mt-6 block md:flex md:items-cente gap-2 w-full relative">
        <input
          type="search"
          ref={inputRef}
          className="peer/search w-full h-12 py-1 px-4 text-sm text-gray-700 placeholder-gray-600 border rounded-sm focus:shadow-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          autoCorrect="off"
          autoCapitalize="off"
          autoComplete="off"
          spellCheck="false"
          placeholder={placeholder}
          maxLength={512}
          name="search"
          aria-label={translate("search.label", props.locale)}
          id="search"
          value={inputValue}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
          }}
          required={true}
        />
        <button
          type="submit"
          title={translate("search.label", props.locale)}
          className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 px-2 bg-gray-light rounded-sm border border-gray-dark hover:bg-gray"
        >
          <MagnifyingGlassIcon
            aria-hidden="true"
            focusable="false"
            className="h-6 w-6"
          />
        </button>
      </div>
      <span
        role="status"
        aria-live="polite"
        className={isSearchStalled ? "" : "sr-only"}
      >
        {isSearchStalled ? translate("searching", props.locale) : ""}
      </span>
    </form>
  );
}
