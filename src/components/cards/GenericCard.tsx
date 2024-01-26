"use client";
import { GenericCardProps } from "@/types";
import StandardCard from "@/components/cards/StandardCard";
import NewsCard from "@/components/cards/NewsCard";
import MediaCard from "@/components/cards/MediaCard";
import CategoryCard from "./CategoryCard";
import ArtistCard from "./ArtistCard";

export default function GenericCard({ data, locale, model }: GenericCardProps) {
  let card = null;
  switch (data._modelApiKey) {
    case "news":
      card = <NewsCard locale={locale} data={data} />;
      break;
    case "media_photo" || "media_audio" || "media_video" || "media_document":
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
    case "artist":
      card = <ArtistCard locale={locale} data={data} model={model} />;
      break;
    case "festival_edition":
      card = <CategoryCard locale={locale} data={data} model={model} />;
      break;
    case "company":
      card = <CategoryCard locale={locale} data={data} model={model} />;
      break;
    case "companies":
      card = <CategoryCard locale={locale} data={data} model={model} />;
      break;
    case "workshop":
      card = <CategoryCard locale={locale} data={data} model={model} />;
      break;
    default:
      card = <StandardCard locale={locale} data={data} />;
      break;
  }

  return card;
}
