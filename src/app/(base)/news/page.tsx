import fetchDato from "@/lib/fetchDato";
import { draftMode } from "next/headers";
import NewsCard from "@/components/cards/NewsCard";
import { NewsIndexDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import { Fragment } from "react";

const locale = "it";

export default async function Page() {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    NewsIndexDocument,
    { locale: siteLocale, archived: false },
    isEnabled
  );
  const list = data.newsIndex || [];
  return (
    <div>
      <div className="border-color-gray border-t py-6">
        <div className="container lg:grid lg:grid-cols-2 lg:gap-6">
          {list.map((item) => (
            <Fragment key={"wrap_" + item.id}>
              <NewsCard locale={locale} data={item} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
