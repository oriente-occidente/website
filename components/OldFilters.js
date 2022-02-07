import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Tabs from "components/Tabs";
import ResultsGrid from "components/ResultsGrid";

function Filters({ locale, list }) {
  const [typeFilter, setTypeFilter] = useState("festival-events");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="mt-10">
      <div className="border-gray xl:border-b">
        <div className="xl:container xl:mx-auto xl:flex xl:justify-between">
          <Tabs
            selected={typeFilter}
            handleSelect={(value) => setTypeFilter(value)}
          />
          <div className="md:border-b md:border-gray md:pt-4 md:pb-8 xl:border-none xl:pt-0 xl:pb-0">
            <div className="px-4 pt-4 md:flex md:justify-between md:px-6 xl:pt-2">
              <div className="relative md:flex md:items-center">
                <div className="block w-full px-0 text-xxs font-semibold tracking-wider md:mr-3">
                  FROM
                </div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="relative md:flex md:items-center">
                <div className="block w-full px-0 pt-4 text-xxs font-semibold tracking-wider md:mr-3 md:pt-0 xl:ml-8">
                  TO
                </div>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-10">
        <div className="text-md">TYPE: {typeFilter}</div>
        <div className="text-md">START: {JSON.stringify(startDate)}</div>
        <div className="text-md">END: {JSON.stringify(endDate)}</div>
      </div> */}
      <ResultsGrid list={list} locale={locale} />
    </div>
  );
}

export default Filters;
