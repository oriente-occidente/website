import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import type { BasicSlugPageProps } from "@/types";
import queryDatoCMS from "@/lib/fetchDato";
import { PageDocument, ProgramDocument, SiteLocale } from "@/graphql/generated";

const locale = "it";
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled: preview } = draftMode();
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(PageDocument, { locale: siteLocale, slug }, isEnabled);

  if (!data.page) notFound();
  let list;
  if (data.page.isIndex) {
    const { festivalEvents, otherEvents, workshops } = await queryDatoCMS(
      ProgramDocument,
      { locale: siteLocale },
      isEnabled
    );
    list = [...festivalEvents, ...otherEvents, ...workshops];
  }

  // console.log("LIST", list);

  return (
    <div>
      <div className="text-xl">
        My slug page: {params.slug} - {locale} [{preview}]
      </div>
      <div>LOCALE:{locale}</div>
    </div>
  );
}
