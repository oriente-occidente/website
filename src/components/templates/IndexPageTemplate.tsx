import { Fragment } from "react";
import GenericCard from "@/components/cards/GenericCard";
import { GenericIndexPageProps } from "@/types";
import GenericHero from "@/components/hero/GenericHero";
import Breadcrumbs from "../Breadcrumbs";
import MainContent from "@/components/contents/MainContent";
import SectionsParagraphs from "@/components/contents/SectionsParagraphs";
import { StructuredText } from "react-datocms";

export default function IndexPageTemplate({ data, locale }: GenericIndexPageProps) {
  const { list, hero, page } = data;
  const latestYear = list?.reduce((latest, item) => {
    const itemYear = new Date(item.startDate).getFullYear();
    return itemYear > latest ? itemYear : latest;
  }, 0);

  const filteredList = list?.filter((item: any) => {
    const itemYear = new Date(item.startDate).getFullYear();
    return itemYear === latestYear;
  });

  const allHaveEventModelApiKey = list.every((obj) => obj._modelApiKey === "event");
  const dataList = allHaveEventModelApiKey ? filteredList : list;
  const _modelApiKey = page?._modelApiKey;
  return (
    <div>
      <Breadcrumbs data={{ _modelApiKey }} locale={locale as any} background={null} />
      <GenericHero data={hero} locale={locale} />
      {page.content && <MainContent data={page.content} locale={locale} />}
      {page.sections?.length > 0 && (
        <SectionsParagraphs locale={locale} sections={page.sections} />
      )}
      <div className="border-color-gray border-t py-6">
        <div className="container lg:grid lg:grid-cols-2 lg:gap-6">
          {dataList?.map((item: any) => (
            <Fragment key={"wrap_" + item.id}>
              <GenericCard locale={locale} data={item} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
