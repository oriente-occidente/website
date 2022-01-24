export default function Example({ background, paths }) {
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
                <a
                  href={p.href}
                  className="text-[12px] uppercase"
                  aria-current={p.current ? 'page' : undefined}
                >
                  {p.name}
                </a>
                <div className="group-last:hidden ml-4 bg-arrow-right-black w-5 h-5"></div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
