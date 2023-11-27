"use client";
import GenericHero from "@/components/hero/GenericHero";
import { FestivalProgramPageProps } from "@/types";
import { StructuredText } from "react-datocms";
import Filters from "@/components/Filters";

import { useEffect, useState } from "react";
export default function FestivalTemplate({
  data,
  locale,
}: FestivalProgramPageProps) {
  return (
    <div>
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
      <Filters list={data.list as any} locale={locale} />
    </div>
  );
}
