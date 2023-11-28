import VideoEmbedded from "@/components/video/VideoEmbedded";
import Link from "next/link";
import translate from "@/lib/locales";

export default function MediaVideo ({data, locale}){
    return <>
    {data.isReserved ? (
        <>
          <div className="relative aspect-video h-full w-full">
            <img src={data.image.responsiveImage.src} />
            <div className="play-button absolute top-1/2 left-1/2 flex h-20 w-20 items-center justify-center rounded-full md:h-[100px] md:w-[100px] lg:h-[120px] lg:w-[120px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="white"
                className="h-5 w-5 md:h-6 md:w-6 lg:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
            </div>
          </div>
          <div className="max-w-prose px-10 py-10 text-xs md:text-sm">
            <p>{translate("reservedTextLineOne", locale)}</p>
            <div>
              {translate("reservedTextLineTwo", locale)}{" "}
              <Link href="">
                <span className="underline">
                  archivio@orienteoccidente.it
                </span>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="aspect-video pb-8">
          <VideoEmbedded video={data.video} locale={locale} />
        </div>
      )}
      </>
}