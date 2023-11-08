import MainContent from "@/components/contents/MainContent";
import GenericHero from "@/components/hero/GenericHero";
import GalleryPreview from "@/components/galleries/GalleryPreview";
import SectionsParagraphs from "@/components/contents/SectionsParagraphs";
import OtherSections from "@/components/contents/OtherSections";
import { GenericPageProps } from "../../types";

export default function PageTemplate({ data, locale }: GenericPageProps) {
  const { hero, content, seo } = data;
  const sections = data.sections || [];
  const relatedContents = data.relatedContents || [];
  const otherSections = data.otherSections || [];
  return (
    <div>
      <GenericHero data={hero} locale={locale} />
      <MainContent data={content} locale={locale} />
      {sections.length > 0 && (
        <SectionsParagraphs locale={locale} sections={sections} />
      )}
      {relatedContents.length > 0 && (
        <div className="mt-20 mb-6">
          <GalleryPreview slides={relatedContents} locale={locale} />
        </div>
      )}
      {otherSections.length > 0 && (
        <OtherSections locale={locale} data={otherSections} />
      )}
    </div>
  );
}
