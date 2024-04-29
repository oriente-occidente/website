"use client";
import { Fragment } from "react";
import Link from "next/link";
import StructuredContent from "@/components/MyStructuredContent";

export default function SectionsParagraphs({ sections, locale, layout = "" }) {
  const sectionsWithTitle = sections.filter((s) => s.title !== "");
  return (
    <div className="md:mx-auto md:container md:grid md:grid-cols-4 md:gap-4">
      {sectionsWithTitle.length > 0 && (
        <nav className="hidden px-4 md:block">
          <ul
            className={`${
              layout == "no-space" ? "top-6" : "top-24"
            } sticky py-2`}
          >
            {sections.map((section) => (
              <li key={section.id}>
                {section.title && (
                  <Link
                    href={`#${section.id}`}
                    className={`${layout == "no-space" ? "" : "-top-20"}`}
                    title={`Link to ${section.title}`}
                  >
                    <span className="mb-1 text-xxs uppercase tracking-wider hover:text-red">
                      {section.title}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="border-color-gray md:col-span-3 md:border-l">
        {sections.map((section) => (
          <Fragment key={section.id}>
            <div
              className={`${
                layout == "no-space" ? "-top-4" : "-top-20 xl:-top-32"
              } invisible relative block`}
              id={section.id}
            />
            <div className="px-4 md:py-2 md:px-12">
              <StructuredContent locale={locale} content={section.body} />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
