import { draftMode } from "next/headers";
import { MediaArchiveIndexDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import getSeoMeta from "@/lib/seoUtils";
import fetchDato from "@/lib/fetchDato";
import SearchTemplate from "@/components/templates/SearchTemplate";
import MediaSearch from "@/components/aloglia/media/MediaSearch";

const locale = 'en';

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    MediaArchiveIndexDocument,
    { locale: siteLocale },
    false
  );
  const page: any = data?.page || null;
  const meta = getSeoMeta(page);
  return meta;
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    MediaArchiveIndexDocument,
    { locale: siteLocale },
    isEnabled
  );

  return (
    <SearchTemplate data={data.page} locale={locale}>
      <MediaSearch locale={locale} />
    </SearchTemplate>
  );
}
