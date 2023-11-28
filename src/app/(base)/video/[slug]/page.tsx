import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import MediaTemplate from "@/components/templates/MediaTemplate";
import { MediaVideoQueryDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";

const locale = "it";
export default async function Page({ params }: BasicSlugPageProps) {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const { mediaVideo } = await queryDatoCMS(
    MediaVideoQueryDocument,
    { slug: params.slug },
    isEnabled
  );

  return <MediaTemplate data={mediaVideo} locale={locale} />;
}
