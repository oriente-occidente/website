import Link from 'next/link';
import Image from 'next/image';
import { Image as DatoImage } from 'react-datocms';

import translate from 'lib/locales';
import { resolveLinkById } from 'lib/utils';

const navigation = {
  legal: [
    { title: 'Privacy', link: '#', target: '' },
    { title: 'Terms', link: '#', target: '' },
    { title: 'Credits', link: "https://www.cantierecreativo.net", target: '_blank' },
  ],
};

export default function Footer({ locale, data }) {
  return (
    <footer className="bg-white container" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="py-6 lg:pt-16 xl:px-0">
        <div className="md:grid md:grid-cols-2 md:gap-4">
          <div className="space-y-4 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
            <div>
              <Image
                src="/oo_logo.jpg"
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
              <div className="text-black text-xxs pb-2"
                dangerouslySetInnerHTML={{__html: data.info }}
              />
              <div className="mb-8 pb-8 border-b border-gray-200 md:border-0">
                <p className="text-black text-xxs mb-2 uppercase">
                  Social Media
                </p>
                <div className="flex space-x-3 ">
                  {console.log("Social:", data.socials)}
                  {data.socials.map((item) => {
                      return (
                        <>
                          <Link href={item.link}>
                            <a
                              target="_blank"
                              title={`Link to ${item.title}. Open in new window`}
                              className="text-black hover:text-gray-400"
                            >
                            <span className="sr-only">{item.title}</span>
                            {console.log("logo social", item.image)}
                            <img
                              src={item.image.url}
                              width="20px"
                              height="20px"
                              title={`${item.title}`}
                              alt={`${item.title}`}
                            />
                            </a>
                          </Link>
                        </>
                      )
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:mt-0 xl:mt-0 xl:grid-cols-4">
            {data.sections.map((section) => {
              const { title, links } = section;
              return (
                <div>
                  <div className="text-xxs font-semibold text-black tracking-wider uppercase">
                    {title}
                  </div>
                  <ul role="list" className="mt-4 space-y-2">
                    {links.map((item) => (
                      <li key={item.id}>
                        <Link href={`/${resolveLinkById(item.id, locale)}`}>
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
                  {navigation.legal.map((item) => (
                    <li key={item.id}>
                      <Link href={`${item.link}`}>
                        <a
                          title={`Link to ${item.title}`}
                          target={item.target}
                          className="text-black-transparent text-xxs tracking-widest hover:text-black"
                        >
                          {item.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:mt-8 md:gap-4 md:border-t md:border-gray-200">
          <div className="">
            <div className="mt-8 mb-4 border-t border-gray-200 pt-8 md:border-0 md:mt-0">
              <p className="text-xs text-gray-400">
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
              <div key={item.key} className="inline-block">
                <Link href={`/${resolveLinkById(item.id, locale)}`}>
                  <a
                    title={`Link to ${item.title}`}
                    className="lg:ml-4 mr-4 lg:mr-0 text-xs text-gray-400 xl:text-center"
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
  );
}
