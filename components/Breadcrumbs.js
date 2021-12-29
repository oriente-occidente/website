/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
];

export default function Example({ background }) {
  return (
    <nav className={`hidden md:block bg-${background} border-y-gray border-y py-2 xl:py-5`} aria-label="Breadcrumb">
      <div className="container flex">
        <ol role="list" className="flex items-center space-x-4">
          {pages.map((page) => (
            <li key={page.name} className="group">
              <div className="flex items-center">
                <a
                  href={page.href}
                  className="text-[12px]"
                  aria-current={page.current ? 'page' : undefined}
                >
                  {page.name}
                </a>
                <div className="group-last:hidden ml-4 bg-arrow-right-black w-5 h-5"></div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
