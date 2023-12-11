import { draftMode } from "next/headers";
import { FestivalIndexDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";
import CategoryCard from "@/components/cards/CategoryCard";
import { Fragment } from "react";

const locale = 'en';

export default async function Page() {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    FestivalIndexDocument,
    { locale: siteLocale },
    isEnabled
  );

  const { festivalEvents }: any = data;

  return (
    <div className="container lg:grid lg:grid-cols-2 lg:gap-6">
      {festivalEvents &&
        festivalEvents.map((event: any) => (
          <Fragment key={event.id}>
            <CategoryCard data={event} locale={locale} />
          </Fragment>
        ))}
    </div>
  );
}
