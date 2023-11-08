import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
import PageTemplate from "@/components/templates/PageTemplate";
const locale = "it";

export default function Page({ params }: BasicSlugPageProps) {
  const { isEnabled } = draftMode();
  const pageData = {
    hero: null,
    content: null,
  };
  return null;
  // return <PageTemplate data={pageData} locale={locale} />;
}
