"use client";
import { Fragment } from "react";
import { StructuredText, renderRule } from "react-datocms";
import { isBlockquote, isHeading } from "datocms-structured-text-utils";
import { Image } from "react-datocms";
import Link from "next/link";
import BlockQuote from "@/components/BlockQuote";
import GalleryStandard from "@/components/galleries/GalleryStandard";
import VideoPlayer from "@/components/video/VideoPlayer";
import VideoEmbedded from "@/components/video/VideoEmbedded";
import Partners from "@/components/Partners";
import resolveLink from "@/lib/resolveLink";

const StructuredContent = ({ locale, content }) => {
  const renderBlock = (record) => {
    switch (record.__typename) {
      case "WorkshopCategoriesBlockRecord":
        console.log("RECORD", record);
        return (
          <div className="py-6 lg:py-12 2xl:py-16" key={record.id}>
            {record.tags.map(({ title, description, color, slug, overImage }, id) => {
              return (
                <Link key={slug} href={`/studio/formazione/c/${slug}`} passHref>
                  {/* <a title={title} className="no-underline"> */}
                  <div
                    className={`group transition-all duration-700 ease-out relative flex cursor-pointer flex-col overflow-hidden border-b  xl:flex-row xl:items-center ${
                      id === 0 && "border-t "
                    } border-gray py-4 ease-in hover:text-white xl:py-8 z-0`}
                  >
                    {/* <div className="w-100 h-100 absolute hover:bg-red" /> */}
                    <div className={`z-40 flex items-center  pl-2`}>
                      <svg
                        className="h-[18px] w-[18px] group-hover:w-0 group-hover:opacity-0 sm:h-[28px] sm:w-[28px] xl:h-[58px] xl:w-[58px]"
                        viewBox="0 0 58 58"
                      >
                        <circle cx="29" cy="29" r="29" fill={color?.hex || "#fff"} />
                      </svg>
                      <div
                        className={`flex items-center group-hover:hidden sm:flex-none`}
                      >
                        <div className="px-2 pt-1 text-base sm:px-3 sm:pt-0 sm:text-lg lg:text-2xl xl:px-6">
                          {title.toUpperCase()}{" "}
                        </div>
                        <div className="ml-auto h-[28px] w-[28px] bg-arrow-small-right group-hover:bg-arrow-right lg:h-[38px] lg:w-[38px] xl:block" />
                      </div>
                      <div
                        style={{ backgroundColor: color?.hex || "#fff" }}
                        className={`hidden items-center rounded-full px-5 group-hover:flex sm:flex-none`}
                      >
                        <div className="px-2 pt-1 text-base sm:px-3 sm:pt-0 sm:text-lg lg:text-2xl xl:px-6">
                          {title.toUpperCase()}{" "}
                        </div>
                        <div className="ml-auto h-[28px] w-[28px] bg-arrow-small-right group-hover:bg-arrow-small-right-white lg:h-[38px] lg:w-[38px] xl:block" />
                      </div>
                    </div>
                    <div className="z-40 pt-3 pr-1 text-xxs lg:w-[356px] xl:ml-auto xl:pt-0">
                      {description}
                    </div>
                    <div className="absolute top-0 left-0 right-0 z-10 hidden h-full bg-gray-dark/70 group-hover:block"></div>
                    <Image
                      className="hidden group-hover:block"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="50% 50%"
                      lazyLoad={false}
                      data={overImage.responsiveImage}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        );
      case "PromozioniBlockRecord":
        return (
          <div className="py-2 lg:py-10 2xl:py-16" key={record.id}>
            {record.promozione.map(({ headerColor, title, subtitle, link, text }, id) => {
              return (
                <div key={id} className="mb-6 border p-3">
                  <div
                    className={`mb-3 ${
                      headerColor ? "bg-gray-light" : "bg-black/70 text-white"
                    } p-6`}
                  >
                    <div className="pb-2 text-xxs ">{subtitle.toUpperCase()}</div>
                    <div className="text-sm font-semibold lg:text-base">
                      {title.toUpperCase()}
                    </div>
                  </div>
                  <div
                    className="promobox pb-2 sm:pl-3 lg:pl-6"
                    dangerouslySetInnerHTML={{ __html: text }}
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
      case "PartnerBlockRecord":
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
          const resolved = resolveLink({ ...record, locale });
          return (
            <Link href={resolved} key={record.id} locale={locale} className="underline">
              {record.title}
            </Link>
          );
        }}
        renderLinkToRecord={({ record, children, transformedMeta }) => {
          // console.log('link', record.__typename);
          const resolved = resolveLink({ ...record, locale });
          return (
            <Link
              {...transformedMeta}
              href={resolved}
              key={record.id}
              locale={locale}
              className="NO-underline"
            >
              {children}
            </Link>
          );
        }}
        renderBlock={({ record }) => renderBlock(record)}
        customRules={[
          renderRule(isBlockquote, ({ node, children, key }) => {
            const props = { node, children, key };
            return (
              <Fragment key={key}>
                <BlockQuote {...props} />
              </Fragment>
            );
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
