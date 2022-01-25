import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import translate from 'lib/locales';
import { resolveLinkById } from 'lib/utils';
import Newsletter from './Newsletter';

export default function Footer({ locale, data, hideNewsletter = false }) {
  return (
    <>
      {!hideNewsletter && <Newsletter locale={locale} data={data} />}
      <footer id="footer" className="bg-white container" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="py-6 lg:pt-16 xl:px-0">
          <div className="md:grid md:grid-cols-2 md:gap-4">
            <div className="space-y-4 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
              <div>
                <Image
                  src="/logo.svg"
                  alt="Oriente Occidente"
                  objectFit="contain"
                  objectPosition="left"
                  width={170}
                  height={50}
                />
              </div>
              <div className="xl:space-y-4">
                <p className="text-black text-xxs uppercase pt-6 xl:pt-0">
                  &copy; {new Date().getFullYear()} Oriente Occidente
                </p>
                <div
                  className="text-black text-xxs pb-2"
                  dangerouslySetInnerHTML={{ __html: data.info }}
                />
                <div className="mb-8 pb-8 border-b border-gray-200 md:border-0">
                  <p className="text-black text-xxs mb-2 uppercase">
                    Social Media
                  </p>
                  <div className="flex space-x-3 ">
                    {data.socials.map((item) => {
                      return (
                        <Fragment key={item.id}>
                          <Link href={item.link}>
                            <a
                              target="_blank"
                              title={`Link to ${item.title}. Open in new window`}
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
              {data.sections.map((section) => {
                const { title, links, id } = section;
                return (
                  <div key={id}>
                    <div className="text-xxs font-semibold text-black tracking-wider uppercase">
                      {title}
                    </div>
                    <ul role="list" className="mt-4 space-y-2">
                      {links.map((item) => (
                        <li key={item.id}>
                          <Link href={resolveLinkById(item.id, locale)}>
                            <a
                              title={`Link to ${item.title}`}
                              className="text-black-transparent text-xxs tracking-widest hover:text-black"
                            >
                              {item.title}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
              <div>
                <div className="text-xxs font-semibold text-black tracking-wider uppercase">
                  Legal
                </div>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <Link href={`https://www.iubenda.com/privacy-policy/${translate('cookiePolicyId', locale)}`}>
                      <a
                        title={`${translate('privacyPolicyTitle', locale)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-black-transparent text-xxs tracking-widest hover:text-black iubenda-nostyle no-brand iubenda-embed"
                      >
                        Privacy Policy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`https://www.iubenda.com/privacy-policy/${translate('cookiePolicyId', locale)}/cookie-policy`}>
                      <a
                        title={`${translate('cookiePolicyTitle', locale)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-black-transparent text-xxs tracking-widest hover:text-black iubenda-nostyle no-brand iubenda-embed"
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
                        className="text-black-transparent text-xxs tracking-widest hover:text-black whitespace-nowrap"
                      >
                        Credits
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:mt-8 md:gap-4 md:border-t md:border-gray-200">
            <div className="">
              <div className="mt-8 mb-4 border-t border-gray-200 pt-8 md:border-0 md:mt-0">
                <p className="text-xs text-gray-dark">
                  {translate('patronage', locale)}
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
            </div>
            <div className="mt-8 mb-4 border-t border-gray-200 pt-8 md:border-0 md:mt-0 lg:flex lg:justify-end">
              {data.links.map((item) => (
                <div key={item.id} className="inline-block">
                  <Link href={resolveLinkById(item.id, locale)}>
                    <a
                      title={`Link to ${item.title}`}
                      className="lg:ml-4 mr-4 lg:mr-0 text-xs text-gray-dark xl:text-center"
                    >
                      {item.title}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
