import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import queryDatoCMS from "@/lib/fetchDato";
import { PageDocument, SiteLocale } from "@/graphql/generated";

const locale = "it";
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;

  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  // const data = await queryDatoCMS(
  //   PageDocument,
  //   { locale: siteLocale, slug },
  //   isEnabled
  // );

  return <div>Festival page: {slug}</div>;
}
