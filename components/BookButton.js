import { useRouter } from 'next/router';
import translate from 'lib/locales';

export default function BookButton({ locale, id }) {
  const router = useRouter();

  const handleRegistration = (value) => {
    router.push(`/forms/register?id=${value}`);
  };

  return (
    <div className="container">
      <button
        className="w-48 bg-white text-gray-700 font-semibold hover:text-black py-2 px-4 border border-gray-700 hover:border-black"
        onClick={() => handleRegistration(id)}
      >
        {translate(' REGISTRATI', locale)}
      </button>
    </div>
  );
}
