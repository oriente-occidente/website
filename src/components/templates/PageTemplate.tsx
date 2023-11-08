import MainContent from "@/components/contents/MainContent";
import GenericHero from "../hero/GenericHero";

export default function PageTemplate({
  data,
  locale,
}: {
  data: any;
  locale: string;
}) {
  const { hero, content, seo } = data;
  return (
    <div>
      <GenericHero data={hero} locale={locale} />
      <MainContent data={content} locale={locale} />
    </div>
  );
}
