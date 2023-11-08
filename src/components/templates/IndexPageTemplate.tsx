import { Fragment } from "react";
import GenericCard from "@/components/cards/GenericCard";
import { GenericIndexPageProps } from "@/types";
import GenericHero from "@/components/hero/GenericHero";

export default function IndexPageTemplate({
  data,
  locale,
}: GenericIndexPageProps) {
  const { list, seo, hero } = data;
  return (
    <div>
      <GenericHero data={hero} locale={locale} />
      <div className="border-color-gray border-t py-6">
        <div className="container lg:grid lg:grid-cols-2 lg:gap-6">
          {list?.map((item: any) => (
            <Fragment key={"wrap_" + item.id}>
              <GenericCard locale={locale} data={item} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
