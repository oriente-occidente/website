import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import MediaTemplate from "@/components/templates/MediaTemplate";
import { MediaDocumentQueryDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";

const locale = "it";
export default async function Page({ params }: BasicSlugPageProps) {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const { mediaDocument } = await queryDatoCMS(
    MediaDocumentQueryDocument,
    { slug: params.slug },
    isEnabled
  );

  return <MediaTemplate data={mediaDocument} locale={locale} />;
}
