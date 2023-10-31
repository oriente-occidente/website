import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import type { BasicSlugPageProps } from "@/types";
import queryDatoCMS from "@/lib/fetchDato";
import { PageDocument, ProgramDocument, SiteLocale } from "@/graphql/generated";
import HeroIndex from "@/components/hero/HeroIndex";
import HeroDetail from "@/components/hero/HeroDetail";
import HeroEmpty from "@/components/hero/HeroEmpty";
import MainContent from "@/components/contents/MainContent";
import OtherSections from "@/components/contents/OtherSections";
import SectionsParagraphs from "@/components/contents/SectionsParagraphs";

const locale = "it";
export default async function Page({ params }: BasicSlugPageProps) {
  const { slug } = params;
  const { isEnabled: preview } = draftMode();
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(PageDocument, { locale: siteLocale, slug }, isEnabled);

  if (!data.page) notFound();
  const { content, sections, otherSections } = data.page;
  let list;
  if (data.page.isIndex) {
    const { festivalEvents, otherEvents, workshops } = await queryDatoCMS(
      ProgramDocument,
      { locale: siteLocale },
      isEnabled
    );
    list = [...festivalEvents, ...otherEvents, ...workshops];
  }

  console.log("DATA", data);

  return (
    <div>
      {data.page.layoutHero == "detail" && data.page.imageHero ? (
        <HeroDetail data={data.page} />
      ) : data.page.layoutHero == "index" && data.page.imageHero ? (
        <HeroIndex data={data.page} locale={locale} />
      ) : (
        data.page.indexType !== "workshops" && <HeroEmpty data={data.page} />
      )}
      {content && <MainContent locale={locale} data={content} />}
      {sections && sections.length > 0 && (
        <SectionsParagraphs locale={locale} sections={sections} />
      )}
      {otherSections && otherSections.length > 0 && (
        <OtherSections locale={locale} data={otherSections} />
      )}
    </div>
  );
}
