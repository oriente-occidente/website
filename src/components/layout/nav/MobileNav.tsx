"use client";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Disclosure } from "@headlessui/react";
import Image from "next/image";
import resolveLink from "@/lib/resolveLink";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { MobileNavProps } from "@/types";
import translate from "@/lib/locales";

export default function MobileNav({
  data,
  locale,
  handleClose,
  slugData,
}: MobileNavProps) {
  function renderMobileLink(item: any) {
    if (item.children && item.children.length > 0) {
      return (
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className="flex items-center justify-between text-left text-sm font-semibold uppercase md:text-xl"
                aria-expanded={open}
                aria-controls={`submenu-${item.id}`}
              >
                {item?.title || "+"}
                <div
                  className={`${
                    open ? "rotate-180" : ""
                  } bg-arrow-small-down h-4 w-4 duration-300  ease-in md:h-8 md:w-8`}
                  aria-hidden="true"
                />
              </Disclosure.Button>
              <Disclosure.Panel id={`submenu-${item.id}`}>
                {item.children?.map((child: any) => (
                  <Link
                    key={child?.id}
                    href={
                      child?.link ? resolveLink({ ...child.link, locale }) : "/"
                    }
                    onClick={() => handleClose()}
                    className="text-black-light block text-sm font-normal tracking-wider md:py-1 md:text-base"
                  >
                    {child.title || "-"}
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
          <Link
            key={item.id}
            href={item.link ? resolveLink({ ...item.link, locale }) : "/"}
            onClick={() => handleClose()}
            className="block text-sm font-semibold uppercase md:text-xl"
          >
            {item.title || "#"}
          </Link>
        </div>
      );
    }
  }

  return (
    <Popover.Panel
      focus
      className="fixed inset-0 z-50 h-full origin-top-left transform transition lg:hidden"
    >
      <div className="h-full divide-y-2 divide-gray-50 bg-white overflow-auto">
        <div className="container ">
          <div className="flex items-center justify-between h-[70px] bg-white/80 md:h-[80px] lg:h-[110px]">
            <div>
              <Link locale={locale} href="/" title="homepage">
                <Image
                    width={20}
                    height={20}
                    className="h-10 w-auto object-contain sm:h-12 lg:h-16"
                    src="/new-logo.svg"
                    alt="Oriente Occidente"
                  />
              </Link>
            </div>
            <div className="-mr-2">
              <Popover.Button
                className="focus:black inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-inset"
                aria-label={translate("closeMenu", locale)}
              >
                <span className="text-[12px] font-semibold uppercase tracking-widest text-black md:text-xs">
                  {translate("close", locale)}
                </span>
                <div
                  className="bg-close ml-2 h-6 w-6 md:ml-4 md:h-8 md:w-8"
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>
        </div>
        <nav className="py-6 px-5">
          <div className="grid gap-4 md:gap-8">
            {data?.map((item: any) => (
              <Fragment key={item.id}>{renderMobileLink(item)}</Fragment>
            ))}
          </div>
          <div className="text-xxs mt-16 border-t border-black pt-4 uppercase tracking-widest md:mt-28 md:pt-10 md:text-base">
            <LanguageSwitcher
              currentLocale={locale}
              slugData={slugData || {}}
            />
          </div>
        </nav>
      </div>
    </Popover.Panel>
  );
}
