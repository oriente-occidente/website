import Link from "next/link";
import translate from "lib/locales";

export default function MediaLinks({ data, locale }) {
  const yearsNumber = data.years.length;
  const gridColums = `md:grid-cols-${yearsNumber}`;

  const extractedData = [];

  const keysToExtract = [
    "festivalEditions",
    "comoanies",
    "mediaAuthor",
    "artisticResidencies",
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
    <div className="px-6 lg:px-10">
      <div className="pb-2 text-xs font-bold uppercase">
        {translate("year", locale)}
      </div>
      <div className="flex flex-nowrap justify-start pb-4">
        {data.years &&
          data.years.map((y, index, array) => (
            <Link key={y.index} href="/" title={y.title}>
              <div className="text-xs text-black">
                {y.title}
                {index !== array.length - 1 && ",\u00A0"}
              </div>
            </Link>
          ))}
      </div>
      <div className={`grid grid-cols-1 ${gridColums}`}>
        {extractedData.map((y, index) => (
          <>
            <div className={`col-span-1 col-start-${index + 1}`}>
              <div key={y.festivalEditions.id} className="">
                <div className="pb-2 text-xs font-bold uppercase">
                  {translate("festival", locale)}
                </div>
                <div className="flex flex-nowrap justify-start pb-4">
                  <button
                    href="/"
                    title={y.festivalEditions.title}
                    className="button--with-arrow font-normal"
                  >
                    <div className="text-xs text-black">
                      {y.festivalEditions.title}
                    </div>
                  </button>
                </div>
              </div>
              <div key={y.comoanies.id} className={``}>
                <div className="pb-2 text-xs font-bold uppercase">
                  {translate("company", locale)}
                </div>
                <div className="flex flex-nowrap justify-start pb-4">
                  <button
                    href="/"
                    title={y.comoanies.title}
                    className="button--with-arrow font-normal"
                  >
                    <div className="text-xs text-black">
                      {y.comoanies.title}
                    </div>
                  </button>
                </div>
              </div>
              <div key={y.artisticResidencies.id} className={``}>
                <div className="pb-2 text-xs font-bold uppercase">
                  {translate("residence", locale)}
                </div>
                <div className="flex flex-nowrap justify-start pb-4">
                  <button
                    href="/"
                    title={y.artisticResidencies.title}
                    className="button--with-arrow font-normal"
                  >
                    <div className="text-xs text-black">
                      {y.artisticResidencies.title}
                    </div>
                  </button>
                </div>
              </div>
              <div key={y.mediaAuthor.id} className="md:cols-span-1">
                <div className="pb-2 text-xs font-bold uppercase">
                  {translate("author", locale)}
                </div>
                <div className="flex flex-nowrap justify-start pb-4">
                  <button
                    href="/"
                    title={y.mediaAuthor.fullName}
                    className="button--with-arrow font-normal"
                  >
                    <div className="text-xs text-black">{y.mediaAuthor.fullName}</div>
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
