import { Fragment } from "react";
import translate from "@/lib/locales";
import HeroSlider from "@/components/hero/HeroSlider";
import GalleryHome from "@/components/galleries/GalleryHome";
import GalleryPreview from "@/components/galleries/GalleryPreview";
import Link from "next/link";
import resolveLink from "@/lib/resolveLink";

export default function HomeTemplate({
  data,
  locale,
}: {
  data: any;
  locale: string;
}) {
  const { homeSlideshow, homeSections } = data;
  return (
    <div>
      <h1 className="sr-only">Oriente Occidente</h1>
      <HeroSlider slides={homeSlideshow} />
      <main id="main-content" itemScope itemType="https://schema.org/Article">
        {homeSections.map((block: any) => {
          return (
            <Fragment key={block.id}>
              <div className="border-gray border-t mt-8 lg:mt-16">
                <div className="container flex items-center justify-between ">
                  <h2 className="title--small py-8 lg:py-16">{block.title}</h2>
                  <Link
                    href={resolveLink({ ...block.sectionLink, locale })}
                    locale={locale}
                    className="button--with-arrow"
                  >
                    {block.sectionLinkLabel}
                  </Link>
                </div>
              </div>
              {block.layout == "Mission" ? (
                <div className="bg-gray">
                  <div className="title--small container py-8 lg:pb-12 lg:pt-16">
                    {translate("discoverActivities", locale)}
                  </div>
                </div>
              ) : null}
              <div>
                {block.layout == "PrimoPiano" ? (
                  <GalleryPreview slides={block.slides} locale={locale} />
                ) : (
                  <GalleryHome
                    slides={block.slides}
                    background={"gray"}
                    locale={locale}
                  />
                )}
              </div>
            </Fragment>
          );
        })}
      </main>
    </div>
  );
}
