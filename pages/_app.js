import Script from 'next/script';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import 'styles/globals.css';
import 'styles/base.css';
import { useRouter } from 'next/router';

import translate from 'lib/locales';

// import { AppWrapper } from 'lib/ctx';

const GTM = process.env.NEXT_PUBLIC_GTM;
const IUBENDA_SITE_ID = process.env.NEXT_PUBLIC_IUBENDA_SITE_ID;
// const IUBENDA_POLICY_ID = process.env.NEXT_PUBLIC_IUBENDA_POLICY_ID;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale } = router;
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
            "consentOnContinuedBrowsing": true,
            "lang":"${locale}",
            "siteId":${IUBENDA_SITE_ID},
            "cookiePolicyId":${translate('cookiePolicyId', locale)},
            "perPurposeConsent": true,
            "banner":{
              "acceptButtonDisplay":true,
              "customizeButtonDisplay":true,
              "position":"float-bottom-right",
              "closeButtonDisplay":false,
              "acceptButtonColor":"#424242",
              "acceptButtonCaptionColor":"white",
              "customizeButtonColor":"#424242",
              "customizeButtonCaptionColor":"white",
              "rejectButtonColor":"#424242",
              "rejectButtonCaptionColor":"white",
              "textColor":"#332e2d",
              "backgroundColor":"white",
              "rejectButtonDisplay":true,
              "closeButtonRejects":true
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
