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
    <div className="border-b ">
      <div className="container mx-auto px-0">
        <div className="flex flex-col md:flex-row md:flex-nowrap text-left items-center px-0 mx-0">
          <a
            href="#program"
            onClick={() => handleTabClick(translate("program", locale))}
            className={`flex flex-grow justify-between py-4 px-5 text-base w-full md:w-1/2 ${
              activeTab == translate("program", locale)
                ? "bg-red-light font-semibold border-b border-black lg:border-none"
                : ""
            }`}
          >
            <p>{translate("program", locale)}</p>
            <ArrowLongRightIcon
              aria-hidden="true"
              className="h-6 w-6 rotate-90"
              color="black"
            />
          </a>
          <a
            href="#news"
            onClick={() => handleTabClick(translate("news", locale))}
            className={`flex flex-grow justify-between py-4 px-5 text-base w-full md:w-1/2 ${
              activeTab == translate("news", locale)
                ? "bg-red-light font-semibold border-b border-black lg:border-none"
                : ""
            }`}
          >
            <p>{translate("news", locale)}</p>
            <ArrowLongRightIcon
              aria-hidden="true"
              className="h-6 w-6 rotate-90"
              color="black"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
