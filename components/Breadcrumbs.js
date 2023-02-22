import Link from "next/link";
export default function Breadcrumbs({ background, paths, locale }) {
  console.log("paths", paths);
  return (
    <nav
      className={`hidden md:block bg-${background} border-y border-y-gray py-2 xl:py-5`}
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
                    aria-current={p.current ? "page" : undefined}
                  >
                    {p.name}
                  </a>
                </Link>
                <div className="ml-4 h-5 w-5 bg-arrow-right-black group-last:hidden"></div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
