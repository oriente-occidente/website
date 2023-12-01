"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDownIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import translate from "@/lib/locales";

export default function TimelineTabs({ nav, locale }) {
  const [openYears, setOpenYars] = useState(false);
  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = stickyRef.current;

      if (element) {
        const isSticky = window.scrollY > 125;
        if (isSticky) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div
      ref={stickyRef}
      // className={`sticky top-[-1px] pt-[70px] md:pt-[80px] lg:pt-[120px] lg:pr-14 z-10 lg:h-[650px] `}
      className={`sticky top-[70px] md:top-[80px] lg:top-[120px] lg:pr-14 z-10 lg:h-[650px] `}
    >
      <nav className="lg:mt-[-1px]">
        <button
          // href=""
          tabIndex="0"
          className="w-full bg-white border text-base p-2 md:p-4  md:col-span-3 cursor-pointer lg:cursor-default flex justify-between items-center hover:bg-red-light motion-safe:duration-300 lg:hover:bg-transparent "
          onClick={() => setOpenYars(!openYears)}
        >
          <div className="text-xs md:text-base">{translate("year", locale)}</div>
          <ChevronDownIcon
            aria-hidden="true"
            className={`h-4 w-4 lg:hidden motion-safe:duration-300 ${openYears ? "rotate-180" : ""}`}
          />
        </button>
        <div
          className={` absolute w-full lg:relative motion-safe:transition-[grid-template-rows] motion-safe:duration-500 grid  ${openYears ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            } lg:grid-rows-[1fr]`}
        >
          <div className="overflow-hidden -mx-1">
            <ul className="bg-white shadow-xl lg:shadow-none border-l lg:border border-b-0 lg:mt-[-1px] text-base grid grid-cols-2 md:grid-cols-3 lg:block mx-1">
              {nav.map((item) => {
                return (
                  <li
                    key={item.year}
                    className="border-b border-r lg:border-r-0"
                    onClick={() => setOpenYars(!openYears)}
                  >
                    <Link
                      tabIndex={openYears ? "0" : "-1"}
                      href={`#${item.year}`}
                      className={`w-full p-2 md:p-4 flex justify-between items-center hover:bg-red-light motion-safe:duration-300 text-xs md:text-base ${isSticky ? "lg:text-sm lg:py-2" : "lg:text-base lg:p-4"} `}

                    >
                      {item.year}
                      <ArrowLongRightIcon
                        aria-hidden="true"
                        className="h-5 w-5 rotate-90 lg:rotate-0"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <div className="hidden lg:flex items-center justify-center absolute top-32 right-0 translate-x-1/2 w-20 h-20 rounded-full bg-white border border-red">
        <ArrowLongRightIcon
          aria-hidden="true"
          className="h-6 w-6 rotate-90"
          color="#e64011"
        />
      </div>
    </div>
  );
}