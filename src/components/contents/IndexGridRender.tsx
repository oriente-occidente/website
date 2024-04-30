import { Fragment } from "react";
import translate from "@/lib/locales";
import GenericCard from "../cards/GenericCard";
import { getUpcomingEvents, getPastEvents, sortArtistByYear } from "@/lib/utils";

export default function IndexGridRender({
  list,
  _modelApiKey,
  locale,
}: {
  list: any;
  _modelApiKey: string;
  locale: string;
}) {
  const GenerateCardBlock = ({ items }: { items: any }) => (
    <div className="lg:grid lg:grid-cols-2 lg:gap-6">
      {items.map((item: any, idx: string) => (
        <Fragment key={"wrap_" + item.id || idx}>
          <GenericCard locale={locale} data={item} model={_modelApiKey} />
        </Fragment>
      ))}
    </div>
  );

  const GenerateTitle = ({ title }: { title: string }) => (
    <div className="border-b border-black mt-20 pb-5 font-semibold uppercase text-lg">
      {translate(title, locale)}
    </div>
  );

  const GenerateBlock = ({ title, items }: { title?: string; items: any }) => (
    <>
      {title && <GenerateTitle title={title} />}
      <GenerateCardBlock items={items} />
    </>
  );

  switch (_modelApiKey) {
    case "events_index":
      const upComingEvents = getUpcomingEvents(list);
      const pastEvents = getPastEvents(list);
      return (
        <>
          {upComingEvents && upComingEvents.length > 0 && (
            <GenerateBlock title="next_events" items={upComingEvents} />
          )}
          {pastEvents && pastEvents.length > 0 && (
            <GenerateBlock title="previous_events" items={pastEvents} />
          )}
        </>
      );
    case "artists_index":
    case "artistic_residencies_index":
      const data = sortArtistByYear(list, _modelApiKey);
      return <GenerateBlock items={data} />;
    default:
      return <GenerateBlock items={list} />;
  }
}
