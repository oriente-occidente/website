import translate from 'lib/locales';

const NEWSLETTER_LIST_URL = process.env.NEXT_PUBLIC_NEWSLETTER_LIST_URL;
export default function Newsletter({ locale, data }) {
  return (
    <div className="bg-gray-light py-8 md:py-12">
      <div className="container lg:max-w-screen-lg xl:max-w-screen-xl lg:px-10">
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
                class="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <div>
                    <input
                      defaultValue=""
                      type="email"
                      name="EMAIL"
                      id="mce-EMAIL"
                      className="block w-full text-xs border-gray rounded-md px-3 py-4 border text-black-light placeholder:text-black-light"
                      placeholder={`${translate('email', locale)}`}
                    />
                  </div>
                  <div id="mce-responses">
                    <div className="hidden" id="mce-error-response"></div>
                    <div className="hidden" id="mce-success-response"></div>
                  </div>
                  <div className="sr-only" aria-hidden="true">
                    <input
                      type="text"
                      name="b_58396ba31c40d0c1a6e058a82_c261770ce1"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div>
                    <input
                      className="absolute top-4 right-4 w-6 h-6 bg-arrow-small-right block pointer"
                      type="submit"
                      value=""
                      name="subscribe"
                      id="mc-embedded-subscribe"
                    />
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
