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
      <div className="mx-10  border-b border-gray-200 flex justify-between align-center  flex-col-reverse md:flex-row">
        <Tabs
          selected={typeFilter}
          handleSelect={(value) => setTypeFilter(value)}
        />
        <div className="mx-10 flex justify-end">
          <div className="mx-4">FROM</div>
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="mx-4">TO</div>
          <div>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-md">TYPE: {typeFilter}</div>
        <div className="text-md">START: {JSON.stringify(startDate)}</div>
        <div className="text-md">END: {JSON.stringify(endDate)}</div>
      </div>
      <ResultsGrid list={list} locale={locale} />
    </div>
  );
}

export default Filters;
