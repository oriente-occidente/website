import React from "react";
import { draftMode } from "next/headers";
import { LayoutDocument, SiteLocale } from "@/graphql/generated";
import type { LayoutParams } from "@/types";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import translate from "@/lib/locales";
import fetchDato from "@/lib/fetchDato";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import "@/style/globals.css";
import { toNextMetadata } from "react-datocms";
const locale = "it";

export async function generateMetadata() {
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(LayoutDocument, { locale: siteLocale }, false);
  const globalSeo = data._site.globalSeo || null;
  const fallbackSeo = globalSeo?.fallbackSeo;
  const icon = toNextMetadata(data._site.faviconMetaTags);
  const metaObject = {
    ...icon,
    title: fallbackSeo?.title,
    description: fallbackSeo?.description,
    openGraph: {
      title: fallbackSeo?.title,
      description: fallbackSeo?.description,
      siteName: globalSeo?.siteName,
      images: fallbackSeo?.image,
      locale,
      type: "website",
    },
  };
  return metaObject;
}

export default async function RootLayout({ children }: LayoutParams) {
  // console.log("LAYOUT LOCALE", locale);
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(LayoutDocument, { locale: siteLocale }, isEnabled);

  if (!data) return null;
  return (
    <html lang={locale}>
      {/* {renderMetaTags(data.site?.faviconMetaTags || [])} */}
      <body>
        <div data-datocms-noindex>
          <a className="skip-link" href="#main-content">
            {translate("skipContent", locale)}
          </a>
          <a className="skip-link" href="#footer">
            {translate("skipFooter", locale)}
          </a>
        </div>
        <Header locale={locale} data={data.menu} />
        <main className="min-h-[50vh] pt-[70px] md:pt-[80px] lg:pt-[110px]">
          <div>{children}</div>
        </main>
        <Footer locale={locale} data={data.footer} hideNewsletter={false} />
      </body>
    </html>
  );
}
