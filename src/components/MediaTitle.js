import { PaperClipIcon } from "@heroicons/react/outline";
import { MusicNoteIcon } from "@heroicons/react/outline";
import { VideoCameraIcon } from "@heroicons/react/outline";
import translate from "lib/locales";

export default function MediaTitle({ _modelApyKey, data, locale }) {
  return <div className="px-10">
    <div className="flex items-center gap-2 text-sm text-[#D83D35]">
      {_modelApyKey == "media_document" ? (
        <PaperClipIcon aria-hidden="true" className="h-5 w-5" color="#D83D35" />
      ) : _modelApyKey == "media_audio" ? (
        <MusicNoteIcon aria-hidden="true" className="h-5 w-5" color="#D83D35" />
      ) : (
        <VideoCameraIcon
          aria-hidden="true"
          className="h-5 w-5"
          color="#D83D35"
        />
      )}
      <div>
        {_modelApyKey == "media_document"
          ? translate("document", locale) + " "
          : _modelApyKey == "media_audio"
          ? translate("audio", locale) + " "
          : translate("video", locale) + " "}
        {data.id}
      </div>
    </div>
    <div className="py-6 text-base font-bold uppercase md:text-lg">
      {data.title}
    </div>
    <div className="text-sm leading-7">
      {data.description}
    </div>
  </div>
}
