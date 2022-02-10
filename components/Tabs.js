import { useState, useEffect } from 'react';
import translate from 'lib/locales';

const tabs = [
  { name: 'tab_festival', slug: 'all' },
  { name: 'tab_events', slug: 'festivalEvents' },
  { name: 'tab_workshops', slug: 'workshops' },
  // { name: 'tab_courses', slug: 'courses' },
  // { name: 'tab_talks', slug: 'courses' },
];

export default function Tabs({ selected, handleSelect, locale }) {
  const [current, setCurrent] = useState('festivalEvents');
  function handleChange(value) {
    if (value && handleSelect) {
      handleSelect(value);
    }
  }

  useEffect(() => {
    if (selected) {
      setCurrent(selected);
    }
  }, [selected]);

  return (
    <div>
      <div aria-hidden className="px-4 sm:hidden">
        <div className="border-b border-black">
          <label htmlFor="tabs" className="sr-only">
            -
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full border-none py-2 px-0 text-xxs font-semibold tracking-wider focus:outline-none"
            defaultValue={current}
            onChange={(e) => handleChange(e.target.value)}
          >
            {tabs.map((tab) => (
              <option key={tab.slug} value={tab.slug}>
                {tab.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="hidden border-gray sm:block md:border-b xl:border-none">
        <div className="px-4 md:px-6">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => {
              const { slug, name } = tab;
              const isActive = slug === current;
              return (
                <button
                  onClick={() => handleChange(slug)}
                  key={slug}
                  className={`${
                    isActive
                      ? 'border-black font-semibold uppercase text-black'
                      : 'border-transparent text-gray-dark hover:border-gray-300 hover:text-black'
                  } whitespace-nowrap border-b-2 py-4 px-1 text-xxs font-medium tracking-wider`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {translate(name, locale)}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
