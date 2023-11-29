import { useState } from "react";
import translate from "@/lib/locales";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export default function AnchorBlock({ data, locale }) {
  const [activeTab, setActiveTab] = useState(translate("program", locale));

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="lg:border-t-black border-b border-t">
      <div className="container mx-auto px-0">
        <div className="flex flex-col md:flex-row md:flex-nowrap text-left items-center px-0 mx-0">
          <div
            className={`flex flex-grow justify-between py-4 px-5 text-base w-full md:w-1/2 ${
              activeTab == translate("program", locale)
                ? "bg-red-light font-semibold border-b border-black lg:border-none"
                : ""
            }`}
          >
            <a onClick={() => handleTabClick(translate("program", locale))}>
              {translate("program", locale)}
            </a>
            <ArrowLongRightIcon
              aria-hidden="true"
              className="h-6 w-6 rotate-90"
              color="black"
            />
          </div>
          <div
            className={`flex flex-grow justify-between py-4 px-5 text-base w-full md:w-1/2 ${
              activeTab == translate("news", locale)
                ? "bg-red-light font-semibold border-b border-black lg:border-none"
                : ""
            }`}
          >
            <a onClick={() => handleTabClick(translate("news", locale))}>
              {translate("news", locale)}
            </a>
            <ArrowLongRightIcon
              aria-hidden="true"
              className="h-6 w-6 rotate-90"
              color="black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
