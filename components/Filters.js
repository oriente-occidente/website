import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Tabs from 'components/Tabs';
import ResultsGrid from 'components/ResultsGrid';

function Filters({ locale, list }) {
  const [typeFilter, setTypeFilter] = useState('festival-events');
  return (
    <div className="mt-10">
      <div className="mx-10  border-b border-gray-200 flex justify-between align-center  flex-col-reverse md:flex-row">
        <Tabs
          current={typeFilter}
          handleSelect={(value) => setTypeFilter(value)}
        />
        <button className="form__button">DATE</button>
      </div>
      <ResultsGrid list={list} locale={locale} />
    </div>
  );
}

export default Filters;
