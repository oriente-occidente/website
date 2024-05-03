"use client";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ArrowLongRightIcon } from "@heroicons/react/20/solid";
import resolveLink from "@/lib/resolveLink";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import MobileNav from "@/components/layout/nav/MobileNav";
import Image from "next/image";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
function renderLink(item: any, locale: string) {
  if (item.children && item.children.filter((c: any) => c.link).length > 0) {
    return (
      <Popover className="relative ">
        {({ open, close }) => (
          <Fragment>
            <Popover.Button
              className={classNames(
                open ? "text-black" : "text-black",
                "group text-xxs hover:bg-red-light inline-flex items-center font-semibold uppercase tracking-widest px-2 py-1"
              )}
            >
              <span>{item.title}</span>
              <ChevronDownIcon
                className={classNames(
                  open ? "text-black" : "text-black",
                  " ml-1 h-5 w-5"
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
                <div className="overflow-hidden shadow-lg">
                  <div className="relative grid bg-white divide-y divide-black">
                    {item.children
                      .filter((c: any) => c.link && c.slug !== null)
                      .map((child: any) => {
                        return (
                          <Link
                            key={child.id}
                            href={resolveLink({
                              ...child.link,
                              locale,
                            })}
                            className=" py-1 sm:py-4 px-3 sm:px-5 hover:bg-red-light flex justify-between items-center"
                            onClick={() => close()}
                          >
                            <p className="text-black text-xs normal-case font-semibold">
                              {child.title || "+"}
                              {child.subtitle && (
                                <span className="block font-normal mt-1 text-3xs leading-none">
                                  {child.subtitle}
                                </span>
                              )}
                            </p>
                            <ArrowLongRightIcon
                              aria-hidden="true"
                              className="shrink-0 h-6 w-6"
                              color="black-light"
                            />
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
          className=" block text-xxs hover:bg-red-light font-semibold tracking-widest text-black px-2 py-1"
        >
          {item.title || "#"}
        </Link>
      </div>
    );
  }
}

function Header(props: any) {
  const { data, locale, slugData } = props;
  return (
    <header>
      <Popover className="t-0 fixed inset-x-0 z-40 h-[70px] bg-white/80 md:h-[80px] lg:h-[110px]">
        {({ close: handleClose }) => (
          <>
            <div className="container flex h-full items-center justify-between py-2 sm:px-6 lg:justify-start lg:space-x-10 lg:py-3">
              <div>
                <Link
                  locale={locale}
                  href={resolveLink({
                    _modelApiKey: "home",
                    slug: "/",
                    locale,
                  })}
                  className="flex"
                >
                  <span className="sr-only">Oriente Occidente</span>
                  <Image
                    width={20}
                    height={20}
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
                  className="flex space-x-2 uppercase xl:space-x-4"
                >
                  {data?.map((item: any) => (
                    <Fragment key={item.id}>
                      {renderLink(item, locale)}
                    </Fragment>
                  ))}
                </Popover.Group>
                <div className="text-xxs text-black-light ml-14 pt-1 font-semibold uppercase tracking-widest lg:flex">
                  <LanguageSwitcher
                    currentLocale={locale}
                    slugData={slugData || {}}
                  />
                </div>
              </div>
            </div>
            <MobileNav
              data={data}
              locale={locale}
              handleClose={handleClose}
              slugData={slugData || {}}
            />
          </>
        )}
      </Popover>
    </header>
  );
}
export default Header;
