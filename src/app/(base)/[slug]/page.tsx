import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";

export default function Page({ params }: BasicSlugPageProps) {
  const locale = "it";
  const { isEnabled } = draftMode();
  return (
    <div>
      <div className="text-xl">
        My slug page: {params.slug} - {locale} [{isEnabled ? "draft mode" : "-"}
        ]
      </div>
      <div>LOCALE:{locale}</div>
    </div>
  );
}
