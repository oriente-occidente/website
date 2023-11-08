import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
const locale = "en";
export default function Page({ params }: BasicSlugPageProps) {
  return (
    <div>
      <div className="text-xl">
        My slug page: {params.slug} - {locale}
      </div>
      <div>LOCALE:{locale}</div>
    </div>
  );
}
