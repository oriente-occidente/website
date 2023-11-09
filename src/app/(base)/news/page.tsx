import { draftMode } from "next/headers";

import fetchDato from "@/lib/fetchDato";
import { NewsIndexDocument, AllNewsDocument } from "@/graphql/generated";
import { SiteLocale } from "@/graphql/generated";
import IndexPageTemplate from "@/components/templates/IndexPageTemplate";
import { toNextMetadata } from "react-datocms";
import seoUtils from "@/lib/seoUtils";
import { PageProps } from "../../../../.next/types/app/(base)/layout";
const locale = "it";

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const page = await fetchDato(
    NewsIndexDocument,
    { locale: siteLocale },
    false
  );
  const seoData = seoUtils(page as any);
  const tags = toNextMetadata(seoData?.tags || []);

 const links =
     seoData?.alts?.map((a: any) => {
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
     });
   }
  const metaObject = {
    ...tags,
  };
  console.log(metaObject);
  return metaObject;
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const page = await fetchDato(
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
    page,
  };
  return <IndexPageTemplate data={pageData} locale={locale} />;
}
