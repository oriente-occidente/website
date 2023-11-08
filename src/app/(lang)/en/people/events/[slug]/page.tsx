import { draftMode } from "next/headers";
import queryDatoCMS from "@/lib/fetchDato";
import { EventDocument, SiteLocale } from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import PageTemplate from "@/components/templates/PageTemplate";

const locale = 'en';
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    EventDocument,
    { locale: siteLocale, slug },
    isEnabled
  );
  const heroData: any = {
    layoutHero: data?.event?.layoutHero,
    titleHero: data?.event?.titleHero,
    descriptionHero: data?.event?.descriptionHero,
    imageHero: data?.event?.imageHero,
    slideshowHero: data?.event?.slideshowHero,
  };
  const pageData = {
    seo: null,
    hero: heroData,
    content: data.event?.content,
    sections: data.event?.sections,
    relatedContents: data.event?.relatedContents,
  };
  return <PageTemplate data={pageData} locale={locale} />;

  // return (
  //   <div>
  //     <MainContent locale={locale} data={data.event?.content} />
  //     {data.event?.sections && data.event?.sections.length > 0 && (
  //       <SectionsParagraphs locale={locale} sections={data.event?.sections} />
  //     )}
  //     {data.event?.relatedContents?.length &&
  //       data.event?.relatedContents?.length > 0 && (
  //         <div className="mt-20 mb-6">
  //           <GalleryPreview
  //             slides={data.event?.relatedContents}
  //             locale={locale}
  //           />
  //         </div>
  //       )}
  //   </div>
  // );
}
