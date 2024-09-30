"use client";
import Link from "next/link";
import resolveLink from "@/lib/resolveLink";
import { cleanURL } from "@/lib/utils";
import indexesReference from "@/data/indexesReference.json";

export default function Breadcrumbs({ data, locale, background }) {
  // console.log("DATA ---->", data);
  const d = { ...data, slug: data.slug ? data.slug : data.id };
  const parentIndex = indexesReference[d._modelApiKey] || null;
  const link = resolveLink({ locale, ...d });
  const href =
    (d._modelApiKey == "event" && d.isFestival) ||
    (d._modelApiKey == "workshop" && !d.isWorkshop)
      ? resolveLink({
          ...d.festivalEditions[0],
          locale,
        })
      : parentIndex
      ? resolveLink({ locale, _modelApiKey: parentIndex.apiKey })
      : link;
  const paths = cleanURL(link, locale)
    .split("/")
    .filter((p) => p);
  return (
    <nav
      className={`hidden md:block bg-${background} border-y border-y-gray py-2 xl:py-5`}
      aria-label="Breadcrumb"
    >
      <div className="container flex">
        <ol role="list" className="flex items-center space-x-4">
          {["Home", ...paths].map((p, i) => {
            const total = paths.length;
            return (
              <li key={p} className="group">
                <div className="flex items-center">
                  {i < total && (
                    <Link
                      href={i === 0 ? "/" : href}
                      locale={locale}
                      className="text-[12px] uppercase hover:text-red"
                      aria-current={i === paths.length ? "page" : undefined}
                    >
                      {p.replace("-", " ")}
                    </Link>
                  )}
                  {i == total && (
                    <span className="text-[12px] uppercase font-semibold">
                      <span className="text-[12px] uppercase font-semibold">
                        {d.slug === data.id && data.image?.title
                          ? data.image.title
                          : d.title || p}
                      </span>
                    </span>
                  )}
                  <div className="ml-4 h-5 w-5 bg-arrow-right-black group-last:hidden"></div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
