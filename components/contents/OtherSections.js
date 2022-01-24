import Partners from 'components/Partners';
import Team from 'components/Team';

export default function OtherSections({ data, locale }) {
  return (
    <div className="md:grid md:grid-cols-4 md:gap-4 md:container md:mx-auto">
      <div className="md:col-span-3 md:border-l md:col-start-2 border-color-gray">
        <div className="px-4 md:px-12">
          <div className="flex flex-wrap items-center	py-2 lg:py-10 2xl:py-16">
            {data.map((section) => (
              <>
                {section.__typename == 'PartnerRecord' ? (
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
