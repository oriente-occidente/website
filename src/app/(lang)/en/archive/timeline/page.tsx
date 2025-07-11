import { draftMode } from "next/headers";
import GenericHero from "@/components/hero/GenericHero";
import Link from "next/link";
import translate from "@/lib/locales";
import type { Metadata } from "next";

import queryDatoCMS from "@/lib/fetchDato";
import {
  SiteLocale,
  TimelineQueryDocument,
  ArtistRecord,
} from "@/graphql/generated";
import resolveLink from "@/lib/resolveLink";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import TimelineTabs from "@/components/TimelineTabs";
import { Image as DatoImage } from "react-datocms";
import { ReactNode } from "react";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData, getIndexData } from "@/lib/utils";

const locale = 'en';

export const metadata: Metadata = {
  title: "Timeline - Oriente Occidente",
};

type ContentType = {
  festival: { slug: string; count: number };
  artitstCompanies: { slug: string; count: number };
  activities: { slug: string; count: number };
  news: { slug: string; count: number };
  media: { slug: string; count: number };
};

interface Artist {
  id: string;
}

interface Company {
  id: string;
}

interface Event {
  artists: Artist[];
  companies: Company[];
}

interface YearData {
  id: string;
  year: number;
  artistFromEvents: Event[];
  artistFromRelations: Artist[];
}

function renderSections(content: ContentType, year: string): ReactNode[] {
  const elements: ReactNode[] = [];
  // console.log("CONTENT", content);
  // const params: any = {
  //   festival: `festival[refinementList][years][0]=${year}`,
  //   artistsCompanies: `artists[refinementList][years][0]=${year}`,
  //   activities: `activities[refinementList][years][0]=${year}`,
  //   news: `news[refinementList][years][0]=${year}`,
  //   media: `media[refinementList][years][0]=${year}`,
  // };
  //{`${value.slug}?${params[key]}`}

  for (const [key, value] of Object.entries(content)) {
    const element = (
      <>
        {value.count > 0 && (
          <div key={key}>
            <Link
              href={value.slug}
              title={translate(key, locale)}
              className="flex gap-x-1"
            >
              <div>({value.count})</div>
              <div>{translate(key, locale)}</div>
              <ArrowLongRightIcon
                aria-hidden="true"
                focusable="false"
                className="h-5 w-5"
              />
            </Link>
          </div>
        )}
      </>
    );
    elements.push(element);
  }
  return elements;
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;

  const data = await queryDatoCMS(
    TimelineQueryDocument,
    { locale: siteLocale },
    isEnabled
  );

  const page: any = data?.yearsArchive || null;

  const hero = {
    titleHero: page.title,
    descriptionHero: page.description,
  };

  let timelineData: any = [];

  for (const y of data?.allYears) {
    let year = {
      year: y.year,
      content: {
        festival: {
          slug: resolveLink({
            id: "",
            _modelApiKey: data?.festivalEditionsArchive?._modelApiKey || "",
            locale,
            slug: "",
            slugs: [],
            year: y.year.toString(),
            archiveType: "festival",
          }),
          count: await getIndexData("festival", y.year.toString(), locale),
          // images: y.festival,
        },
        artistsCompanies: {
          slug: resolveLink({
            id: "",
            _modelApiKey: data?.artistsCompaniesArchive?._modelApiKey || "",
            locale,
            slug: "",
            slugs: [],
            year: y.year.toString(),
            archiveType: "artists",
          }),
          count: await getIndexData("artists", y.year.toString(), locale),
        },
        activities: {
          slug: resolveLink({
            id: "",
            _modelApiKey: data?.activitiesArchive?._modelApiKey || "",
            locale,
            slug: "",
            slugs: [],
            year: y.year.toString(),
            archiveType: "activities",
          }),
          count: await getIndexData("activities", y.year.toString(), locale),
        },
        news: {
          slug: resolveLink({
            id: "",
            _modelApiKey: data?.newsPublicationsArchive?._modelApiKey || "",
            locale,
            slug: "",
            slugs: [],
            year: y.year.toString(),
            archiveType: "news",
          }),
          count: await getIndexData("news", y.year.toString(), locale),
          images: [...y.news, ...y.publications],
        },

        media: {
          slug: resolveLink({
            id: "",
            _modelApiKey: data?.mediaArchive?._modelApiKey || "",
            locale,
            slug: "",
            slugs: [],
            year: y.year.toString(),
            archiveType: "media",
          }),
          count: await getIndexData("media", y.year.toString(), locale),
        },
      },
      images: y.images,
    };
    timelineData.push(year);
  }

  // data?.allYears.map((y) => {

  // });
  const slugData = extractSlugData(data.yearsArchive);

  return (
    <Wrapper locale={locale} slugData={slugData}>
      <GenericHero data={hero} locale={locale} />
      <div className="container h-full grid grid-cols-1 lg:grid-cols-4 relative">
        <TimelineTabs nav={timelineData} locale={locale} />

        <div className="col-span-3 lg:border-l lg:border-red pl-1 lg:pl-20 xl:pl-28">
          {timelineData.map((item: any) => {
            const view = renderSections(item.content, item.year);
            return (
              <div
                id={item.year}
                key={item.year}
                className="border-b py-8 mb-8"
              >
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
                  <div className="md:col-span-1 lg:col-span-4">
                    <div className="mb-8 text-lg">{item.year}</div>
                    <div className="space-y-4">{view}</div>
                  </div>

                  {item.images[0] && (
                    <div className="md:col-span-1 lg:col-span-3 relative pb-[110%] md:pb-[80%] bg-gray-light">
                      <DatoImage
                        className="dato-image-cover"
                        data={item.images[0]?.image.responsiveImage}
                      />
                    </div>
                  )}

                  <div className="md:col-span-2 lg:col-span-3 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-2 gap-x-4 gap-y-4">
                    {item.images[1] && (
                      <div className="col-span-3 lg:col-span-2 h-[135px] lg:h-[110px] relative bg-gray-light ">
                        <DatoImage
                          objectFit="cover"
                          className="absolute w-full h-full"
                          data={item.images[1]?.image.responsiveImage}
                        />
                      </div>
                    )}
                    {item.images[2] && (
                      <div className="h-[135px] lg:h-[90px] relative  bg-gray-light">
                        <DatoImage
                          objectFit="cover"
                          className="absolute w-full h-full"
                          data={item.images[2]?.image.responsiveImage}
                        />
                      </div>
                    )}
                    {item.images[3] && (
                      <div className="h-[135px] lg:h-[90px] relative  bg-gray-light">
                        <DatoImage
                          objectFit="cover"
                          className="absolute w-full h-full"
                          data={item.images[3]?.image.responsiveImage}
                        />
                      </div>
                    )}
                    {item.images[4] && (
                      <div className="h-[135px] lg:h-[90px] relative bg-gray-light">
                        <DatoImage
                          objectFit="cover"
                          className="absolute w-full h-full"
                          data={item.images[4]?.image.responsiveImage}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
