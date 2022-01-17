import Script from 'next/script';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import 'styles/globals.css';
import 'styles/base.css';

const GTM = process.env.NEXT_PUBLIC_GTM;
const IUBENDA_SITE_ID = process.env.NEXT_PUBLIC_IUBENDA_SITE_ID;
const IUBENDA_POLICY_ID = process.env.NEXT_PUBLIC_IUBENDA_POLICY_ID;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: GTM });
  }, []);
  return (
    <>
      <Script
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        strategy="afterInteractive"
      />
      <Script
        id="iubenda"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `var _iub = _iub || [];
            _iub.csConfiguration = {
            "lang":"it",
            "siteId":${IUBENDA_SITE_ID},
            "floatingPreferencesButtonDisplay":false,
            "cookiePolicyId":${IUBENDA_POLICY_ID},
            "banner":{
              "acceptButtonDisplay":true,
              "customizeButtonDisplay":true,
              "position":"float-bottom-right",
              "closeButtonDisplay":false,
              "acceptButtonColor":"#0073CE","acceptButtonCaptionColor":"white","customizeButtonColor":"#DADADA","customizeButtonCaptionColor":"#4D4D4D","rejectButtonColor":"#0073CE","rejectButtonCaptionColor":"white",
              "textColor":"black",
              "backgroundColor":"white"
            },
            "callback":{
              onPreferenceExpressedOrNotNeeded: function(preference) {
                console.log("PREFENCE", preference)
                window.consentIsGiven = preference;
              }
            }};
            `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
