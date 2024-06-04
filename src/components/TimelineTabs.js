"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDownIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import translate from "@/lib/locales";

export default function TimelineTabs({ nav, locale }) {
  const [openYears, setOpenYars] = useState(false);
  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(max-width: 1024px)")
    setIsMobile(mediaWatcher.matches);

    function updateIsMobile(e) {
      setIsMobile(e.matches);
    }
    if(mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', updateIsMobile)
      return function cleanup() {
        mediaWatcher.removeEventListener('change', updateIsMobile)
      }
    } else {
      mediaWatcher.addListener(updateIsMobile)
      return function cleanup() {
        mediaWatcher.removeListener(updateIsMobile)
      }
    }
  },[isMobile])

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={stickyRef}
      // className={`sticky top-[-1px] pt-[70px] md:pt-[80px] lg:pt-[120px] lg:pr-14 z-10 lg:h-[650px] `}
      className={`sticky top-[70px] md:top-[80px] lg:top-[120px] lg:pr-14 z-10 lg:h-[calc(100vh-130px)] `}
    >
      <nav className="relative lg:h-full lg:overflow-auto">
        <div className="hidden lg:flex w-full bg-white border text-base p-2 md:p-4  md:col-span-3 cursor-pointer lg:cursor-default  justify-between items-center hover:bg-red-light motion-safe:duration-300 lg:hover:bg-transparent ">
          <div className="text-xs md:text-base">
            {translate("year", locale)}
          </div>
        </div>
        <button
          tabIndex="0"
          className="lg:hidden w-full bg-white border text-base p-2 md:p-4  md:col-span-3 cursor-pointer lg:cursor-default flex justify-between items-center hover:bg-red-light motion-safe:duration-300 lg:hover:bg-transparent "
          onClick={() => setOpenYars(!openYears)}
        >
          <div className="text-xs md:text-base">
            {translate("year", locale)}
          </div>
          <ChevronDownIcon
            aria-hidden="true"
            focusable="false"
            className={`h-4 w-4 lg:hidden motion-safe:duration-300 ${
              openYears ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`absolute w-full lg:relative motion-safe:transition-[grid-template-rows] motion-safe:duration-500 grid  ${
            openYears ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          } lg:grid-rows-[1fr]`}
        >
          <div className="overflow-auto h-full lg:overflow-visible ">
            <ul className="bg-white shadow-xl lg:shadow-none border-l lg:border border-b-0 lg:mt-[-1px] text-base grid grid-cols-2 md:grid-cols-3 lg:block">
              {nav.map((item) => {
                return (
                  <li
                    key={item.year}
                    className="border-b border-r lg:border-r-0"
                    onClick={() => setOpenYars(!openYears)}
                  >
                    <Link
                      tabIndex={!isMobile ? "0" : openYears ? "0" : "-1"}
                      href={`#${item.year}`}
                      // className={`w-full p-2 md:p-4 flex justify-between items-center hover:bg-red-light motion-safe:duration-300 text-xs md:text-base ${isSticky ? "lg:text-sm lg:py-2" : "lg:text-base lg:p-4"} `}
                      className={`w-full p-2 md:p-4 flex justify-between items-center hover:bg-red-light motion-safe:duration-300 text-xs md:text-base lg:text-sm lg:py-2`}
                    >
                      {item.year}
                      <ArrowLongRightIcon
                        aria-hidden="true"
                        focusable="false"
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
          focusable="false"
          className="h-6 w-6 rotate-90"
          color="#e64011"
        />
      </div>
    </div>
  );
}
