import Link from "next/link";
import { DownloadIcon } from "@heroicons/react/outline";

export default function DownloadButton({ link, title}) {
  return (
    <Link href={link} target="_blank" title={title} aria-label="Download in new window">
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#D83D35] cursor-pointer">
        <DownloadIcon aria-hidden="true" className="h-4 w-4" color="#D83D35" />
      </div>
    </Link>
  );
}
