import MainContent from "@/components/contents/MainContent";
import GenericHero from "@/components/hero/GenericHero";
import GalleryPreview from "@/components/galleries/GalleryPreview";
import SectionsParagraphs from "@/components/contents/SectionsParagraphs";

export default function PageTemplate({
  data,
  locale,
}: {
  data: any;
  locale: string;
}) {
  const { hero, content, seo, sections, relatedContents } = data;
  return (
    <div>
      <GenericHero data={hero} locale={locale} />
      <MainContent data={content} locale={locale} />
      {sections?.length > 0 && (
        <SectionsParagraphs locale={locale} sections={sections} />
      )}
      {relatedContents?.length > 0 && (
        <div className="mt-20 mb-6">
          <GalleryPreview slides={relatedContents} locale={locale} />
        </div>
      )}
    </div>
  );
}
