"use client";
import { GenericCardProps } from "@/types";
import StandardCard from "@/components/cards/StandardCard";
import NewsCard from "@/components/cards/NewsCard";
import MediaCard from "@/components/cards/MediaCard";
import CategoryCard from "./CategoryCard";

export default function GenericCard({ data, locale }: GenericCardProps) {
  let card = null;
  switch (data._modelApiKey) {
    case "news":
      card = <NewsCard locale={locale} data={data} />;
      break;
    case "media_audio" || "media_audio" || "media_video" || "media_document" :
        card = <MediaCard locale={locale} data={data} />;
        break;
    case "event":
      card = <CategoryCard locale={locale} data={data} />;
      break;
    case "project":
      card = <CategoryCard locale={locale} data={data} />;
      break;
    case "network":
      card = <CategoryCard locale={locale} data={data} />;
      break;
    default:
      card = <StandardCard locale={locale} data={data} />;
      break;
  }

  return card;
}
