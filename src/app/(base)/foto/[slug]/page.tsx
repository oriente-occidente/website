import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import MediaTemplate from "@/components/templates/MediaTemplate";
import { MediaPhotoQueryDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";

const locale = "it";
export default async function Page({ params }: BasicSlugPageProps) {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    MediaPhotoQueryDocument,
    { locale: siteLocale },
    isEnabled
  );

    console.log(data)

  return (
      <MediaTemplate data={data.mediaPhoto} _modelApiKey={data.mediaPhoto?._modelApiKey} locale={locale}/>
  );
}
