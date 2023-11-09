import DownloadButton from "components/DownloadButton";

export default function MediaDownload ({attachment, locale}){
    return <div className="grid grid-cols-1 px-6 lg:px-10">
    {attachment && (
      <div
        key={attachment.id}
        className="flex justify-between border-t border-[#D83D35]"
      >
        <div>
          <div className="pt-4 pb-1 text-sm font-bold uppercase">
            {attachment.title}
          </div>
          <div className="pb-4 text-xs">
            Dimensioni del documento - {attachment.size * 0.001} kB
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