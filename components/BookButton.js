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
    <div className="self-start md:self-end">
      <button
        className="w-48 bg-white text-gray-700 font-semibold hover:text-black py-2 px-4 border border-gray-700 hover:border-black"
        onClick={() => handleRegistration(id)}
      >
        {translate('register', locale)}
      </button>
    </div>
  );
}
