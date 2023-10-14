import { BasicSlugPageProps } from "@/types";
export default function Page({ preview, locale }: BasicSlugPageProps) {
  return (
    <div>
      <div className="text-xl">My index page</div>
      <div>LOCALE:{locale}</div>
      <div>preview:{preview}</div>
    </div>
  );
}
