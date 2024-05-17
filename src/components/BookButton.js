"use client";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import translate from "@/lib/locales";

export default function BookButton({ locale, paymentSettings, id }) {
  const router = useRouter();
  const isBookable = paymentSettings?.reduce((result, p) => result || p.bookable, false);
  const today = dayjs(new Date());
  const isFuture = paymentSettings?.reduce((result, p) => {
    const start = dayjs(p.startDate);
    const end = dayjs(p.endDate);
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
    <div className="pl-4">
      {isBookable ? (
        <button className="button--with-arrow" onClick={() => handleRegistration(id)}>
          {/* {translate('register', locale)} */}
          {translate("booking", locale)}
        </button>
      ) : (
        <a className="button--with-arrow" href={link} target="_blank" rel="noreferrer">
          {/* {translate('buy', locale)} */}
          {translate("booking", locale)}
        </a>
      )}
    </div>
  );
}
