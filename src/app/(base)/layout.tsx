import React from "react";
import { draftMode } from "next/headers";
import { LayoutDocument, SiteLocale } from "@/graphql/generated";
import type { LayoutParams } from "@/types";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import translate from "@/lib/locales";
import fetchDato from "@/lib/fetchDato";
import Script from "next/script";

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
const GTM = process.env.NEXT_PUBLIC_GTM;
const IUBENDA_SITE_ID = process.env.NEXT_PUBLIC_IUBENDA_SITE_ID;

export default async function RootLayout({ children, params }: any) {
  // console.log("LAYOUT LOCALE", locale);
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(LayoutDocument, { locale: siteLocale }, isEnabled);
  console.log("children -->", JSON.stringify(children, null, 2));
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
        <Script type="text/javascript" src="//cs.iubenda.com/sync/2481473.js" />
        <Script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          charSet="UTF-8"
          async
        />

        <Script
          id="iubenda"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var _iub = _iub || [];
            _iub.csConfiguration = {
              "askConsentAtCookiePolicyUpdate":true,
              "countryDetection":true,
              "enableFadp":true,
              "enableLgpd":true,
              "lgpdAppliesGlobally":false,
              "perPurposeConsent":true,
              purposes: "1, 3, 4",
              "siteId":${IUBENDA_SITE_ID},
              "whitelabel":false,
              "cookiePolicyId":${translate("cookiePolicyId", locale)},
              "lang":"${locale}",
              "banner":{
                "acceptButtonCaptionColor":"white",
                "acceptButtonColor":"#424242",
                "acceptButtonDisplay":true,
                "backgroundColor":"#ffffff",
                "closeButtonRejects":true,
                "customizeButtonCaptionColor":"white",
                "customizeButtonColor":"#424242",
                "customizeButtonDisplay":true,
                "explicitWithdrawal":true,
                "listPurposes":true,
                "position":"float-bottom-right",
                "prependOnBody":true,
                "rejectButtonCaptionColor":"white",
                "rejectButtonColor":"#424242",
                "rejectButtonDisplay":true,
                "showPurposesToggles":true,
                "textColor":"#332e2d"
              },
              "callback":{
                onPreferenceExpressedOrNotNeeded: function(preference) {
                  // console.log("PREFENCE", preference)
                  window.consentIsGiven = preference;
                }
              }
            };
          `,
          }}
        />
      </body>
    </html>
  );
}
