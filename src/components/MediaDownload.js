import DownloadButton from "@/components/DownloadButton";
import translate from "@/lib/locales";

export default function MediaDownload ({attachment, locale}){
  const formattedSize = (attachment.size / 1000).toLocaleString(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

    return <div className="grid grid-cols-1 px-6 lg:px-10">
    {attachment && (
      <div
        key={attachment.id}
        className="flex justify-between border-t border-red-alt"
      >
        <div>
          <div className="pt-4 pb-1 text-sm font-bold uppercase ">
            {attachment.title}
          </div>
          <div className="pb-4 text-xs pr-3 md:pr-0">
          {translate("documentSize", locale)} - {formattedSize} kB
          </div>
        </div>
        <div className="pt-3">
          <DownloadButton
            link={attachment.url}
            title={attachment.title}
          />
        </div>
      </div>
    )}
  </div>
}