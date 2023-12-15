import { GenericSearchProps } from "@/types";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function SearchTemplate({
  data,
  locale,
  children,
}: GenericSearchProps) {
  const { title, description } = data;
  return (
    <div className="py-10">
      <Breadcrumbs data={data} locale={locale as any} background={null} />
      <header className="overflow-hidden border-t border-gray py-5 md:border-t-0 md:border-b ">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="text-black-light md:mt-1 md:text-sm">{description}</h2>
        </div>
      </header>
      <div className="container py-6">{children}</div>
    </div>
  );
}
