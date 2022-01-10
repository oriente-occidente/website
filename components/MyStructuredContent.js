import { StructuredText, renderRule } from 'react-datocms';
import { isBlockquote } from 'datocms-structured-text-utils';
import Link from 'next/link';

import BlockQuote from 'components/BlockQuote';
import Gallery from 'components/galleries/Gallery';
import VideoPlayer from 'components/video/VideoPlayer';
import VideoEmbedded from 'components/video/VideoEmbedded';

import { resolveLinkById } from 'lib/utils';

const StructuredContent = ({ locale, content }) => {
  const renderBlock = (record) => {
    console.log('block', record.__typename);
    switch (record.__typename) {
      case 'GalleryRecord':
        return (
          <div key={record.id}>
            <Gallery images={record.images} />
          </div>
        );
      case 'ImageBlockRecord':
        return (
          <div key={record.id}>
            <Gallery images={[record.image]} />
          </div>
        );
      case 'VideoBlockRecord':
        return (
          <div key={record.id}>
            <>
              {record.externalVideo?.url && (
                <VideoEmbedded {...record} video={record.externalVideo} />
              )}
              {record.externalVideo?.url && (
                <VideoPlayer {...record} videoFile={record.internalVideo} />
              )}
            </>
          </div>
        );
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
          const resolved = resolveLinkById(record.id, locale);
          return (
            <Link
              {...transformedMeta}
              href={resolved}
              key={record.id}
              locale={locale}
            >
              <a>{children}</a>
            </Link>
          );
        }}
        renderBlock={({ record }) => renderBlock(record)}
        customRules={[
          renderRule(isBlockquote, ({ node, children, key }) => {
            const props = { node, children, key };
            return <BlockQuote {...props} />;
          }),
        ]}
      />
    </div>
  );
};

export default StructuredContent;
