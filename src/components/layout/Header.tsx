"use client";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import resolveLink from "@/lib/resolveLink";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import MobileNav from "@/components/layout/nav/MobileNav";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
function renderLink(item: any, locale: string) {
  if (item.children && item.children.filter((c: any) => c.link).length > 0) {
    return (
      <Popover className="relative">
        {({ open, close }) => (
          <Fragment>
            <Popover.Button
              className={classNames(
                open ? "text-black" : "text-black",
                "group text-xxs hover:text-red inline-flex items-center rounded-md font-semibold uppercase tracking-widest"
              )}
            >
              <span>{item.title}</span>
              <ChevronDownIcon
                className={classNames(
                  open ? "text-black" : "text-black",
                  "group-hover:text-red ml-1 h-5 w-5"
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
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {item.children
                      .filter((c: any) => c.link)
                      .map((child: any) => {
                        return (
                          <Link
                            key={child.id}
                            href={resolveLink({
                              ...child.link,
                              locale,
                            })}
                            className="-m-3 block rounded-md p-1"
                            onClick={() => close()}
                          >
                            <p className="text-black-light hover:text-red text-sm normal-case">
                              {child.title || "+"}
                            </p>
                          </Link>
                        );
                      })}
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
        <Link
          key={item.id}
          href={resolveLink({ ...item.link, locale })}
          className="text-xxs hover:text-red font-semibold tracking-widest text-black"
        >
          {item.title || "#"}
        </Link>
      </div>
    );
  }
}

function Header(props: any) {
  const { data, locale, slugData } = props;
  // console.log("locale", locale);
  // console.log("slugdata", slugData);
  return (
    <header>
      <Popover className="t-0 fixed inset-x-0 z-40 h-[70px] bg-white/80 md:h-[80px] lg:h-[110px]">
        {({ close: handleClose }) => (
          <>
            <div className="container flex h-full items-center justify-between py-2 sm:px-6 lg:justify-start lg:space-x-10 lg:py-3">
              <div>
                <Link locale={locale} href="/" className="flex">
                  <span className="sr-only">Oriente Occidente</span>
                  <img
                    className="h-10 w-auto object-contain sm:h-12 lg:h-16"
                    src="/new-logo.svg"
                    alt="Oriente Occidente"
                  />
                </Link>
              </div>
              <div className="-my-2 -mr-2 lg:hidden">
                <Popover.Button className="focus:primary inline-flex items-center justify-center bg-transparent p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="text-[12px] font-semibold uppercase tracking-widest text-black md:text-xs">
                    Menu
                  </span>
                  <div
                    className="bg-open ml-2 h-6 w-6 md:ml-4 md:w-8"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
                <Popover.Group
                  as="nav"
                  className="flex space-x-4 uppercase xl:space-x-10"
                >
                  {data?.map((item: any) => (
                    <Fragment key={item.id}>{renderLink(item, locale)}</Fragment>
                  ))}
                </Popover.Group>
                <div className="text-xxs text-black-light  ml-14 pt-1 font-semibold uppercase tracking-widest lg:flex">
                  <LanguageSwitcher currentLocale={locale} slugData={slugData || {}} />
                </div>
              </div>
            </div>
            <MobileNav data={data} locale={locale} handleClose={handleClose} />
          </>
        )}
      </Popover>
    </header>
  );
}
export default Header;
