import Link from 'next/link';
import { Fragment } from 'react';
import { Popover, Transition, Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

import { resolveLinkById } from 'lib/utils';
import LanguageSwitcher from 'components/LanguageSwitcher';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function renderMobile(data, locale, alts) {
  function renderMobileLink(item) {
    if (item.children && item.children.length > 0) {
      return (
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="text-left flex items-center justify-between text-sm font-semibold uppercase md:text-xl">
                {item.title.toUpperCase()}
                <div className={`${open ? "" : "rotate-180"} w-4 h-4 md:w-8 md:h-8  bg-arrow-small-down ease-in duration-300`}/>
              </Disclosure.Button>
              <Disclosure.Panel>
                {item.children?.map((child) => (
                  <Link
                    key={child?.id}
                    href={resolveLinkById(child?.link?.id, locale)}
                  >
                    <a className="text-black-light text-sm block font-normal tracking-wider md:py-1 md:text-base">
                      {child.title}
                    </a>
                  </Link>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      );
    } else {
      return (
        <div>
          <Link key={item.id} href={resolveLinkById(item.link?.id, locale)}>
            <a className="block text-sm font-semibold uppercase md:text-xl">
              {item.title}
            </a>
          </Link>
        </div>
      );
    }
  }
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="fixed z-50 inset-0 h-full transition transform origin-top-left lg:hidden"
      >
        <div className="h-full ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="container py-2">
            <div className="flex items-center justify-between">
              <div>
                <Link locale={locale} href="/" passHref>
                  <a title="homepage">
                    <img
                      className="h-10 w-auto sm:h-12 lg:h-16"
                      src="/oo_logo.jpg"
                      alt="Oriente Occidente"
                    />
                  </a>
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:black">
                  <span className="text-[12px] md:text-xs font-semibold uppercase tracking-widest text-black">
                    Close
                  </span>
                  <div
                    className="ml-2 h-6 w-6 md:h-8 md:w-8 md:ml-4 bg-close"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="py-6 px-5">
            <div className="grid gap-4 md:gap-8">
              {data?.map((item) => (
                <Fragment key={item.id}>{renderMobileLink(item)}</Fragment>
              ))}
            </div>
            <div className="uppercase text-xxs tracking-widest mt-16 md:mt-28 pt-4 md:pt-10 border-t border-black md:text-base">
              <LanguageSwitcher locale={locale} alts={alts} />
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}

function Header(props) {
  const { data, locale, alts } = props;
  function renderLink(item) {
    if (item.children && item.children.length > 0) {
      return (
        <Popover className="relative">
          {({ open, close }) => (
            <Fragment>
              <Popover.Button
                className={classNames(
                  open ? 'text-black' : 'text-black',
                  'uppercase text-xxs tracking-widest group bg-white rounded-md inline-flex items-center font-semibold hover:text-gray-900 focus:outline-none '
                )}
              >
                <span>{item.title}</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? 'text-black' : 'text-black',
                    'ml-1 h-5 w-5 group-hover:text-gray-500'
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={resolveLinkById(child.link?.id, locale)}
                        >
                          <a
                            className="-m-3 p-1 block rounded-md hover:bg-gray-50"
                            onClick={() => close()}
                          >
                            <p className="font-medium tracking-wider normal-case text-black-light">
                              {child.title}
                            </p>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Fragment>
          )}
        </Popover>
      );
    } else {
      return (
        <Link key={item.id} href={resolveLinkById(item.link?.id, locale)}>
          <a className="font-semibold text-black tracking-widest text-xxs hover:text-gray-900">
            {item.title}
          </a>
        </Link>
      );
    }
  }

  return (
    <header>
      <Popover className="relative bg-white">
        <div className="container flex justify-between items-center py-2 lg:py-3 sm:px-6 lg:justify-start lg:space-x-10">
          <div>
            <Link locale={locale} href="/" passHref>
              <a href="#" className="flex">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-10 w-auto sm:h-12 lg:h-16"
                  src="/oo_logo.jpg"
                  alt="Oriente Occidente"
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:primary">
              <span className="text-[12px] md:text-xs font-semibold uppercase tracking-widest text-black">
                Menu
              </span>
              <div
                className="ml-2 h-6 w-6 md:w-8 md:ml-4 bg-open"
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
          <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-end">
            <Popover.Group as="nav" className="flex space-x-10 uppercase">
              {data?.map((item) => (
                <Fragment key={item.id}>{renderLink(item)}</Fragment>
              ))}
            </Popover.Group>
            <div className="ml-14 font-semibold uppercase lg:flex text-black-light tracking-widest text-xxs hover:text-black-light">
              <LanguageSwitcher locale={locale} alts={alts} />
            </div>
          </div>
        </div>
        {renderMobile(data, locale, alts)}
      </Popover>
    </header>
  );
}
export default Header;
