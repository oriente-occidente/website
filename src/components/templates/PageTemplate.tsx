import MainContent from "@/components/contents/MainContent";
import GenericHero from "@/components/hero/GenericHero";
import GalleryPreview from "@/components/galleries/GalleryPreview";
import SectionsParagraphs from "@/components/contents/SectionsParagraphs";
import Relations from "@/components/contents/Relations";
import OtherSections from "@/components/contents/OtherSections";
import { GenericPageProps } from "@/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import translate from "@/lib/locales";
import { LoaderValue } from "next/dist/shared/lib/image-config";

export default function PageTemplate({ data, locale }: GenericPageProps) {
  const { hero, content } = data;
  const sections = data.sections || [];
  const relatedContents = data.relatedContents || [];
  const otherSections = data.otherSections || [];
  console.log("data.category", data.category);

  interface DataTypes {
    festivalEditions?: [];
    artists?: [];
    companies?: [];
    news?: [];
    networks?: [];
    workhops?: [];
    events?: [];
    projects?: [];
    activities?: [];
    // ... altri campi
  }

  function mergeArray(data: DataTypes, keys: any[]): any[] {
    return keys.reduce((acc, key) => {
      const array = data[key];
      if (Array.isArray(array) && array.length) {
        return [...acc, ...array];
      }
      return acc;
    }, []);
  }

  const keysToMerge = ["workhops", "events", "projects"];
  /* è possibile aggiungere altre chiavi */

  const activities = mergeArray(data, keysToMerge);

  const fields: (keyof DataTypes)[] = [
    "festivalEditions",
    "artists",
    "companies",
    "news",
    "networks" /* altri campi */,
  ];
  const relations = fields
    .filter(
      (field) =>
        (data[field] as any) &&
        Array.isArray(data[field] as any) &&
        data[field].length > 0
    )
    .map((field) => ({
      key: field,
      title: translate(field, locale),
      content: data[field],
    }));

  const activityTypes = ["workshop", "event", "project"];
  const activitiesContent = activities.filter(
    (activity: { _modelApiKey: string }) =>
      activityTypes.includes(activity._modelApiKey)
  );

  if (activitiesContent.length > 0) {
    relations.push({
      key: "activities",
      title: translate("activities", locale),
      content: activitiesContent,
    });
  }

  return (
    <div>
      <Breadcrumbs data={data} locale={locale as any} background={null} />
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
      {relations.length > 0 && (
        <Relations locale={locale} relations={relations} />
      )}
    </div>
  );
}
