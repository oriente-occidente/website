import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
const locale = "it";

export default function Page({ params }: BasicSlugPageProps) {
  const { isEnabled: preview } = draftMode();
  return (
    <div>
      <div className="text-xl">
        My slug page: {params.slug} - {locale} [{preview}]
      </div>
      <div>LOCALE:{locale}</div>
    </div>
  );
}
