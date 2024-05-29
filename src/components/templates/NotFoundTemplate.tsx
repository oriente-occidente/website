import Link from "next/link";
import Wrapper from "@/components/layout/Wrapper";
import translate from "@/lib/locales";

type NotFoundType = {
  locale: string;

};

export default function NotFoundTemplate({ locale }: NotFoundType) {
  const homeUrl = locale == "it" ? "/" : "/en"
  
  return (
    <Wrapper locale={locale} slugData="404">
      <div className="container mx-auto mt-10 text-center">
        <h2 className="text-3xl font-bold py-10">
          {translate("404title", locale)}
        </h2>
        <p className="text-lg mb-10">{translate("404text", locale)}</p>
        <p>
          <Link
            href={homeUrl}
            className="uppercase hover:underline underline-offset-4"
          >
            {translate("404cta", locale)}{" "}
          </Link>
        </p>
      </div>
    </Wrapper>
  );
}
