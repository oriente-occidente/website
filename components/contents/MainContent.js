import StructuredContent from 'components/MyStructuredContent';

export default function MainContent({ data, locale }) {
  const { blocks, links, value } = data;
  if (
    blocks.length === 0 &&
    links.length === 0 &&
    (!value || value.document.children.length <= 1)
  ) {
    return null;
  }
  return (
    <div className="md:grid md:grid-cols-4 md:gap-4 md:container md:mx-auto">
      <div className="md:col-span-3 md:border-l md:col-start-2 border-color-gray">
        <div className="px-4 md:px-12 py-6 md:py-8">
          <StructuredContent locale={locale} content={data} />
        </div>
      </div>
    </div>
  );
}
