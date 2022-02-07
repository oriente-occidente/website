import { Fragment } from "react";
import Link from "next/link";
import StructuredContent from "components/MyStructuredContent";

export default function SectionsParagraphs({ sections, locale }) {
  return (
    <div className="md:container md:mx-auto md:grid md:grid-cols-4 md:gap-4">
      <div className="hidden px-4 md:block">
        <div className="sticky top-20 py-2">
          {sections.map((section) => (
            <div key={section.id}>
              <Link href={`#${section.id}`}>
                <a className="-top-20" title={`Link to ${section.title}`}>
                  <h2 className="mb-1 text-xxs uppercase tracking-wider hover:text-red">
                    {section.title}
                  </h2>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="border-color-gray md:col-span-3 md:border-l">
        {sections.map((section) => (
          <Fragment key={section.id}>
            <div
              className="invisible relative -top-20 block xl:-top-32"
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
