import { StructuredText, renderRule } from "react-datocms";
import { isBlockquote, isHeading, isParagraph } from "datocms-structured-text-utils";
import { Image } from "react-datocms";
import Link from "next/link";

import BlockQuote from "components/BlockQuote";
import GalleryStandard from "components/galleries/GalleryStandard";
import VideoPlayer from "components/video/VideoPlayer";
import VideoEmbedded from "components/video/VideoEmbedded";
import Partners from "components/Partners";

import { resolveLinkById } from "lib/utils";

const StructuredContent = ({ locale, content }) => {
  const renderBlock = (record) => {
    console.log("block", record);
    switch (record.__typename) {
      case "WorkshopCategoriesBlockRecord":
        return (
          <div className="lg:py-12 2xl:py-16" key={record.id}>
            {record.category.map((cat, id) => {
              return (
                <div
                  key={id}
                  className={`flex items-center overflow-hidden border-b ${
                    id === 0 && "border-t"
                  } border-gray py-8`}
                >
                  <div>
                    <svg height="58" width="58">
                      <circle cx="29" cy="29" r="29" fill={cat.color.hex} />
                    </svg>
                  </div>
                  <div className="px-6 lg:text-2xl">{cat.title.toUpperCase()} </div>
                  <div className="hidden h-[38px] w-[38px] lg:block lg:bg-arrow-small-right" />
                  <div className="ml-auto w-[356px] flex-none text-xxs">
                    {cat.description}
                  </div>
                </div>
              );
            })}
          </div>
        );
      case "PromozioniRecord":
        return (
          <div className="py-2 lg:py-10 2xl:py-16" key={record.id}>
            {record.promo.map((promo, id) => {
              return (
                <div key={id} className="mb-6 border p-3">
                  <div className="mb-3 bg-gray-light p-6">
                    <div className="pb-2 text-xxs">{promo.subtitle.toUpperCase()}</div>
                    <div className="text-base font-semibold">
                      {promo.title.toUpperCase()}
                    </div>
                  </div>
                  <div
                    className="promobox pl-6 pb-2"
                    dangerouslySetInnerHTML={{ __html: promo.text }}
                  />
                </div>
              );
            })}
          </div>
        );
      case "GalleryRecord":
        return (
          <div className="py-2 lg:py-10 2xl:py-16" key={record.id}>
            <GalleryStandard slides={record.images} />
          </div>
        );
      case "ImageBlockRecord": {
        if (!record?.image?.responsiveImage) {
          return null;
        }
        return (
          <div key={record.id}>
            <div className="relative py-2 lg:py-10 2xl:py-16">
              <Image
                className="max-w-[800px]"
                data={record?.image?.responsiveImage}
                alt={record?.image?.alt}
                title={record?.image?.title}
              />
              {record.image.responsiveImage.title && (
                <div className="z-1 text-shadow absolute bottom-0 left-0 right-0 mt-2 mb-2 max-w-[800px] bg-gradient-to-t from-black/80 px-4 pt-3 pb-2 text-xxs text-white lg:-mt-10 lg:mb-10 2xl:-mt-16 2xl:mb-16">
                  {record.image.responsiveImage.title}
                </div>
              )}
            </div>
          </div>
        );
      }
      case "VideoBlockRecord":
        return (
          <div key={record.id}>
            <div className="py-2 lg:py-10 2xl:py-16">
              {record.externalVideo?.url && (
                <VideoEmbedded {...record} video={record.externalVideo} />
              )}
              {record.internalVideo?.url && (
                <VideoPlayer {...record} videoFile={record.internalVideo} />
              )}
            </div>
          </div>
        );
      case "PartnerRecord":
        return <Partners data={record} />;
      default:
        return null;
    }
  };

  return (
    <div className="formatted-content">
      <StructuredText
        data={content}
        renderInlineRecord={({ record }) => {
          // console.log('inline', record.__typename);
          const resolved = resolveLinkById(record.id, locale);
          return (
            <Link href={resolved} key={record.id} locale={locale}>
              <a className="underline">{record.title}</a>
            </Link>
          );
        }}
        renderLinkToRecord={({ record, children, transformedMeta }) => {
          // console.log('link', record.__typename);
          const resolved = resolveLinkById(record.id, locale);
          return (
            <Link {...transformedMeta} href={resolved} key={record.id} locale={locale}>
              <a className="underline">{children}</a>
            </Link>
          );
        }}
        renderBlock={({ record }) => renderBlock(record)}
        customRules={[
          renderRule(isBlockquote, ({ node, children, key }) => {
            const props = { node, children, key };
            return <BlockQuote {...props} />;
          }),
          renderRule(isHeading, ({ node, children, key }) => {
            if (!children) return null;
            const classTag = node.level;
            return (
              <div className={`h${classTag}`} key={key}>
                {children}
              </div>
            );
          }),
        ]}
      />
    </div>
  );
};

export default StructuredContent;
