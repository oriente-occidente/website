import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import MediaTemplate from "@/components/templates/MediaTemplate";
import { MediaPhotoQueryDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";

const locale = 'en';
export default async function Page({ params }: BasicSlugPageProps) {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const { mediaPhoto } = await queryDatoCMS(
    MediaPhotoQueryDocument,
    { locale: siteLocale },
    isEnabled
  );

  return <MediaTemplate data={mediaPhoto} locale={locale} />;
}
