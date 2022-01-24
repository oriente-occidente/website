import Script from 'next/script';

export default function ShareButtons() {
  return (
    <>
      <div className="flex m-10 relative">
        <div className="addthis_inline_share_toolbox_ipet" />
      </div>
      <Script
        strategy="afterInteractive"
        src={`//s7.addthis.com/js/300/addthis_widget.js#pubid=${process.env.NEXT_PUBLIC_ADDTHIS}`}
      />
    </>
  );
}
