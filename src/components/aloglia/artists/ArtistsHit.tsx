"use client";
import { Hit as AlgoliaHit } from "instantsearch.js/es/types";
import MediaCard from "@/components/cards/MediaCard";
import CategoryCard from "@/components/cards/CategoryCard";

export type ArtistHitType = AlgoliaHit<{
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
  hit: ArtistHitType;
  locale: string;
};

export default function ArtistHit({ hit, locale }: HitProps) {
  const { objectID } = hit;
  console.log("hit", hit);
  return (
    <div key={`hit-${objectID}`}>
      <CategoryCard data={hit} locale={locale} />
    </div>
  );
}
