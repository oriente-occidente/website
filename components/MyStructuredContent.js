import { StructuredText, renderRule } from 'react-datocms';
import {
  isList,
  isListItem,
  isBlockquote,
  isCode,
  isHeading,
  isParagraph,
  isLink,
} from 'datocms-structured-text-utils';
import Link from 'next/link';

import BlockQuote from 'components/BlockQuote';
import CodeHilight from 'components/CodeHilight';
import Cta from 'components/Cta';
import Gallery from 'components/Gallery';

const StructuredContent = ({ content }) => {
  const renderBlock = (record) => {
    console.log('block', record.__typename);
    switch (record.__typename) {
      case 'GalleryRecord':
        return (
          <div key={record.id}>
            <Gallery images={record.images} />
          </div>
        );
      case 'LinkRecord':
        return (
          <div key={record.id}>
            <pre>{JSON.stringify(record)}</pre>
          </div>
        );
      case 'CtaRecord':
        return (
          <div key={record.id}>
            <Cta cta={record} />
          </div>
        );

      case 'EmbeddedVideoRecord':
      case 'InternalVideoRecord':
      default:
        return null;
    }
  };

  return (
    <div>
      <StructuredText
        data={content}
        renderInlineRecord={({ record }) => {
          console.log('inline', record.__typename);
          return null;
        }}
        renderLinkToRecord={({ record, children, transformedMeta }) => {
          // console.log('link', record.__typename);
          switch (record.__typename) {
            case 'PostRecord':
              return (
                <Link
                  {...transformedMeta}
                  href={`/blog/${record.slug}`}
                  key={record.id}
                  passHref={true}
                >
                  <a>{children}</a>
                </Link>
              );
            case 'TagRecord':
              return (
                <Link
                  {...transformedMeta}
                  href={`/tag/${record.slug}`}
                  key={record.id}
                  passHref={true}
                >
                  <a>{children}</a>
                </Link>
              );
            case 'PageRecord':
              return (
                <Link
                  {...transformedMeta}
                  href={`/${record.slug}`}
                  key={record.id}
                  passHref={true}
                >
                  <a> {children}</a>
                </Link>
              );
            default:
              return null;
          }
        }}
        renderBlock={({ record }) => renderBlock(record)}
        customRules={[
          renderRule(isBlockquote, ({ node, children, key }) => {
            const props = { node, children, key };
            return <BlockQuote {...props} />;
          }),
          renderRule(isCode, ({ node, key }) => {
            return (
              <CodeHilight
                key={key}
                code={node.code}
                language={node.language || 'js'}
                plugins={['line-numbers']}
              />
            );
          }),
          renderRule(isHeading, ({ node, children, key }) => {
            return (
              <h3
                className="font-semibold uppercase  text-violet-light text-lg mx-auto py-12 px-4"
                key={key}
                as={`h${node.level}`}
              >
                {children}
              </h3>
            );
          }),
          renderRule(isList, ({ node, children, key }) => {
            return (
              <div key={key}>
                {node?.style === 'numbered' ? (
                  <li spacing={0} mb={3}>
                    {children}
                  </li>
                ) : (
                  <li spacing={0} mb={3}>
                    {children}
                  </li>
                )}
              </div>
            );
          }),
          renderRule(isListItem, ({ node, children, key }) => {
            return <ul key={key}>{children}</ul>;
          }),
        ]}
      />
    </div>
  );
};

export default StructuredContent;
