import { Fragment } from "react";
import GenericCard from "@/components/cards/GenericCard";
import { GenericIndexPageProps, ArtisticResidenceYear } from "@/types";
import GenericHero from "@/components/hero/GenericHero";
import Breadcrumbs from "../Breadcrumbs";
import MainContent from "@/components/contents/MainContent";
import SectionsParagraphs from "@/components/contents/SectionsParagraphs";
import translate from "@/lib/locales";

export default function IndexPageTemplate({
  data,
  locale,
}: GenericIndexPageProps) {
  const { list, hero, page } = data;
  const latestYear = list?.reduce((latest, item) => {
    const itemYear = new Date(item.startDate).getFullYear();
    return itemYear > latest ? itemYear : latest;
  }, 0);

  const filteredList = list?.filter((item: any) => {
    const itemYear = new Date(item.startDate).getFullYear();
    return itemYear === latestYear;
  });
  const filteredPastList = list?.filter((item: any) => {
    const itemYear = new Date(item.startDate).getFullYear();
    return itemYear !== latestYear;
  });
  const sortArtistByYear = (items: any) => {
    let key =
      page._modelApiKey == "artistic_residencies_index"
        ? "artisticResidence"
        : "associatedArtist";

    items.sort((a: any, b: any) => {
      let aMax = Math.max(...a[key].map((y: ArtisticResidenceYear) => y.year));
      let bMax = Math.max(...b[key].map((y: ArtisticResidenceYear) => y.year));
      return bMax - aMax;
    });
    return items;
  };

  const allHaveEventModelApiKey = list.every(
    (obj) => obj._modelApiKey === "event"
  );
  const isArtist = list.every((obj) => obj._modelApiKey === "artist");
  const dataList = allHaveEventModelApiKey
    ? filteredList
    : isArtist
    ? sortArtistByYear(list)
    : list;

  let pastEvents = [];

  if (allHaveEventModelApiKey) {
    pastEvents = filteredPastList;
  }
  const _modelApiKey = page?._modelApiKey;
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
          {allHaveEventModelApiKey && (
            <div className="border-b border-black mt-20 pb-5 font-semibold uppercase text-lg">
              {translate("next_events", locale)}
            </div>
          )}
          <div className=" lg:grid lg:grid-cols-2 lg:gap-6">
            {dataList?.map((item: any) => (
              <Fragment key={"wrap_" + item.id}>
                <GenericCard locale={locale} data={item} model={_modelApiKey} />
              </Fragment>
            ))}
          </div>
          {allHaveEventModelApiKey && (
            <div className="border-b border-black mt-20 pb-5 font-semibold uppercase text-lg">
              {translate("previous_events", locale)}
            </div>
          )}
          <div className=" lg:grid lg:grid-cols-2 lg:gap-6">
            {pastEvents.length > 0 &&
              pastEvents?.map((item: any) => (
                <Fragment key={"wrap_" + item.id}>
                  <GenericCard
                    locale={locale}
                    data={item}
                    model={_modelApiKey}
                  />
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
