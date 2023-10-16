import { BasicSlugPageProps } from "@/types";
const locale = "it";
export default function Page({ params, preview }: BasicSlugPageProps) {
  return (
    <div>
      <div className="text-xl">My slug page: {params.slug}</div>
      <div>LOCALE:{locale}</div>
      <div>preview:{preview}</div>
    </div>
  );
}
