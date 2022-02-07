import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import { resolveLinkById } from "lib/utils";
import LanguageSwitcher from "components/LanguageSwitcher";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function renderMobile(data, locale, alts, handleClose) {
  function renderMobileLink(item) {
    if (item.children && item.children.length > 0) {
      return (
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between text-left text-sm font-semibold uppercase md:text-xl">
                {item.title.toUpperCase()}
                <div
                  className={`${
                    open ? "" : "rotate-180"
                  } h-4 w-4 bg-arrow-small-down duration-300  ease-in md:h-8 md:w-8`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                {item.children?.map((child) => (
                  <Link
                    key={child?.id}
                    href={resolveLinkById(child?.link?.id || "/", locale)}
                  >
                    <a
                      onClick={() => handleClose()}
                      className="block text-sm font-normal tracking-wider text-black-light md:py-1 md:text-base"
                    >
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
            <a
              onClick={() => handleClose()}
              className="block text-sm font-semibold uppercase md:text-xl"
            >
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
        className="fixed inset-0 z-50 h-full origin-top-left transform transition lg:hidden"
      >
        <div className="h-full divide-y-2 divide-gray-50 bg-white ring-1 ring-black ring-opacity-5">
          <div className="container py-2">
            <div className="flex items-center justify-between">
              <div>
                <Link locale={locale} href="/" passHref>
                  <a title="homepage">
                    <img
                      className="h-10 w-auto sm:h-12 lg:h-16"
                      src="/logo.svg"
                      alt="Oriente Occidente"
                    />
                  </a>
                </Link>
              </div>
              <div className="-mr-2">
                <Popover.Button className="focus:black inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-inset">
                  <span className="text-[12px] font-semibold uppercase tracking-widest text-black md:text-xs">
                    Close
                  </span>
                  <div
                    className="ml-2 h-6 w-6 bg-close md:ml-4 md:h-8 md:w-8"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>
            </div>
          </div>
          <nav className="py-6 px-5">
            <div className="grid gap-4 md:gap-8">
              {data?.map((item) => (
                <Fragment key={item.id}>{renderMobileLink(item)}</Fragment>
              ))}
            </div>
            <div className="mt-16 border-t border-black pt-4 text-xxs uppercase tracking-widest md:mt-28 md:pt-10 md:text-base">
              <LanguageSwitcher locale={locale} alts={alts} />
            </div>
          </nav>
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
                  open ? "text-black" : "text-black",
                  "group inline-flex items-center rounded-md text-xxs font-semibold uppercase tracking-widest hover:text-red"
                )}
              >
                <span>{item.title}</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-black" : "text-black",
                    "ml-1 h-5 w-5 group-hover:text-red"
                  )}
                  aria-hidden="true"
                  focusable="false"
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
                <Popover.Panel className="absolute left-1/2 z-50 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={resolveLinkById(child.link?.id, locale)}
                        >
                          <a
                            className="-m-3 block rounded-md p-1"
                            onClick={() => close()}
                          >
                            <p className="text-sm normal-case text-black-light hover:text-red">
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
        <div className="relative">
          <Link key={item.id} href={resolveLinkById(item.link?.id, locale)}>
            <a className="text-xxs font-semibold tracking-widest text-black hover:text-red">
              {item.title}
            </a>
          </Link>
        </div>
      );
    }
  }

  return (
    <header>
      <Popover className="t-0 fixed inset-x-0 z-40 h-[70px] bg-white/80 md:h-[80px] lg:h-[110px]">
        {({ open, close: handleClose }) => (
          <>
            <div className="container flex h-full items-center justify-between py-2 sm:px-6 lg:justify-start lg:space-x-10 lg:py-3">
              <div>
                <Link locale={locale} href="/" passHref>
                  <a href="#" className="flex">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-10 w-auto object-contain sm:h-12 lg:h-16"
                      src="/logo.svg"
                      alt="Oriente Occidente"
                    />
                  </a>
                </Link>
              </div>
              <div className="-my-2 -mr-2 lg:hidden">
                <Popover.Button className="focus:primary inline-flex items-center justify-center bg-transparent p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="text-[12px] font-semibold uppercase tracking-widest text-black md:text-xs">
                    Menu
                  </span>
                  <div
                    className="ml-2 h-6 w-6 bg-open md:ml-4 md:w-8"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
                <Popover.Group
                  as="nav"
                  className="flex space-x-4 uppercase xl:space-x-10"
                >
                  {data?.map((item) => (
                    <Fragment key={item.id}>{renderLink(item)}</Fragment>
                  ))}
                </Popover.Group>
                <div className="ml-14 pt-1 text-xxs font-semibold uppercase tracking-widest text-black-light hover:text-red lg:flex">
                  <LanguageSwitcher locale={locale} alts={alts} />
                </div>
              </div>
            </div>
            {renderMobile(data, locale, alts, handleClose)}
          </>
        )}
      </Popover>
    </header>
  );
}
export default Header;
