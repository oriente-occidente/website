import Link from 'next/link';
export default function Breadcrumbs({ background, paths, locale }) {
  return (
    <nav
      className={`hidden md:block bg-${background} border-y-gray border-y py-2 xl:py-5`}
      aria-label="Breadcrumb"
    >
      <div className="container flex">
        <ol role="list" className="flex items-center space-x-4">
          {paths.map((p) => (
            <li key={p.name} className="group">
              <div className="flex items-center">
                <Link href={p.href} locale={locale}>
                  <a
                    className="text-[12px] uppercase hover:text-red"
                    aria-current={p.current ? 'page' : undefined}
                  >
                    {p.name}
                  </a>
                </Link>
                <div className="group-last:hidden ml-4 bg-arrow-right-black w-5 h-5"></div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
