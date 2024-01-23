import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import MediaTemplate from "@/components/templates/MediaTemplate";
import { MediaAudioQueryDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = 'en';
export default async function Page({ params }: BasicSlugPageProps) {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const { mediaAudio } = await queryDatoCMS(
    MediaAudioQueryDocument,
    { slug: params.slug },
    isEnabled
  );
  const slugData = extractSlugData(mediaAudio);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <MediaTemplate data={mediaAudio} locale={locale} />
    </Wrapper>
  );
}
