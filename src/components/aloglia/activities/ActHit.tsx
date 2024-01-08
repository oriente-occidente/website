"use client";
import { Hit as AlgoliaHit } from "instantsearch.js/es/types";
import MediaCard from "@/components/cards/MediaCard";
import ArtistCard from "@/components/cards/ArtistCard";
import CategoryCard from "@/components/cards/CategoryCard";
export type VideoHitType = AlgoliaHit<{
  objectID: string;
  title: string;
  slug: string;
  image: string;
  position: number;
  abstract: string;
  artworks: {
    title: string;
  }[];
  museums: {
    title: string;
  }[];
  categories: {
    title: string;
  }[];
}>;

type HitProps = {
  hit: VideoHitType;
  locale: string;
};

export default function VideoHit({ hit, locale }: HitProps) {
  const { objectID } = hit;
  return (
    <div key={`hit-${objectID}`}>
      <CategoryCard data={hit} locale={locale} />
    </div>
  );
}
