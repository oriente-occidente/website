import { BasicSlugPageProps } from "@/types";
const locale = "it";
export default function Page({ params, preview }: BasicSlugPageProps) {
  return <div>My slug page: {params.slug}</div>;
}
