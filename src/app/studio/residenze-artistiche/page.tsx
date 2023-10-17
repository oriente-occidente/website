import { BasicSlugPageProps } from "@/types";
const locale = "it";
export default function Page({ preview }: BasicSlugPageProps) {
  return (
    <div>
      <div className="text-xl">My index page</div>
      <div>LOCALE:{locale}</div>
      <div>preview:{preview}</div>
    </div>
  );
}
