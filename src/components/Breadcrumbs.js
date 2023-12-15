"use client";
import Link from "next/link";
import resolveLink from "@/lib/resolveLink";

export default function Breadcrumbs({ data, locale, background }) {
  const link = resolveLink({ locale, ...data });
  const paths = link.split("/").filter((p) => p);

  return (
    <nav
      className={`hidden md:block bg-${background} border-y border-y-gray py-2 xl:py-5`}
      aria-label="Breadcrumb"
    >
      <div className="container flex">
        <ol role="list" className="flex items-center space-x-4">
          {["Home", ...paths].map((p, i) => {
            return (
              <li key={p} className="group">
                <div className="flex items-center">
                  <Link
                    href={i === 0 ? "/" : link}
                    locale={locale}
                    className="text-[12px] uppercase hover:text-red"
                    aria-current={i === paths.length ? "page" : undefined}
                  >
                    {p}
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
