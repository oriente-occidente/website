import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import MediaTemplate from "@/components/templates/MediaTemplate";
import { MediaAudioQueryDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";

const locale = "it";
export default async function Page({ params }: BasicSlugPageProps) {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    MediaAudioQueryDocument,
    { slug: params.slug },
    isEnabled
  );

  return (
      <MediaTemplate data={data.mediaAudio} _modelApiKey={data.mediaAudio?._modelApiKey} locale={locale}/>
  );
}
