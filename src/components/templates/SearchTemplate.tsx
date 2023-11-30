import { GenericSearchProps } from "@/types";

export default function SearchTemplate({
  data,
  locale,
  children,
}: GenericSearchProps) {
  const { title, description } = data;
  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="w-full border-solid border-b-2 border-gray-100 py-10">
        {description}
      </div>
      <div className="mt-40">{children}</div>
    </div>
  );
}
