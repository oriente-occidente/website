"use client";
import MediaPhotoImage from "@/components/MediaPhotoImage";
import MediaLinks from "@/components/MediaLinks";
import MediaTitle from "@/components/MediaTitle";
import MediaDocumentImage from "@/components/MediaDocumentImage";
import MediaDownload from "@/components/MediaDownload";
import MediaAudioPlayer from "@/components/MediaAudioPlayer";
import MediaVideo from "@/components/MediaVideo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Wrapper from "@/components/layout/Wrapper";
import { extractSlugData } from "@/lib/utils";

export default function MediaTemplate({ data, locale }: any) {
  if (!data?._modelApiKey) return;

  const { _modelApiKey } = data;

  const renderMedia = (apikey: string) => {
    switch (apikey) {
      case "media_photo":
        return (
          <div className="border-b pt-12 pb-6 md:pt-16 md:pb-12 lg:pt-24">
            <MediaPhotoImage photo={data} locale={locale} />
          </div>
        );
      case "media_document":
        return (
          <>
            <div className="pt-12 lg:pt-24 pb-12">
              <MediaTitle _modelApyKey={data._modelApiKey} data={data} locale={locale} />
            </div>
            {data.image && (
              <div className="pb-12">
                <MediaDocumentImage data={data} locale={locale} />
              </div>
            )}
            <div className="pb-12 border-b">
              <MediaDownload attachment={data.attachment} locale={locale} />
            </div>
          </>
        );
      case "media_audio":
        return (
          <>
            <div className="pt-12 lg:pt-24 pb-12">
              <MediaTitle _modelApyKey={data._modelApiKey} data={data} locale={locale} />
            </div>
            <div className="pb-12 border-b">
              <MediaAudioPlayer data={data} locale={locale} />
            </div>
          </>
        );
      case "media_video":
        return (
          <>
            <div className="pt-12 lg:pt-24 pb-12">
              <MediaTitle _modelApyKey={data._modelApiKey} data={data} locale={locale} />
            </div>
            <div className="grid grid-cols-1 justify-center pb-6 border-b">
              <MediaVideo data={data} locale={locale} />
            </div>
          </>
        );
      default:
        return null;
    }
  };
  // const slugData = extractSlugData(data);
  return (
    // <Wrapper locale={locale} slugData={slugData}>
    <div className="mx-auto md:container">
      <Breadcrumbs data={data} locale={locale as any} background={null} />
      <div className=" md:px-0 lg:px-24 xl:px-64">
        {renderMedia(_modelApiKey)}
        <div className="py-12">
          <MediaLinks data={data} locale={locale} />
        </div>
      </div>
    </div>
    // </Wrapper>
  );
}
