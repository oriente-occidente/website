import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
const locale = "it";
export default function Page({ params }: BasicSlugPageProps) {
  const { isEnabled: preview } = draftMode();
  return <div>My slug page: {params.slug}</div>;
}
