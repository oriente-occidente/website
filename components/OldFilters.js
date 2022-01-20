import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Tabs from 'components/Tabs';
import ResultsGrid from 'components/ResultsGrid';

function Filters({ locale, list }) {
  const [typeFilter, setTypeFilter] = useState('festival-events');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="mt-10">
      <div className="xl:border-b border-gray">
        <div className="xl:flex xl:justify-between xl:container xl:mx-auto">
          <Tabs
            selected={typeFilter}
            handleSelect={(value) => setTypeFilter(value)}
          />
          <div className="md:border-b xl:border-none md:border-gray md:pt-4 md:pb-8 xl:pt-0 xl:pb-0">
            <div className="pt-4 xl:pt-2 px-4 md:px-6 md:flex md:justify-between">
              <div className="relative md:flex md:items-center">
                <div className="block w-full px-0 text-xxs tracking-wider font-semibold md:mr-3">
                  FROM
                </div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="relative md:flex md:items-center">
                <div className="pt-4 md:pt-0 block w-full px-0 text-xxs tracking-wider font-semibold md:mr-3 xl:ml-8">
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
