import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import MediaTemplate from "@/components/templates/MediaTemplate";
import { MediaVideoQueryDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

const locale = 'en';
export default async function Page({ params }: BasicSlugPageProps) {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const { mediaVideo } = await queryDatoCMS(
    MediaVideoQueryDocument,
    { slug: params.slug },
    isEnabled
  );
  const slugData = extractSlugData(mediaVideo);
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <MediaTemplate data={mediaVideo} locale={locale} />;
    </Wrapper>
  );
}
