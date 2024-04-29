import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function DownloadButton({ link, title}) {
  return (
    <Link href={link} target="_blank" title={title} aria-label="Download in new window">
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#D83D35] cursor-pointer">
        <ArrowDownTrayIcon aria-hidden="true" focusable="false" className="h-4 w-4" color="#D83D35" />
      </div>
    </Link>
  );
}
