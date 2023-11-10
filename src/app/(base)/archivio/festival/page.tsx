import { draftMode } from "next/headers";
import { ProgramDocument, SiteLocale } from "@/graphql/generated";
import queryDatoCMS from "@/lib/fetchDato";
import NewsCard from "@/components/cards/NewsCard";
import CategoryCard from "@/components/cards/CategoryCard";

const locale = "it";

export default async function Page() {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    ProgramDocument,
    { locale: siteLocale },
    isEnabled
  );

  const { festivalEvents }: any = data;

  console.log("FESTIVAL EVENTS", festivalEvents);

  return (
    <div className="container lg:grid lg:grid-cols-2 lg:gap-6">
      {festivalEvents &&
        festivalEvents.map((event: any) => (
          <CategoryCard data={event} locale={locale} />
        ))}
    </div>
  );
};
