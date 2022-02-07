import Script from "next/script";

export default function ShareButtons() {
  return (
    <>
      <div className="md:container md:mx-auto md:grid md:grid-cols-4 md:gap-4">
        <div className="border-color-gray px-4 pb-8 md:col-span-3 md:col-start-2 md:border-l md:px-12">
          <div className="addthis_inline_share_toolbox_ipet" />
        </div>
      </div>
      <Script
        strategy="lazyOnload"
        src={`//s7.addthis.com/js/300/addthis_widget.js#pubid=${process.env.NEXT_PUBLIC_ADDTHIS}`}
      />
    </>
  );
}
