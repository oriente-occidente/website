"use client";
import { GenericCardProps } from "@/types";
import StandardCard from "@/components/cards/StandardCard";
import NewsCard from "@/components/cards/NewsCard";
import MediaCard from "@/components/cards/MediaCard";
import CategoryCard from "./CategoryCard";
import ArtistCard from "./ArtistCard";

export default function GenericCard({ data, locale, model, count= 0 }: GenericCardProps) {
  let card = null;
  switch (data._modelApiKey) {
    case "news":
      card = <NewsCard locale={locale} data={data} count={count}/>;
      break;
    case "media_photo":
    case "media_audio":
    case "media_video":
    case "media_document":
      card = <MediaCard locale={locale} data={data} />;
      break;
    case "event":
    case "project":
    case "network":
    case "festival_edition":
    case "company":
    case "companies":
    case "workshop":
      card = <CategoryCard locale={locale} data={data}  />;
      break;
    case "artist":
      card = <ArtistCard locale={locale} data={data} model={model} />;
      break;
    default:
      card = <StandardCard locale={locale} data={data} />;
      break;
  }

  return card;
}
