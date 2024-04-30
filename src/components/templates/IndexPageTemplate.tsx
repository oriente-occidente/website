import { GenericIndexPageProps } from "@/types";
import GenericHero from "@/components/hero/GenericHero";
import Breadcrumbs from "../Breadcrumbs";
import MainContent from "@/components/contents/MainContent";
import SectionsParagraphs from "@/components/contents/SectionsParagraphs";
import IndexGridRender from "../contents/IndexGridRender";

export default function IndexPageTemplate({ data, locale }: GenericIndexPageProps) {
  const { list, hero, page } = data;
  const _modelApiKey = page?._modelApiKey || "";

  return (
    <div>
      <Breadcrumbs data={page} locale={locale as any} background={null} />
      <GenericHero data={hero} locale={locale} />
      {page.content && <MainContent data={page.content} locale={locale} />}
      {page.sections?.length > 0 && (
        <SectionsParagraphs locale={locale} sections={page.sections} />
      )}
      <div className="border-color-gray border-t py-6">
        <div className="container">
          <IndexGridRender list={list} _modelApiKey={_modelApiKey} locale={locale} />
        </div>
      </div>
    </div>
  );
}
