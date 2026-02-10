import translate from "@/lib/locales";
import type { NewsletterProps } from "@/types";

const NEWSLETTER_LIST_URL = process.env.NEXT_PUBLIC_NEWSLETTER_LIST_URL;
export default function Newsletter({ locale, data }: NewsletterProps) {
  return (
    <div className="bg-gray-light py-8 md:py-12">
      <div className="container lg:max-w-screen-lg lg:px-10 xl:max-w-screen-xl">
        <h2 className="title--small">Newsletter</h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="mt-4 mb-6 text-xs">
            {data.newsletterSubscriptionMessage}
          </div>
          <div className="relative">
            <div id="mc_embed_signup">
              <form
                action={NEWSLETTER_LIST_URL}
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                // noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <div>
                    <label className="" htmlFor="mce-EMAIL">
                      {translate("insertEmail", locale)}
                    </label>
                    <input
                      defaultValue=""
                      type="email"
                      name="EMAIL"
                      id="mce-EMAIL"
                      className="block w-full rounded-md border border-gray px-3 py-4 text-xs text-black-light placeholder:text-black-light"
                      placeholder={`${translate("email", locale)}`}
                      required
                      aria-required="true"
                    />
                  </div>
                  <div id="mce-responses">
                    <div
                      className="hidden"
                      id="mce-error-response"
                      role="alert"
                    ></div>
                    <div
                      className="hidden"
                      id="mce-success-response"
                      role="status"
                    ></div>
                  </div>
                  {/* Honeypot field - hidden from assistive technologies */}
                  <div
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-5000px" }}
                  >
                    <input
                      type="text"
                      name="b_58396ba31c40d0c1a6e058a82_c261770ce1"
                      tabIndex={-1}
                      defaultValue=""
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      aria-label={translate("subscribe", locale)}
                      className="pointer absolute top-4 right-4 flex h-6 w-6 items-center justify-center bg-arrow-small-right focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                    >
                      <span className="sr-only">
                        {translate("subscribe", locale)}
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
