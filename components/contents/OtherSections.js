import Partners from "components/Partners";
import Team from "components/Team";

export default function OtherSections({ data, locale }) {
  return (
    <div className="md:container md:mx-auto md:grid md:grid-cols-4 md:gap-4">
      <div className="border-color-gray md:col-span-3 md:col-start-2 md:border-l">
        <div className="px-4 md:px-12">
          <div className="flex flex-wrap items-center	py-2 lg:py-10 2xl:py-16">
            {data.map((section) => (
              <>
                {section.__typename == "PartnerRecord" ? (
                  <>
                    <Partners locale={locale} data={section} />
                  </>
                ) : (
                  <>
                    <Team locale={locale} data={section} />
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
