"use client";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import translate from "@/lib/locales";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function BookButton({ locale, paymentSettings, id }) {
  const router = useRouter();
  const isBookable = paymentSettings?.reduce(
    (result, p) => result || p.bookable,
    false
  );
  const today = dayjs(new Date()).tz("Europe/Rome");
  const isFuture = paymentSettings?.reduce((result, p) => {
    const start = dayjs(p.startDate).tz("Europe/Rome");
    const end = dayjs(p.endDate).tz("Europe/Rome");
    return result || today.isBefore(start) || today.isBefore(end);
  }, false);
  const showBookButton = paymentSettings.length > 0 && isFuture;

  const handleRegistration = (value) => {
    router.push(`/forms/register?id=${value}`);
  };

  const link = paymentSettings?.reduce((l, p) => {
    if (!l && p.paymentLink) {
      l = p.paymentLink;
    }
    return l;
  }, null);

  if (!showBookButton) {
    return null;
  }
  return (
    <div className="mt-6 md:mt-0 md:pl-4">
      {isBookable ? (
        <button
          className="button--with-arrow"
          onClick={() => handleRegistration(id)}
        >
          {/* {translate('register', locale)} */}
          {translate("booking", locale)}
        </button>
      ) : (
        <a
          className="button--with-arrow"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {/* {translate('buy', locale)} */}
          {translate("booking", locale)}
        </a>
      )}
    </div>
  );
}
