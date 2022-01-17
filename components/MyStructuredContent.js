import { StructuredText, renderRule } from 'react-datocms';
import { isBlockquote, isHeading, isParagraph } from 'datocms-structured-text-utils';
import { Image } from 'react-datocms';
import Link from 'next/link';

import BlockQuote from 'components/BlockQuote';
import GalleryStandard from 'components/galleries/GalleryStandard';
import VideoPlayer from 'components/video/VideoPlayer';
import VideoEmbedded from 'components/video/VideoEmbedded';

import { resolveLinkById } from 'lib/utils';

const StructuredContent = ({ locale, content }) => {
  const renderBlock = (record) => {
    console.log('block', record.__typename);
    switch (record.__typename) {
      case 'GalleryRecord':
        return (
          <div className="py-2 lg:py-10 2xl:py-16">
            <div key={record.id}>
              <GalleryStandard slides={record.images} />
            </div>
          </div>
        );
      case 'ImageBlockRecord':
        return (
          <div key={record.id}>
            <div className="py-2 lg:py-10 2xl:py-16">
              <Image
                className="max-w-[800px]"
                data={record?.image?.responsiveImage}
                alt={record?.image?.alt}
                title={record?.image?.title}
              />
            </div>
          </div>
        );
      case 'VideoBlockRecord':
        return (
          <div key={record.id}>
            <div className="py-2 lg:py-10 2xl:py-16">
              {record.externalVideo?.url && (
                <VideoEmbedded {...record} video={record.externalVideo} />
              )}
              {record.externalVideo?.url && (
                <VideoPlayer {...record} videoFile={record.internalVideo} />
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="formatted-content">
      <StructuredText
        data={content}
        renderInlineRecord={({ record }) => {
          console.log('inline', record.__typename);
          const resolved = resolveLinkById(record.id, locale);
          return (
            <Link
              href={resolved}
              key={record.id}
              locale={locale}
            >
              <a className="button--with-arrow">
                {record.title}
              </a>
            </Link>
          );
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
              <a className="underline">
                {children}
              </a>
            </Link>
          );
        }}
        renderBlock={({ record }) => renderBlock(record)}
        customRules={[
          renderRule(isBlockquote, ({ node, children, key }) => {
            const props = { node, children, key };
            return <BlockQuote {...props} />;
          }),
          renderRule(isHeading, ({ node, children }) => {
            const classTag = node.level;
            return <div className={`h${classTag}`}>{children}</div>
          })
        ]}
      />
    </div>
  );
};

export default StructuredContent;

