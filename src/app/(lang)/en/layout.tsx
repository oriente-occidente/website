import React from "react";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { LayoutDocument, SiteLocale } from "@/graphql/generated";
import type { LayoutParams } from "@/types";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import translate from "@/lib/locales";
import queryDatoCMS from "@/lib/fetchDato";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
// import "swiper/css/scrollbar";
import "@/style/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: // params: { locale },
LayoutParams) {
  // let cookie;
  // if (cookies().has("locale")) {
  //   cookie = cookies().get("locale");
  //   console.log("cookie", cookie);
  // }
  // let locale = cookie ? cookie.value : 'en';

  const locale = 'en';
  console.log("LAYOUT LOCALE", locale);
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await queryDatoCMS(
    LayoutDocument,
    { locale: siteLocale },
    isEnabled
  );

  if (!data) return null;
  return (
    <html lang={locale}>
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