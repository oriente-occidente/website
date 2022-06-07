import { useRouter } from 'next/router';
import dayjs from 'dayjs';

import translate from 'lib/locales';

export default function BookButton({ locale, paymentSettings, id }) {
  const router = useRouter();
  const isBookable = paymentSettings?.reduce(
    (result, p) => result || p.bookable,
    false
  );
  const today = dayjs(new Date());
  const isFuture = paymentSettings?.reduce((result, p) => {
    const start = dayjs(p.startDate);
    return result || today.isBefore(start);
  }, false);
  const showBookButton = isBookable && isFuture;

  const handleRegistration = (value) => {
    router.push(`/forms/register?id=${value}`);
  };

  if (!showBookButton) {
    return null;
  }
  return (
    <div className="pl-4">
      <button
        className="button--with-arrow"
        onClick={() => handleRegistration(id)}
      >
        {translate('register', locale)}
      </button>
    </div>
  );
}
