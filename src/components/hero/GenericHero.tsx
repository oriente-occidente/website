"use client";
import { GenericProps } from "@/types";
import HeroIndex from "@/components/hero/HeroIndex";
import HeroDetail from "@/components/hero/HeroDetail";
import HeroEmpty from "@/components/hero/HeroEmpty";

export default function GenericHero({ data, locale }: GenericProps) {
  console.log("DATA", data);
  if (!data) return null;
  let hero = null;
  const layout = data.layoutHero || null;
  switch (layout) {
    case "index":
      hero = <HeroIndex data={data} locale={locale} />;
      break;
    case "detail":
      hero = <HeroDetail data={data} locale={locale} />;
      break;
    default:
      hero = <HeroEmpty data={data} locale={locale} />;
      break;
  }

  return hero;
}
