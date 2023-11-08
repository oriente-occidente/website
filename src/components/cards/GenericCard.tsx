"use client";
import { GenericCardProps } from "@/types";
import StandardCard from "@/components/cards/StandardCard";
import NewsCard from "@/components/cards/NewsCard";

export default function GenericCard({ data, locale }: GenericCardProps) {
  let card = null;

  switch (data._modelApiKey) {
    case "news":
      card = <NewsCard locale={locale} data={data} />;
      break;
    default:
      card = <StandardCard locale={locale} data={data} />;
      break;
  }

  return card;
}
