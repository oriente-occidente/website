import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import translate from 'lib/locales';
import { resolveLinkById } from 'lib/utils';
import Newsletter from './Newsletter';

export default function Footer({ locale, data, hideNewsletter = false }) {
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
                    src="/new-logo.svg"
                    alt="Oriente Occidente"
                    objectFit="contain"
                    objectPosition="left"
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
                      {data.socials.map((item) => {
                        return (
                          <Fragment key={item.id}>
                            <Link href={item.link}>
                              <a
                                target="_blank"
                                title={`${translate('externaLink', locale)} ${
                                  item.title
                                }`}
                                className="text-black hover:text-gray-400"
                              >
                                <span className="sr-only">{item.title}</span>
                                <img
                                  src={item.image.url}
                                  width="20px"
                                  height="20px"
                                  title={`${item.title}`}
                                  alt={`${item.title}`}
                                />
                              </a>
                            </Link>
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 md:mt-0 xl:mt-0 xl:grid-cols-4">
                <div>
                  <div className="text-xxs font-semibold uppercase tracking-wider text-black">
                    Legal
                  </div>
                  <ul role="list" className="mt-4 space-y-2">
                    <li>
                      <Link
                        href={`https://www.iubenda.com/privacy-policy/${translate(
                          'cookiePolicyId',
                          locale
                        )}`}
                      >
                        <a
                          title={`${translate('privacyPolicyTitle', locale)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="iubenda-nostyle no-brand iubenda-embed text-xxs text-black-light tracking-widest hover:text-black"
                        >
                          Privacy Policy
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`https://www.iubenda.com/privacy-policy/${translate(
                          'cookiePolicyId',
                          locale
                        )}/cookie-policy`}
                      >
                        <a
                          title={`${translate('cookiePolicyTitle', locale)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="iubenda-nostyle no-brand iubenda-embed text-xxs text-black-light tracking-widest hover:text-black"
                        >
                          Cookie Policy
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.cantierecreativo.net/">
                        <a
                          title={`${translate('creditsTitle', locale)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xxs text-black-light whitespace-nowrap tracking-widest hover:text-black"
                        >
                          Credits
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:mt-8 md:grid md:grid-cols-2 md:gap-4 md:border-t md:border-gray-200">
              {/* <div className=""> */}
              {/* <div className="mt-8 mb-4 border-t border-gray-200 pt-8 md:mt-0 md:border-0">
                  <p className="text-xs text-gray-dark">
                    {translate("patronage", locale)}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
                  <Image
                    src="/rovereto.jpeg"
                    alt="Comune di Rovereto"
                    width={100}
                    height={56}
                    objectFit="contain"
                    objectPosition="left"
                  />
                  <Image
                    src="/trentino.jpg"
                    alt="Trentino"
                    width={130}
                    height={46}
                    objectFit="contain"
                    objectPosition="left"
                  />
                </div>
              </div> */}
              <div className="mt-8 mb-4 border-t border-gray-200 pt-8 md:mt-0 md:border-0 lg:flex">
                {data.links.map((item) => (
                  <div key={item.id} className="inline-block">
                    <Link href={resolveLinkById(item.id, locale)}>
                      <a
                        title={`Link to ${item.title}`}
                        className="text-gray-dark mr-4 text-xs lg:mr-0 xl:text-center"
                      >
                        {item.title}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
