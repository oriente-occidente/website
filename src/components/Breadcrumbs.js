"use client";
import Link from "next/link";
import resolveLink from "@/lib/resolveLink";
import { cleanURL } from "@/lib/utils";
import indexesReference from "@/data/indexesReference.json";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Breadcrumbs({ data, locale, background }) {
  const d = { ...data, slug: data.slug ? data.slug : data.id };

  const [prevUrl, setPrevUrl] = useState();
  const pathname = usePathname();

  useEffect(() => {
    const storedPrevUrl = sessionStorage.getItem("prevUrl");
    if (storedPrevUrl !== pathname) {
      setPrevUrl(storedPrevUrl);
    }
    sessionStorage.setItem("prevUrl", pathname);
  }, [pathname]);

  let parentIndex;

  switch (true) {
    case d._modelApiKey === "artist" && d.showInResidenciesIndex:
      parentIndex = indexesReference["artistic_residecy"];
      break;
    case d._modelApiKey === "artist" && d.showInAssociatedArtistsIndex:
      parentIndex = indexesReference["artist"];
      break;
    case d._modelApiKey === "news":
      parentIndex = indexesReference["news"];
      break;
    case d._modelApiKey === "event":
      parentIndex = indexesReference["event"];
      break;
    case d._modelApiKey === "project":
      parentIndex = indexesReference["project"];
      break;
    case d._modelApiKey === "network":
      parentIndex = indexesReference["network"];
      break;
    default:
      parentIndex = "";
      break;
  }

  const link = resolveLink({ locale, ...d });

  let href;
  if (d._modelApiKey == "event" && d.isFestival) {
    href = resolveLink({
      ...d.festivalEditions[0],
      locale,
    });
  } else if (d._modelApiKey == "workshop" && !d.isWorkshop) {
    href = resolveLink({
      ...d.festivalEditions[0],
      locale,
    });
  } else if (d._modelApiKey == "artist") {
    href =
      prevUrl && prevUrl !== pathname
        ? prevUrl
        : resolveLink({ locale, _modelApiKey: parentIndex.apiKey });
  } else if (parentIndex) {
    href = resolveLink({ locale, _modelApiKey: parentIndex.apiKey });
  } else {
    href = link;
  }

  const paths = cleanURL(link, locale)
    .split("/")
    .filter((p) => p);

  // console.log("link", link);
  // console.log(
  //   "resolveLink({ locale, _modelApiKey: parentIndex.apiKey })",
  //   resolveLink({ locale, _modelApiKey: parentIndex.apiKey })
  // );
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
