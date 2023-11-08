import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
const locale = "it";
export default function Page({ params }: BasicSlugPageProps) {
  return <div>My slug page: {params.slug}</div>;
}
