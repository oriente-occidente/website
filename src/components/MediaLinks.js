import Link from "next/link";
import translate from "@/lib/locales";
import resolveLink from "@/lib/resolveLink";

export default function MediaLinks({ data, locale }) {
  const yearsNumber = data.years.length;
  const gridColums = `md:grid-cols-${yearsNumber}`;

  const extractedData = [];

  const keysToExtract = [
    "festivalEditions",
    "artists",
    "projects",
    "companies",
    "artisticResidencies",
    "publications",
    "workhops",
    "events",
    "mediaAuthor",
    "news"
  ];

  keysToExtract.forEach((key) => {
    if (data[key] && Array.isArray(data[key])) {
      data[key].forEach((item, index) => {
        if (!extractedData[index]) {
          extractedData[index] = {};
        }
        extractedData[index][key] = { ...item };
      });
    }
  });

  return (
    <div className="px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {data.category && (
        <div className="col-span-1">
          <div className="text-xs font-bold uppercase pb-2">
            {translate("category", locale)}
          </div>
          <div className="text-xs text-black">{data.category.name}</div>
        </div>
      )}

      {data.years.length>0 && (
        <div className="col-span-1">
          <div className="text-xs font-bold uppercase pb-2">
            {translate("year", locale)}
          </div>
          <div className="flex flex-nowrap justify-start">
            {data.years.map((y, index, array) => (
              <div key={y.index}>
                <div className="text-xs text-black">
                  {y.title}
                  {index !== array.length - 1 && ",\u00A0"}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.festivalEditions.length>0 && (
        <div className="col-span-1">
          <div className="pb-2 text-xs font-bold uppercase">
            {translate("festival", locale)}
          </div>
          {extractedData.map((f, index) => (
            <>
              {f.festivalEditions?.id && (
                <div key={f.festivalEditions.id}>
                  <div className="flex flex-nowrap justify-start">
                    <Link
                      href={resolveLink({ ...f.festivalEditions, locale })}
                      title={f.festivalEditions.title}
                      className="button--with-arrow-small font-normal"
                    >
                      <div className="text-xs text-black">
                        {f.festivalEditions.title}
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      )}

      {data.artists.length && (
        <div className="col-span-1">
          <div className="pb-2 text-xs font-bold uppercase">
            {translate("artist", locale)}
          </div>
          {extractedData.map((a, index) => (
            <>
              {a.artists?.id && (
                <div key={a.artists.id}>
                  <div className="flex flex-nowrap justify-start">
                    <Link
                      href={resolveLink({ ...a.artists, locale })}
                      title={a.artists.title}
                      className="button--with-arrow-small font-normal"
                    >
                      <div className="text-xs text-black">
                        {a.artists.title}
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      )}

      {data.companies.length>0 && <div className="col-span-1">
        <div className="pb-2 text-xs font-bold uppercase">
          {translate("company", locale)}
        </div>
        {extractedData.map((y, index) => (
          <>
            {y.companies?.id && (
              <div key={y.companies.id}>
                <div className="flex flex-nowrap justify-start">
                  <Link
                    href={resolveLink({ ...y.companies, locale })}
                    title={y.companies.title}
                    className="button--with-arrow-small font-normal"
                  >
                    <div className="text-xs text-black">
                      {y.companies.title}
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </>
        ))}
      </div>}

      {data.projects.length>0 && (
        <div className="col-span-1">
          <div className="pb-2 text-xs font-bold uppercase">
            {translate("project", locale)}
          </div>
          {extractedData.map((p, index) => (
            <>
              {p.projects?.id && (
                <div key={p.projects.id}>
                  <div className="flex flex-nowrap justify-start">
                    <Link
                      href={resolveLink({ ...p.projects, locale })}
                      title={p.projects.title}
                      className="button--with-arrow-small font-normal"
                    >
                      <div className="text-xs text-black">
                        {p.projects.title}
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      )}

      {data.artisticResidencies.length>0 && (
        <div className="col-span-1">
          <div className="pb-2 text-xs font-bold uppercase">
            {translate("residence", locale)}
          </div>
          {extractedData.map((r, index) => (
            <>
              {r.artisticResidencies?.id && (
                <div key={r.artisticResidencies.id}>
                  <div className="flex flex-nowrap justify-start">
                    <Link
                      href={resolveLink({ ...r.artisticResidencies, locale })}
                      title={r.artisticResidencies.title}
                      className="button--with-arrow-small font-normal"
                    >
                      <div className="text-xs text-black">
                        {r.artisticResidencies.title}
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      )}

      {data.publications.length>0 && (
        <div className="col-span-1">
          <div className="pb-2 text-xs font-bold uppercase">
            {translate("publication", locale)}
          </div>
          {extractedData.map((p, index) => (
            <>
              {p.publications?.id && (
                <div key={p.publications.id}>
                  <div className="flex flex-nowrap justify-start">
                    <Link
                      href={resolveLink({ ...p.publications, locale })}
                      title={p.publications.title}
                      className="button--with-arrow-small font-normal"
                    >
                      <div className="text-xs text-black">
                        {p.publications.title}
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      )}

      {data.workhops.length>0 && (
        <div className="col-span-1">
          <div className="pb-2 text-xs font-bold uppercase">
            {translate("workshop", locale)}
          </div>
          {extractedData.map((w, index) => (
            <>
              {w.workhops?.id && (
                <div key={w.workhops.id}>
                  <div className="flex flex-nowrap justify-start">
                    <Link
                      href={resolveLink({ ...w.workhops, locale })}
                      title={w.workhops.title}
                      className="button--with-arrow-small font-normal"
                    >
                      <div className="text-xs text-black">
                        {w.workhops.title}
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      )}

      {data.events.length>0 && (
        <div className="col-span-1">
          <div className="pb-2 text-xs font-bold uppercase">
            {translate("event", locale)}
          </div>
          {extractedData.map((e, index) => (
            <>
              {e.events?.id && (
                <div key={e.events.id}>
                  <div className="flex flex-nowrap justify-start">
                    <Link
                      href={resolveLink({ ...e.events, locale })}
                      title={e.events.title}
                      className="button--with-arrow-small font-normal"
                    >
                      <div className="text-xs text-black">{e.events.title}</div>
                    </Link>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      )}

      {data.mediaAuthor.length>0 && (
        <div className="col-span-1">
          <div className="pb-2 text-xs font-bold uppercase">
            {translate("author", locale)}
          </div>
          {extractedData.map((a, index) => (
            <>
              {a.mediaAuthor?.id && (
                <div key={a.mediaAuthor.id} className="md:cols-span-1">
                  <div className="flex flex-nowrap justify-start">
                    <div className="text-xs text-black">
                      {a.mediaAuthor.fullName}
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      )}

      {data.news.length>0 && (
        <div className="col-span-1">
          <div className="pb-2 text-xs font-bold uppercase">
            {translate("news", locale)}
          </div>
          {extractedData.map((n, index) => (
            <>
              {n.news?.id && (
                <div key={n.news.id}>
                  <div className="flex flex-nowrap justify-start">
                    <Link
                      href={resolveLink({ ...n.news, locale })}
                      title={n.news.title}
                      className="button--with-arrow-small font-normal"
                    >
                      <div className="text-xs text-black">{n.news.title}</div>
                    </Link>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
}
