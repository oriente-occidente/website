"use client";
import Head from "next/head";
import { renderMetaTags } from "react-datocms";
import config from "@/data/config";
import resolveLink from "@/lib/resolveLink";
import { ResolveLinkProps, SeoProps } from "@/types";

const dl = config.defaultLocale;
const SEO = ({ data }: { data: SeoProps }) => {
  const { tags, alts = [], page } = data;
  return (
    <Head>
      {tags && renderMetaTags(tags)}
      {alts?.map((a: any) => {
        const { locale, title } = a;
        const url = resolveLink({ ...a, locale });
        return (
          <link
            key={url}
            href={"https://www.uffizi.it" + url}
            hrefLang={locale}
            title={title}
            rel={dl === locale ? "canonical" : "alternate"}
            type="text/html"
          />
        );
      })}
      {page && (
        <link
          href={
            "https://www.uffizi.it" +
            resolveLink({ ...page, locale: dl } as ResolveLinkProps)
          }
          hrefLang="x-default"
          rel="alternate"
          type="text/html"
        />
      )}
    </Head>
  );
};

export default SEO;
