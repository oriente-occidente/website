import Script from 'next/script';

export default function ShareButtons() {
  return (
    <>
      <div className="md:grid md:grid-cols-4 md:gap-4 md:container md:mx-auto">
        <div className="md:col-span-3 md:border-l md:col-start-2 border-color-gray px-4 md:px-12 pb-8">
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
