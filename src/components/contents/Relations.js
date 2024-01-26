"use client";
import { sanitize } from "@/lib/utils";
import Link from "next/link";
import GenericCard from "@/components/cards/GenericCard";
import { ChevronDownIcon, ArrowLongDownIcon } from "@heroicons/react/24/solid";

export default function Relations({ relations, locale }) {
  // console.log('relations',relations)
  return (
    <div className="border-t border-black-light">
      <div className="md:mx-auto md:container md:grid md:grid-cols-4 md:gap-4">
        <div className="hidden md:block">
          <div
            className="top-28 sticky divide-y"
          >
            {relations.map((relation) => (
              <>
                {relation.title && (
                  <div key={relation.title}>
                    <Link
                      href={`#${sanitize(relation.title)}`}
                      className="flex justify-between p-2 hover:bg-red-light"
                      title={`Link to ${relation.title}`}
                    >
                      <h2 className="mb-1 text-xxs tracking-wider ">
                        {relation.title}
                      </h2>
                      <ArrowLongDownIcon
                        aria-hidden="true"
                        className={`h-6 w-6`}
                      />
                    </Link>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>

        <div className="border-color-gray md:col-span-3 md:border-l pl-12 divide-y">
          {relations.map((r) => {
            return (
              <div key={r.title} id={sanitize(r.title)} className="mb-7">
                <h2 className="uppercase text-lg font-bold mt-7 mb-7">
                  {r.title}
                </h2>
                <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                  {r.content?.map((c) => {

                    return (
                      <div key={c.id}>
                        <GenericCard locale={locale} data={c} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }
          )}
        </div>
      </div>
    </div>
  );
}
