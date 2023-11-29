"use client";
import { draftMode } from "next/headers";
import GenericHero from "@/components/hero/GenericHero";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import queryDatoCMS from "@/lib/fetchDato";
import {
  SiteLocale,
  TimelineQueryDocument,
  ArtistRecord,
} from "@/graphql/generated";
import resolveLink from "@/lib/resolveLink";
import { useState } from "react";

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

function companiesCount(data: any) {
  let companies: string[] = [];
  data.map((artist: ArtistRecord) => {
    artist._allReferencingCompanies.forEach((c) => {
      if (!companies.includes(c.id)) {
        companies.push(c.id);
      }
    });
  });
  return companies.length;
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const [openYears, setOpenYars] = useState(false);

  const data = await queryDatoCMS(
    TimelineQueryDocument,
    { locale: siteLocale },
    isEnabled
  );

  const page: any = data?.yearsArchive || null;
  let timelineData: any = [];

  data?.allYears.map((y) => {
    let year = {
      year: y.year,
      festival: {
        slug: resolveLink({
          _modelApiKey: data?.festivalEditionsArchive?._modelApiKey || "",
          locale,
          slug: "",
        }),
        count: y.festivalCount.count,
        images: y.festival,
      },
      artitstCompanies: {
        slug: resolveLink({
          _modelApiKey: data?.artistsCompaniesArchive?._modelApiKey || "",
          locale,
          slug: "",
        }),
        count: y.artistsCount.count + companiesCount(y.artists),
        images: y.artists,
      },
      activities: {
        slug: resolveLink({
          _modelApiKey: data?.activitiesArchive?._modelApiKey || "",
          locale,
          slug: "",
        }),
        count:
          y.eventsCount.count +
          y.workshopsCount.count +
          y.artisticResidenciesCount.count +
          y.projectsCount.count,
        images: [
          ...y.events,
          ...y.workshops,
          ...y.artisticResidencies,
          ...y.projects,
        ],
      },
      news: {
        slug: resolveLink({
          _modelApiKey: data?.newsPublicationsArchive?._modelApiKey || "",
          locale,
          slug: "",
        }),
        count: y.newsCount.count + y.publicationsCount.count,
        images: [...y.news, ...y.publications],
      },
      // pertnersNetworks: {
      //   slug: resolveLink({
      //     _modelApiKey: data?.pertnersNetworksArchive?._modelApiKey || "",
      //     locale,
      //     slug: "",
      //   }),
      //   count: y.partnersCount.count + y.networksCount.count,
      //   images: y.networks,
      // },
      media: {
        slug: resolveLink({
          _modelApiKey: data?.mediaArchive?._modelApiKey || "",
          locale,
          slug: "",
        }),
        count:
          y.mediaAudiosCount.count +
          y.mediaDocumentsCount.count +
          y.mediaPhotosCount.count +
          y.mediaVideosCount.count,
        images: y.mediaPhotos,
      },
      images: y.mediaPhotos,
    };
    timelineData.push(year);
  });

  return (
    <>
      {/* My index page - {locale} */}
      <GenericHero data={hero} locale={locale} />
      <div className="container h-full grid grid-cols-1 lg:grid-cols-4 ">
        <div className="sticky top-[70px] md:top-[80px] lg:top-[110px] lg:pr-14 z-10 lg:h-[10vh]">
          <nav className="lg:mt-[-1px]">
            <div
              className="bg-white border text-base p-4 md:col-span-3 cursor-pointer lg:cursor-default"
              onClick={() => setOpenYars(!openYears)}
            >
              Anno
            </div>
            <div
              className={`absolute w-full lg:relative motion-safe:transition-[grid-template-rows] motion-safe:duration-500 grid  ${
                openYears ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              } lg:grid-rows-[1fr]`}
            >
              <ul className="bg-white border-l lg:border border-b-0 lg:mt-[-1px] text-base md:grid md:grid-cols-3 lg:block overflow-hidden">
                {blob.map((item) => {
                  return (
                    <li
                      key={item.year}
                      className="border-b border-r lg:border-r-0"
                    >
                      <Link
                        href={`#${item.year}`}
                        className="p-4 flex justify-between items-center hover:bg-red-light motion-safe:duration-300"
                        onClick={() => setOpenYars(!openYears)}
                      >
                        {item.year}
                        <ArrowLongRightIcon
                          aria-hidden="true"
                          className="h-5 w-5 rotate-90 lg:rotate-0"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
          <div className="hidden lg:flex items-center justify-center absolute top-32 right-0 translate-x-1/2 w-20 h-20 rounded-full bg-white border border-red">
            <ArrowLongRightIcon
              aria-hidden="true"
              className="h-6 w-6 rotate-90"
              color="#e64011"
            />
          </div>
        </div>
        <div className="col-span-3 lg:border-l lg:border-red pl-1 lg:pl-20 xl:pl-28">
          {blob.map((item) => {
            return (
              <div
                id={item.year}
                key={item.year}
                className="border-b py-8 mb-8"
              >
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-4">
                  <div className="md:col-span-1 lg:col-span-4">
                    <div className="mb-8 text-lg">{item.year}</div>
                    <div className="space-y-4">
                      <div className="flex gap-x-1">
                        <div>({item.festival.count})</div>
                        <div>Festival</div>
                        <ArrowLongRightIcon
                          aria-hidden="true"
                          className="h-5 w-5"
                        />
                      </div>
                      <div className="flex gap-x-1">
                        <div>({item.artitstCompanies.count})</div>
                        <div>Artisti e compagnie</div>
                        <ArrowLongRightIcon
                          aria-hidden="true"
                          className="h-5 w-5"
                        />
                      </div>
                      <div className="flex gap-x-1">
                        <div>({item.activities.count})</div>
                        <div>Attività</div>
                        <ArrowLongRightIcon
                          aria-hidden="true"
                          className="h-5 w-5"
                        />
                      </div>
                      <div className="flex gap-x-1">
                        <div>({item.news.count})</div>
                        <div>News</div>
                        <ArrowLongRightIcon
                          aria-hidden="true"
                          className="h-5 w-5"
                        />
                      </div>
                      <div className="flex gap-x-1">
                        <div>({item.media.count})</div>
                        <div>Media</div>
                        <ArrowLongRightIcon
                          aria-hidden="true"
                          className="h-5 w-5"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-1 lg:col-span-3 relative pb-[150%]">
                    <img
                      src={item.image1}
                      className="absolute object-cover w-full h-full"
                    ></img>
                  </div>

                  <div className="md:col-span-2 lg:col-span-4 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-2 gap-x-4 gap-y-4">
                    <div className="col-span-3 lg:col-span-2 h-[135px] relative">
                      <img
                        src={item.image2}
                        className="absolute object-cover w-full h-full"
                      ></img>
                    </div>
                    <div className="h-[135px] relative">
                      <img
                        src={item.image3}
                        className="absolute object-cover w-full h-full"
                      ></img>
                    </div>
                    <div className="h-[135px] relative">
                      <img
                        src={item.image4}
                        className="absolute object-cover w-full h-full"
                      ></img>
                    </div>
                    <div className="h-[135px] relative">
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
    </>
  );
}
