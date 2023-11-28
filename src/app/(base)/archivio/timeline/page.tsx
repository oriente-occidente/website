import { draftMode } from "next/headers";
import GenericHero from "@/components/hero/GenericHero";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const locale = "it";

const blob = [
  {
    year: "2023",
    festival: {
      slug: "http://www.google.com",
      count: 2,
    },
    artitstCompanies: {
      slug: "http://www.google.com",
      count: 20,
    },
    activities: {
      slug: "http://www.google.com",
      count: 19,
    },
    news: {
      slug: "http://www.google.com",
      count: 19,
    },
    media: {
      slug: "http://www.google.com",
      count: 192,
    },
    image1: "https://placehold.co/500x500",
    image2: "https://placehold.co/500x500",
    image3: "https://placehold.co/500x500",
    image4: "https://placehold.co/500x500",
    image5: "https://placehold.co/500x500",
  },
  {
    year: "2022",

    festival: {
      slug: "http://www.festival.com",
      count: 2,
    },
    artitstCompanies: {
      slug: "http://www.artist.com",
      count: 20,
    },
    activities: {
      slug: "http://www.activities.com",
      count: 19,
    },
    news: {
      slug: "http://www.news.com",
      count: 19,
    },
    media: {
      slug: "http://www.media.com",
      count: 192,
    },
    image1: "https://placehold.co/500x500",
    image2: "https://placehold.co/500x500",
    image3: "https://placehold.co/500x500",
    image4: "https://placehold.co/500x500",
    image5: "https://placehold.co/500x500",
  },
  {
    year: "2021",

    festival: {
      slug: "http://www.google.com",
      count: 2,
    },
    artitstCompanies: {
      slug: "http://www.google.com",
      count: 20,
    },
    activities: {
      slug: "http://www.google.com",
      count: 19,
    },
    news: {
      slug: "http://www.google.com",
      count: 19,
    },
    media: {
      slug: "http://www.google.com",
      count: 192,
    },
    image1: "https://placehold.co/500x500",
    image2: "https://placehold.co/500x500",
    image3: "https://placehold.co/500x500",
    image4: "https://placehold.co/500x500",
    image5: "https://placehold.co/500x500",
  },
  {
    year: "2019",

    festival: {
      slug: "http://www.festival.com",
      count: 2,
    },
    artitstCompanies: {
      slug: "http://www.artist.com",
      count: 20,
    },
    activities: {
      slug: "http://www.activities.com",
      count: 19,
    },
    news: {
      slug: "http://www.news.com",
      count: 19,
    },
    media: {
      slug: "http://www.media.com",
      count: 192,
    },
    image1: "https://placehold.co/500x500",
    image2: "https://placehold.co/500x500",
    image3: "https://placehold.co/500x500",
    image4: "https://placehold.co/500x500",
    image5: "https://placehold.co/500x500",
  },
];
const hero = {
  titleHero: "Timeline",
  descriptionHero:
    "Scopri la storia di 40 anni  di Oriente Occidente etc etc un testo che vada alemeno su un paio di righe che introduca la pagina",
};
export default function Page() {
  return (
    <div className="">
      {/* My index page - {locale} */}
      <GenericHero data={hero} locale={locale} />
      <div className="container grid grid-cols-1 xl:grid-cols-4">
        <div className="xl:pr-14">
          <div className="sticky top-32">
            <nav className="">
              <div className="border text-base p-4 border-b md:col-span-3">
                Anno
              </div>
              <ul className="border-l xl:border border-b-0 mt-[-1px] text-base md:grid md:grid-cols-3 xl:block">
                {blob.map((item) => {
                  return (
                    <li key={item.year} className="border-b border-r">
                      <Link
                        href={`#${item.year}`}
                        className="p-4 flex justify-between items-center hover:bg-red-light motion-safe:duration-300"
                      >
                        {item.year}
                        <ArrowLongRightIcon
                          aria-hidden="true"
                          className="h-5 w-5 rotate-90 xl:rotate-0"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="hidden xl:flex items-center justify-center absolute top-32 -right-14 translate-x-1/2 w-20 h-20 rounded-full bg-white border border-red ">
              <ArrowLongRightIcon
                aria-hidden="true"
                className="h-6 w-6 rotate-90"
                color="#e64011"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 border-l border-red pl-28">
          {blob.map((item) => {
            return (
              <div
                id={item.year}
                key={item.year}
                className="border-b py-8 mb-8"
              >
                <div className="grid grid-cols-3 gap-4">
                  <div className="">
                    <div className="mb-8 text-lg">{item.year}</div>
                    <div className="space-y-4">
                      <div className="flex gap-x-2">
                        <div>({item.festival.count})</div>
                        <div>Festival</div>
                        <ArrowLongRightIcon
                          aria-hidden="true"
                          className="h-5 w-5"
                        />
                      </div>
                      <div className="flex gap-x-2">
                        <div>({item.artitstCompanies.count})</div>
                        <div>Artisti e compagnie</div>
                        <ArrowLongRightIcon
                          aria-hidden="true"
                          className="h-5 w-5"
                        />
                      </div>
                      <div className="flex gap-x-2">
                        <div>({item.activities.count})</div>
                        <div>Attività</div>
                        <ArrowLongRightIcon
                          aria-hidden="true"
                          className="h-5 w-5"
                        />
                      </div>
                      <div className="flex gap-x-2">
                        <div>({item.news.count})</div>
                        <div>News</div>
                        <ArrowLongRightIcon
                          aria-hidden="true"
                          className="h-5 w-5"
                        />
                      </div>
                      <div className="flex gap-x-2">
                        <div>({item.media.count})</div>
                        <div>Media</div>
                        <ArrowLongRightIcon
                          aria-hidden="true"
                          className="h-5 w-5"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative pb-[150%]">
                    <img
                      src={item.image1}
                      className="absolute object-cover w-full h-full"
                    ></img>
                  </div>
                  <div className="flex flex-wrap gap-x-[6%] gap-y-4">
                    <div className="basis-full relative">
                      <img
                        src={item.image2}
                        className="absolute object-cover w-full h-full"
                      ></img>
                    </div>
                    <div className="w-[47%] relative">
                      <img
                        src={item.image3}
                        className="absolute object-cover w-full h-full"
                      ></img>
                    </div>
                    <div className="w-[47%] relative">
                      <img
                        src={item.image4}
                        className="absolute object-cover w-full h-full"
                      ></img>
                    </div>
                    <div className="w-[47%] relative">
                      <img
                        src={item.image5}
                        className="absolute object-cover w-full h-full"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
