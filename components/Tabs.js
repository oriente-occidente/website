import { useState, useEffect } from 'react';

const tabs = [
  { name: 'All', slug: 'all' },
  { name: 'Festival', slug: 'festival-events' },
  { name: 'Events', slug: 'other-events' },
  { name: 'Workshop', slug: 'workshops' },
  { name: 'Courses', slug: 'courses' },
];

export default function Tabs({ selected, handleSelect }) {
  const [current, setCurrent] = useState('festival-events');
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
      <div className="sm:hidden px-4">
        <div className="border-b border-black">
          <label htmlFor="tabs" className="sr-only">
            -
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full py-2 px-0 text-xxs tracking-wider font-semibold border-none focus:outline-none"
            defaultValue={current}
            onChange={(e) => handleChange(e.target.value)}
          >
            {tabs.map((tab) => (
              <option key={tab.slug}>{tab.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="hidden sm:block md:border-b border-gray xl:border-none">
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
                      ? 'border-black text-black uppercase font-semibold'
                      : 'border-transparent text-gray-dark hover:text-black hover:border-gray-300'
                  } whitespace-nowrap text-xxs tracking-wider py-4 px-1 border-b-2 font-medium`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}

{/* <div className="md:border-b border-gray">
<div className="container">
  <div className="sm:hidden">
    <label htmlFor="tabs" className="sr-only">
      Select a tab
    </label>
    <select
      id="tabs"
      name="tabs"
      className="block w-full py-2 text-xxs tracking-wider font-semibold border-b border-black focus:outline-none focus:ring-gray focus:border-gray"
      defaultValue={tabs.find((tab) => tab.current).name}
    >
      {tabs.map((tab) => (
        <option key={tab.name}>{tab.name}</option>
      ))}
    </select>
  </div>
  <div className="hidden sm:block">
    <div className="">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            href={tab.href}
            className={classNames(
              tab.current
                ? 'border-black text-black uppercase font-semibold'
                : 'border-transparent text-gray-dark hover:text-black hover:border-gray-300',
              'whitespace-nowrap text-xxs tracking-wider py-4 px-1 border-b-2 font-medium'
            )}
            aria-current={tab.current ? 'page' : undefined}
          >
            {tab.name}
          </a>
        ))}
      </nav>
    </div> */}
