import { draftMode } from "next/headers";
import GenericHero from "@/components/hero/GenericHero";
import Link from "next/link";
import translate from "@/lib/locales";

import queryDatoCMS from "@/lib/fetchDato";
import { SiteLocale, TimelineQueryDocument, ArtistRecord } from "@/graphql/generated";
import resolveLink from "@/lib/resolveLink";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import TimelineTabs from "@/components/TimelineTabs";
import { Image as DatoImage } from "react-datocms";
import { ReactNode } from "react";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = 'en';

type ContentType = {
  festival: { slug: string; count: number };
  artitstCompanies: { slug: string; count: number };
  activities: { slug: string; count: number };
  news: { slug: string; count: number };
  media: { slug: string; count: number };
};

function renderSections(content: ContentType, year: string): ReactNode[] {
  const elements: ReactNode[] = [];
  console.log("CONTENT", content);
  const params: any = {
    festival: `festival[refinementList][years][0]=${year}`,
    artitstCompanies: `artisti-compagnie[refinementList][years][0]=${year}`,
    activities: `activities[refinementList][years][0]=${year}`,
    news: `news-pubblicazioni[refinementList][years][0]=${year}`,
    media: `media[refinementList][years][0]=${year}`,
  };

  for (const [key, value] of Object.entries(content)) {
    const element = (
      <div key={key}>
<<<<<<< HEAD
        <Link
          href={`${value.slug}?${params[key]}`}
          title={translate(key, locale)}
          className="flex gap-x-1"
        >
=======
        <Link href={value.slug} title={translate(key, locale)} className="flex gap-x-1">
>>>>>>> 99ebc53 (algolia imp)
          <div>({value.count})</div>
          <div>{translate(key, locale)}</div>
          <ArrowLongRightIcon aria-hidden="true" className="h-5 w-5" />
        </Link>
      </div>
    );
    elements.push(element);
  }
  return elements;
}

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

  data?.allYears.map((y) => {
    let year = {
      year: y.year,
      content: {
        festival: {
          slug: resolveLink({
            _modelApiKey: data?.festivalEditionsArchive?._modelApiKey || "",
            locale,
            slug: "",
            slugs: [],
            year: y.year.toString(),
            archiveType: "festival",
          }),
          count: y.festivalCount.count,
          // images: y.festival,
        },
        artistsCompanies: {
          slug: resolveLink({
            _modelApiKey: data?.artistsCompaniesArchive?._modelApiKey || "",
            locale,
            slug: "",
            slugs: [],
            year: y.year.toString(),
            archiveType: "artists",
          }),
          count: y.artistsCount.count + companiesCount(y.artists),
          // images: y.artists,
        },
        activities: {
          slug: resolveLink({
            _modelApiKey: data?.activitiesArchive?._modelApiKey || "",
            locale,
            slug: "",
            slugs: [],
            year: y.year.toString(),
            archiveType: "activities",
          }),
          count:
            y.eventsCount.count +
            y.workshopsCount.count +
            y.artistsCount.count +
            companiesCount(y.artists) +
            y.projectsCount.count,
          //images: [...y.events, ...y.workshops, ...y.artisticResidencies, ...y.projects],
        },
        news: {
          slug: resolveLink({
            _modelApiKey: data?.newsPublicationsArchive?._modelApiKey || "",
            locale,
            slug: "",
            slugs: [],
            year: y.year.toString(),
            archiveType: "news",
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
            slugs: [],
            year: y.year.toString(),
            archiveType: "media",
          }),
          count:
            y.mediaAudiosCount.count +
            y.mediaDocumentsCount.count +
            y.mediaPhotosCount.count +
            y.mediaVideosCount.count,
          // images: y.mediaPhotos,
        },
      },
      images: y.images,
    };
    timelineData.push(year);
  });
  const slugData = extractSlugData(data.yearsArchive);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <GenericHero data={hero} locale={locale} />
      <div className="container h-full grid grid-cols-1 lg:grid-cols-4 relative">
        <TimelineTabs nav={timelineData} locale={locale} />

        <div className="col-span-3 lg:border-l lg:border-red pl-1 lg:pl-20 xl:pl-28">
          {timelineData.map((item: any) => {
            console.log("ITEM", item);
            const view = renderSections(item.content, item.year);

            return (
              <div id={item.year} key={item.year} className="border-b py-8 mb-8">
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
                  <div className="md:col-span-1 lg:col-span-4">
                    <div className="mb-8 text-lg">{item.year}</div>
                    <div className="space-y-4">{view}</div>
                  </div>

                  <div className="md:col-span-1 lg:col-span-3 relative pb-[110%] md:pb-[80%] bg-gray-light relative ">
                    {item.images[0] && (
                      <DatoImage
                        className="dato-image-cover"
                        data={item.images[0]?.image.responsiveImage}
                      />
                    )}
                  </div>

                  <div className="md:col-span-2 lg:col-span-3 grid grid-cols-3 md:grid-cols-6 lg:grid-cols-2 gap-x-4 gap-y-4">
                    <div className="col-span-3 lg:col-span-2 h-[135px] lg:h-[110px] relative bg-gray-light relative ">
                      {item.images[1] && (
                        <DatoImage
                          objectFit="cover"
                          className="absolute w-full h-full"
                          data={item.images[1]?.image.responsiveImage}
                        />
                      )}
                    </div>
                    <div className="h-[135px] lg:h-[90px] relative bg-gray-light">
                      {item.images[2] && (
                        <DatoImage
                          objectFit="cover"
                          className="absolute w-full h-full"
                          data={item.images[2]?.image.responsiveImage}
                        />
                      )}
                    </div>
                    <div className="h-[135px] lg:h-[90px] relative bg-gray-light">
                      {item.images[3] && (
                        <DatoImage
                          objectFit="cover"
                          className="absolute w-full h-full"
                          data={item.images[3]?.image.responsiveImage}
                        />
                      )}
                    </div>
                    <div className="h-[135px] lg:h-[90px] relative bg-gray-light">
                      {item.images[4] && (
                        <DatoImage
                          objectFit="cover"
                          className="absolute w-full h-full"
                          data={item.images[4]?.image.responsiveImage}
                        />
                      )}
                    </div>
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