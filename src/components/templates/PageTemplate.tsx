import MainContent from "@/components/contents/MainContent";
import GenericHero from "@/components/hero/GenericHero";
import GalleryPreview from "@/components/galleries/GalleryPreview";
import SectionsParagraphs from "@/components/contents/SectionsParagraphs";
import Relations from "@/components/contents/Relations";
import OtherSections from "@/components/contents/OtherSections";
import { GenericPageProps } from "@/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import translate from "@/lib/locales";
import {
  EventsIndexRecord,
  NetworksIndexRecord,
  NewsIndexRecord,
  ProjectsIndexRecord,
} from "@/graphql/generated";
import { lchown } from "fs";

export default function PageTemplate({ data, locale }: GenericPageProps) {
  const { hero, content } = data;
  const sections = data.sections || [];
  const relatedContents = data.relatedContents || [];
  const otherSections = data.otherSections || [];

  type DataTypes = Partial<
    ProjectsIndexRecord | NewsIndexRecord | NetworksIndexRecord | EventsIndexRecord
  >;

  function mergeArray(data: DataTypes, keys: any[]): any[] {
    return keys.reduce((acc: any, key: keyof DataTypes) => {
      const array = data[key];
      if (array && Array.isArray(array) && array.length > 0) {
        return [...acc, ...array];
      }
      return acc;
    }, []);
  }

  const keysToMerge = ["workhops", "events", "projects"];
  /* è possibile aggiungere altre chiavi */
  const keysMediaToMerge = [
    "_allReferencingMediaPhotos",
    "_allReferencingMediaVideos",
    "_allReferencingMediaAudios",
    "_allReferencingMediaDocuments",
  ];
  /* è possibile aggiungere altre chiavi */

  const activities = mergeArray(data as any, keysToMerge);
  const media = mergeArray(data as any, keysMediaToMerge);

  const fields: string[] = [
    "festivalEditions",
    "artists",
    "companies",
    "news",
    "networks" /* altri campi */,
  ];
  const relations = fields
    .filter(
      (field: string) =>
        (data as any)[field] &&
        Array.isArray((data as any)[field] as any) &&
        (data as any)[field].length > 0
    )
    .map((field) => ({
      key: field,
      title: translate(field, locale),
      content: (data as any)[field],
    }));

  const activityTypes = ["workshop", "event", "project"];
  const mediaTypes = ["media_audio", "media_photo", "media_video", "media_document"];

  const activitiesContent = activities.filter((activity: { _modelApiKey: string }) =>
    activityTypes.includes(activity._modelApiKey)
  );
  const mediaContent = media.filter((media: { _modelApiKey: string }) =>
    mediaTypes.includes(media._modelApiKey)
  );
  if (activitiesContent.length > 0) {
    relations.push({
      key: "activities",
      title: translate("activities", locale),
      content: activitiesContent,
    });
  }
  if (mediaContent.length > 0) {
    relations.push({
      key: "media",
      title: translate("media", locale),
      content: mediaContent,
    });
  }

  return (
    <div>
      <Breadcrumbs
        data={{ ...data, isBreadcrumbs: true }}
        locale={locale as any}
        background={null}
      />
      <GenericHero data={hero} locale={locale} />
      <MainContent data={content} locale={locale} />
      {sections.length > 0 && <SectionsParagraphs locale={locale} sections={sections} />}
      {relatedContents.length > 0 && (
        <div className="mt-20 mb-12">
          <GalleryPreview slides={relatedContents} locale={locale} />
        </div>
      )}
      {otherSections.length > 0 && <OtherSections locale={locale} data={otherSections} />}
      {relations.length > 0 && <Relations locale={locale} relations={relations} />}
    </div>
  );
}
