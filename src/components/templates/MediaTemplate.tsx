import MediaPhotoImage from "@/components/MediaPhotoImage";
import MediaLinks from "@/components/MediaLinks";
import MediaTitle from "@/components/MediaTitle";
import MediaDocumentImage from "@/components/MediaDocumentImage";
import MediaDownload from "@/components/MediaDownload";
import MediaAudioPlayer from "@/components/MediaAudioPlayer";
import MediaVideo from "@/components/MediaVideo";

export default function MediaTemplate ({ data, _modelApiKey, locale } : any) {

  return (
      <div className="md:mx-auto md:container">
        {_modelApiKey == "media_photo" ? (
          <>
            <div className="border-b pt-12 pb-6 md:pt-16 md:pb-12 lg:pt-24">
              <MediaPhotoImage photo={data} locale={locale} />
            </div>
            <div className="py-12">
              <MediaLinks data={data} locale={locale} />
            </div>
          </>
        ) : _modelApiKey == "media_document" ? (
          <>
            <div className="pt-12 lg:pt-24 pb-12">
              <MediaTitle
                _modelApyKey={data._modelApiKey}
                data={data}
                locale={locale}
              />
            </div>
            <div className="pb-12">
              <MediaDocumentImage
                data={data}
                locale={locale}
              />
            </div>
            <div className="pb-12 border-b">
              <MediaDownload
                attachment={data.attachment}
                locale={locale}
              />
            </div>
            <div className="py-12">
              <MediaLinks data={data} locale={locale} />
            </div>
          </>
        ) : _modelApiKey == "media_audio" ? (
          <>
            <div className="pt-12 lg:pt-24 pb-12">
              <MediaTitle
                _modelApyKey={data._modelApiKey}
                data={data}
                locale={locale}
              />
            </div>
            <div className="pb-12 border-b">
              <MediaAudioPlayer data={data} locale={locale} />
            </div>
            <div className="py-12">
              <MediaLinks data={data} locale={locale} />
            </div>
          </>
        ) : _modelApiKey == "media_video" ? (
          <>
            <div className="pt-12 lg:pt-24 pb-12">
              <MediaTitle
                _modelApyKey={data._modelApiKey}
                data={data}
                locale={locale}
              />
            </div>
            <div className="grid grid-cols-1 justify-center pb-6 border-b">
              <MediaVideo data={data} locale={locale} />
            </div>
            <div className="py-12">
              <MediaLinks data={data} locale={locale} />
            </div>
          </>
        ) : (
          " "
        )}
      </div>
  );
}

