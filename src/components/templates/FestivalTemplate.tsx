import GenericHero from "@/components/hero/GenericHero";
import { GenericPageProps } from "../../types";
import { StructuredText } from "react-datocms";

export default function FestivalTemplate({ data, locale }: GenericPageProps) {
  const { hero, content } = data;
  return (
    <div>
      <GenericHero data={hero} locale={locale} />
      <StructuredText data={content} />
    </div>
  );
}
