"use client";
import GenericHero from "@/components/hero/GenericHero";
import { FestivalProgramPageProps } from "@/types";
import { StructuredText } from "react-datocms";
import Filters from "@/components/Filters";
import AnchorBlock from "@/components/AnchorBlock";
import translate from "@/lib/locales";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewsCard from "../cards/NewsCard";
import { Fragment } from "react";

export default function FestivalTemplate({
  data,
  locale,
}: FestivalProgramPageProps) {
  const news = data.page.news || [];
  return (
    <div>
      <Breadcrumbs data={data?.page} locale={locale as any} background={null} />
      <GenericHero data={data?.hero} locale={locale} />
      {data?.page?.content && (
        <div className="md:container md:mx-auto md:grid md:grid-cols-4 md:gap-4">
          <div className="border-color-gray md:col-span-3 md:col-start-2 md:border-l md:pt-6">
            <div className="px-4 py-6 md:px-12 md:py-8">
              <StructuredText data={data?.page?.content} />
            </div>
          </div>
        </div>
      )}
      <div className="w-full lg:border-t-black border-t" />
      {news.length > 0 && <AnchorBlock data={null} locale={locale} />}
      <div id="program" className="container mx-auto px-0">
        <div className="uppercase font-bold text-lg px-8 pt-12">
          {translate("program", locale)}
        </div>
      </div>
      <Filters list={data.list as any} locale={locale} />
      {news.length > 0 && (
        <div id="news" className="container mx-auto">
          <div className="uppercase font-bold text-lg pt-12">
            {translate("news", locale)}
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-6 py-6">
            {news.map((n: any, id: any) => (
              <Fragment key={"news_" + id}>
                <NewsCard locale={locale} data={n} />
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
