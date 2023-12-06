import { GenericSearchProps } from "@/types";

export default function SearchTemplate({
  data,
  locale,
  children,
}: GenericSearchProps) {
  const { title, description } = data;
  return (
    <div className="container py-10">
      <header className="overflow-hidden border-t border-gray py-5 md:border-t-0 md:border-b ">
        <h1 className="title">{title}</h1>
        <h2 className="text-black-light md:mt-1 md:text-sm">{description}</h2>
      </header>
      <div className="mt-10">{children}</div>
    </div>
  );
}
