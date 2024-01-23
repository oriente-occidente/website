import { draftMode } from "next/headers";
import type { BasicIdPageProps } from "@/types";
import MediaTemplate from "@/components/templates/MediaTemplate";
import { MediaPhotoQueryDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = "it";
export default async function Page({ params }: BasicIdPageProps) {
  const { isEnabled } = draftMode();
  const { id } = params;
  const siteLocale = locale as SiteLocale;
  const { mediaPhoto } = await queryDatoCMS(
    MediaPhotoQueryDocument,
    { locale: siteLocale, id },
    isEnabled
  );
  const slugData = extractSlugData(mediaPhoto);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <MediaTemplate data={mediaPhoto} locale={locale} />
    </Wrapper>
  );
}
