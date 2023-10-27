import { draftMode } from "next/headers";
import queryDatoCMS from "@/lib/fetchDato";
import { EventDocument, SiteLocale } from "@/graphql/generated";
import type { BasicSlugPageProps } from "@/types";
import MainContent from "@/components/contents/MainContent";
import SectionsParagraphs from "@/components/contents/SectionsParagraphs";
import GalleryPreview from "@/components/galleries/GalleryPreview";

const locale = "it";
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled: preview } = draftMode();
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(EventDocument, { locale: siteLocale, slug }, isEnabled);

  return (
    <div>
      <MainContent locale={locale} data={data.event?.content} />
      {data.event?.sections && data.event?.sections.length > 0 && (
        <SectionsParagraphs locale={locale} sections={data.event?.sections} />
      )}
      {data.event?.relatedContents?.length && data.event?.relatedContents?.length > 0 && (
        <div className="mt-20 mb-6">
          <GalleryPreview slides={data.event?.relatedContents} locale={locale} />
        </div>
      )}
    </div>
  );
}
