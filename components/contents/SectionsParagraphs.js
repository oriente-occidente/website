import Link from 'next/link';
import StructuredContent from 'components/MyStructuredContent';

export default function SectionsParagraphs({ sections, locale }) {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-4 md:container md:mx-auto">
      <div className="px-4 hidden md:block">
        <div className="sticky top-0 py-2">
          {sections.map((section) => (
            <div key={section.id}>
              <Link href={`#${section.id}`}>
                <a className="" title={`Link to ${section.title}`}>
                  <h2 className="uppercase text-xxs tracking-wider mb-1">
                    {section.title}
                  </h2>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="md:col-span-3 md:border-l border-color-gray">
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="px-4 md:py-2 md:px-12"
          >
            <StructuredContent locale={locale} content={section.body} />
          </div>
        ))}
      </div>
    </div>
  );
}
