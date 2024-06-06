import React from "react";
import { draftMode } from "next/headers";
import { LayoutDocument, SiteLocale } from "@/graphql/generated";
import type { LayoutParams } from "@/types";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import translate from "@/lib/locales";
import fetchDato from "@/lib/fetchDato";
import Script from "next/script";
import Wrapper from "@/components/layout/Wrapper";
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
      url: process.env.HOST,
      type: "website",
    },
  };
  return metaObject;
}
const GTM = process.env.NEXT_PUBLIC_GTM;
const IUBENDA_SITE_ID = process.env.NEXT_PUBLIC_IUBENDA_SITE_ID;

export default async function RootLayout({ children }: any) {
  // console.log("LAYOUT LOCALE", locale);
  const { isEnabled } = draftMode();
  const siteLocale = locale as SiteLocale;
  const data = await fetchDato(
    LayoutDocument,
    { locale: siteLocale },
    isEnabled
  );
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
        {children}
        <Footer locale={locale} data={data.footer} hideNewsletter={false} />
        {locale && IUBENDA_SITE_ID && (
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
            };
          `,
            }}
          />
        )}
        {locale && IUBENDA_SITE_ID && (
          <Script
            id="iubenda-cs-1"
            type="text/javascript"
            src={`https://cs.iubenda.com/autoblocking/${IUBENDA_SITE_ID}.js`}
          />
        )}
        {locale && IUBENDA_SITE_ID && (
          <Script
            id="iubenda-cs-2"
            type="text/javascript"
            src="//cdn.iubenda.com/cs/iubenda_cs.js"
            strategy="lazyOnload"
          />
        )}

        {locale && GTM && (
          <Script
            type="plain/text"
            className="_iub_cs_activate"
            data-iub-purposes="4"
            src={`https://www.googletagmanager.com/gtag/js?id=${GTM}`}
          />
        )}
        {locale && GTM && (
          <Script
            id="google-analytics-script"
            type="plain/text"
            className="_iub_cs_activate"
            data-iub-purposes="4"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM}', {
              page_path: window.location.pathname,
            });
            `,
            }}
          />
        )}
      </body>
    </html>
  );
}
