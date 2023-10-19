import { Fragment } from "react";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { HomeDocument, SiteLocale } from "@/graphql/generated";
import translate from "@/lib/locales";
import queryDatoCMS from "@/lib/fetchDato";

const locale = 'en';
export default async function Home() {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    HomeDocument,
    { locale: siteLocale },
    isEnabled
  );

  if (!data.home) notFound();
  const { homeSlideshow, homeSections, seo } = data.home;
  return (
    <div>
      <h1 className="sr-only">Oriente Occidente</h1>
      {/* <HeroSlider slides={homeSlideshow} /> */}
      {homeSections.map((block: any) => {
        return (
          <Fragment key={block.id}>
            <div
              className="border-gray container flex items-center justify-between border-t"
              key={block.id}
            >
              <h2 className="title--small py-8 lg:py-16">{block.title}</h2>
              {/* <Link
                href={resolveLinkById(block.sectionLink.id, locale)}
                locale={locale}
                className="button--with-arrow"
              >
                {block.sectionLinkLabel}
              </Link> */}
            </div>
            {block.layout == "Mission" ? (
              <div className="bg-gray">
                <div className="title--small container py-8 lg:pb-12 lg:pt-16">
                  {translate("discoverActivities", locale)}
                </div>
              </div>
            ) : null}
            <div>
              {/* {block.layout == "PrimoPiano" ? (
                <GalleryPreview slides={block.slides} locale={locale} />
              ) : (
                <GalleryHome
                  slides={block.slides}
                  background={"gray"}
                  locale={locale}
                />
              )} */}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
