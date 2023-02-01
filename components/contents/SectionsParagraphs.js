import { Fragment } from "react";
import Link from "next/link";
import StructuredContent from "components/MyStructuredContent";

export default function SectionsParagraphs({ sections, locale, layout = "" }) {
  return (
    <div className="md:container md:mx-auto md:grid md:grid-cols-4 md:gap-4">
      <div className="hidden px-4 md:block">
        <div
          className={`${layout == "no-space" ? "top-6" : "top-24"} sticky py-2`}
        >
          {sections.map((section) => (
            <>
              {section.title &&
                <div key={section.id}>
                  <Link href={`#${section.id}`}>
                    <a
                      className={`${layout == "no-space" ? "" : "-top-20"}`}
                      title={`Link to ${section.title}`}
                    >
                      <h2 className="text-xxs hover:text-red mb-1 uppercase tracking-wider">
                        {section.title}
                      </h2>
                    </a>
                  </Link>
                </div>
              }
            </>
          ))}
        </div>
      </div>

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
