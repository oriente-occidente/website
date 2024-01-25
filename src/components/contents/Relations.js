"use client";
import { Fragment } from "react";
import Link from "next/link";
import GenericCard from "@/components/cards/GenericCard";

export default function Relations({ relations, locale}) {
// console.log('relations',relations)
  return (
    <div className="md:mx-auto md:container md:grid md:grid-cols-4 md:gap-4">
      <div className="hidden px-4 md:block">
        <div
          className="top-24 sticky py-2"
        >
          {relations.map((relation) => (
            <>
              {relation.title && (
                <div key={relation.title}>
                  <Link
                    href={`#${relation.title}`}
                    className=""
                    title={`Link to ${relation.title}`}
                  >
                    <h2 className="mb-1 text-xxs uppercase tracking-wider hover:text-red">
                      {relation.title}
                    </h2>
                  </Link>
                </div>
              )}
            </>
          ))}
        </div>
      </div>

      <div className="border-color-gray md:col-span-3 md:border-l">
        {relations.map((r) => {
          console.log('r',r)
          return (
            <div key={r.title} id={r.title} >
              <h2 className="mb-1 uppercase text-lg font-bold">
                {r.title}
              </h2>
              <div className="container lg:grid lg:grid-cols-2 lg:gap-6">
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
  );
}
