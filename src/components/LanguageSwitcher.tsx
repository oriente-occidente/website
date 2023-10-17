"use client";
import Link from "next/link";

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  // function setLocale(value: string) {
  //   fetch(`/api/setlocale?lang=${value}`);
  // }
  const url = `/api/set-locale?lang=`;
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex">
        <Link className="px-2" href={`${url}it`}>
          IT
        </Link>
        <Link className="px-2" href={`${url}en`}>
          EN
        </Link>
      </div>
      <div>CURRENT LOCALE= {currentLocale}</div>
    </div>
  );
}
