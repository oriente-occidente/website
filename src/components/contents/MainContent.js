"use client";
import StructuredContent from "@/components/MyStructuredContent";
import { render as toPlainText } from "datocms-structured-text-to-plain-text";

export default function MainContent({ data, locale }) {
  if (!data) return null;
  const blocks = data?.blocks || [];
  const links = data?.links || [];
  const text = toPlainText(data);
  const len = text ? text.trim().length : 0;
  // console.log('LENGTH', len);
  if (blocks.length === 0 && links.length === 0 && len === 0) {
    return null;
  }
  return (
    <main id="main-content" className="md:container md:mx-auto md:grid md:grid-cols-4 md:gap-4">
      <div className="border-color-gray md:col-span-3 md:col-start-2 md:border-l md:pt-6">
        <div className="px-4 py-6 md:px-12 md:py-8">
          <StructuredContent locale={locale} content={data} />
        </div>
      </div>
    </main>
  );
}
