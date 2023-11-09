import { draftMode } from "next/headers";

import { NewsIndexDocument, AllNewsDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";
import { toNextMetadata } from "react-datocms";
import seoUtils from "@/lib/seoUtils";
import resolveLink from "@/lib/resolveLink";
import fetchDato from "@/lib/fetchDato";

export async function generateMetadata() {
  const locale = "it";
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    NewsIndexDocument,
    { locale: siteLocale },
    false
  );
  const page = data?.newsIndex || null;
  const seoData = seoUtils(page as any);
  console.log("seoData", seoData);
  const tags = toNextMetadata(seoData?.tags || []);

  //  const links =
  //      seoData?.alts?.map((a: any) => {
  //        const { locale, title } = a;
  //        const url = resolveLink({ ...a, locale });
  //        return (
  //          <link
  //            key={url}
  //            href={"https://www.uffizi.it" + url}
  //            hrefLang={locale}
  //            title={title}
  //            rel={dl === locale ? "canonical" : "alternate"}
  //            type="text/html"
  //          />
  //        );
  //      });
  //    }

  return tags;
}

export default async function Page() {
  const locale = "it";
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    NewsIndexDocument,
    { locale: siteLocale },
    isEnabled
  );
  const res = await fetchDato(
    AllNewsDocument,
    { locale: siteLocale },
    isEnabled
  );

  const pageData: any = {
    list: res.allNews || [],
    hero: null,
    page: data?.newsIndex,
  };
  return <IndexPageTemplate data={pageData} locale={locale} />;
}
