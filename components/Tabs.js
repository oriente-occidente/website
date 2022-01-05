import { useState, useEffect } from 'react';

const tabs = [
  { name: 'All', slug: 'all' },
  { name: 'Festival', slug: 'festival-events' },
  { name: 'Events', slug: 'other-events' },
  { name: 'Workshop', slug: 'workshops' },
  { name: 'Courses', slug: 'courses' },
];

export default function Tabs({ current = 'festival-events', handleSelect }) {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>

        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-md"
          defaultValue={current}
          onChange={(e) => handleSelect(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.slug}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div>
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                onClick={() => handleSelect(tab.slug)}
                key={tab.slug}
                className={
                  (current == tab.slug
                    ? 'text-primary uppercase'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm')
                }
                aria-current={current == tab.slug ? 'page' : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
