"use client";
import Link from "next/link";
import { Fragment } from "react";

import type { FooterProps } from "@/types";
import resolveLink from "@/lib/resolveLink";
import translate from "@/lib/locales";
import Newsletter from "@/components/layout/Newsletter";
import Image from "next/image";

export default function Footer({
  locale,
  data,
  hideNewsletter = false,
}: FooterProps) {
  return (
    <>
      <footer id="footer" data-datocms-noindex aria-labelledby="footer-heading">
        {!hideNewsletter && <Newsletter locale={locale} data={data} />}
        <div className="container bg-white">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="py-6 lg:pt-16 xl:px-0">
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div className="space-y-4 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
                <div>
                  <Image
                    className="h-[50px] w-[170px]"
                    src="/new-logo.svg"
                    alt="Oriente Occidente"
                    width={170}
                    height={50}
                  />
                </div>
                <div className="xl:space-y-4">
                  <p className="text-xxs pt-6 uppercase text-black xl:pt-0">
                    &copy; {new Date().getFullYear()} Oriente Occidente
                  </p>
                  <div
                    className="text-xxs pb-2 text-black"
                    dangerouslySetInnerHTML={{ __html: data.info }}
                  />
                  <div className="mb-8 border-b border-gray-200 pb-8 md:border-0">
                    <p className="text-xxs mb-2 uppercase text-black">
                      Social Media
                    </p>
                    <div className="flex space-x-3 ">
                      {data?.socials?.map((item: any) => {
                        return (
                          <Fragment key={item.id}>
                            <Link
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`${translate("externaLink", locale)} ${
                                item.title
                              }`}
                              aria-label={`${item.title} - ${translate(
                                "externaLink",
                                locale,
                              )}`}
                              className="text-black hover:text-gray-400"
                            >
                              <span className="sr-only">
                                {item.title} ({translate("externaLink", locale)}
                                )
                              </span>
                              <Image
                                src={item.image.url}
                                width={20}
                                height={20}
                                alt=""
                                aria-hidden="true"
                              />
                            </Link>
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid md:grid-cols-2 gap-4 md:mt-0 xl:mt-0 xl:grid-cols-4">
                {data?.sections?.map((section: any) => {
                  const { title, links, id } = section;
                  return (
                    <div key={id}>
                      <div className="text-xxs font-semibold uppercase tracking-wider text-black">
                        {title}
                      </div>
                      <ul role="list" className="mt-4 space-y-2">
                        {links?.map((item: any) => (
                          <li key={item.id}>
                            <Link
                              href={resolveLink({ ...item, locale })}
                              title={`Link to ${item.title}`}
                              className="text-xxs text-black-light tracking-widest hover:text-black hover:underline underline-offset-4"
                            >
                              {item._modelApiKey == "festival_edition"
                                ? translate("program", locale)
                                : item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
                <div>
                  <div className="text-xxs font-semibold uppercase tracking-wider text-black">
                    Legal
                  </div>
                  <ul role="list" className="mt-4 space-y-2">
                    <li>
                      <Link
                        href={`https://www.iubenda.com/privacy-policy/${translate(
                          "cookiePolicyId",
                          locale,
                        )}`}
                        title={`${translate("privacyPolicyTitle", locale)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="iubenda-nostyle no-brand iubenda-embed text-xxs text-black-light tracking-widest hover:text-black hover:underline underline-offset-4"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`https://www.iubenda.com/privacy-policy/${translate(
                          "cookiePolicyId",
                          locale,
                        )}/cookie-policy`}
                        title={`${translate("cookiePolicyTitle", locale)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="iubenda-nostyle no-brand iubenda-embed text-xxs text-black-light tracking-widest hover:text-black hover:underline underline-offset-4"
                      >
                        Cookie Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        title={`${translate("privacyPreferences", locale)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="iubenda-cs-preferences-link iubenda-nostyle no-brand iubenda-embed text-xxs text-black-light tracking-widest hover:text-black hover:underline underline-offset-4"
                      >
                        {translate("privacyPreferences", locale)}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.cantierecreativo.net/"
                        title={`${translate("creditsTitle", locale)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xxs text-black-light whitespace-nowrap tracking-widest hover:text-black hover:underline underline-offset-4"
                      >
                        Credits
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:mt-8 md:grid md:grid-cols-2 md:gap-4 md:border-t md:border-gray-200 pt-8 pb-4">
              <div className="border-t border-gray-200 md:border-0 lg:flex pt-8 pb-4 md:p-0">
                {data?.links?.map((item: any) => {
                  return (
                    <div key={item.id} className="inline-block">
                      <Link
                        href={resolveLink({ ...item, locale })}
                        title={`Link to ${item.title}`}
                        className="text-gray-dark mr-4 text-xs lg:mr-0 "
                      >
                        {item.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="text-left md:text-right">
                <Link
                  href={resolveLink({
                    slug: translate("accessibility-report-slug", locale),
                    _modelApiKey: "page",
                    locale,
                  })}
                  title={`Link to ${translate("accessibility-report", locale)}`}
                  className="text-gray-dark mr-4 text-xs lg:mr-0 "
                >
                  {translate("accessibility-report", locale)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
