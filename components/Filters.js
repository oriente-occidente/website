import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Tabs from 'components/Tabs';
import PreviewCard from 'components/cards/PreviewCard';
import { useFestivalByDate } from 'lib/api/queryHooks';

function Filters({ locale, list }) {
  const currentYear = new Date().getFullYear();
  const years = [`${currentYear}`, `${currentYear - 1}`, `${currentYear - 2}`];
  const [typeFilter, setTypeFilter] = useState('festivalEvents');
  const [year, setYear] = useState(currentYear);
  const { data, error, loading } = useFestivalByDate(locale, year);

  function handleChange(e) {
    const value = e.target?.value;
    if (!value) return;
    setYear(value);
  }
  function filterData(data, list, typeFilter) {
    const results = data ? data : list;
    if (typeFilter === 'all') {
      return Object.keys(results)?.reduce((all, key) => {
        return [...all, ...results[key]];
      }, []);
    } else {
      return results[typeFilter];
    }
  }
  const resultList = filterData(data, list, typeFilter);
  console.log(resultList);
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
                  YEAR
                </div>
                <select
                  onChange={(e) => handleChange(e)}
                  defaultValue={currentYear}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-md">TYPE: {typeFilter}</div>
        <div className="text-md">YEAR: {year}</div>
      </div>

      <div className="my-4">
        <div className="container lg:grid lg:grid-cols-2 lg:gap-6">
          {resultList?.map((item) => (
            <PreviewCard locale={locale} data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
