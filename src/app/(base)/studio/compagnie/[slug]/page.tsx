import type { BasicSlugPageProps } from "@/types";
const locale = "it";

export default function Page({ params }: BasicSlugPageProps) {
  const list = ["eventi", "linguaggi", "workshop", "artisti", "compagnie"];
  const idx = Math.ceil(Math.random() * list.length - 1);
  const name = `card-title-${list[idx]}`;
  const cn = ["text-xl", name];
  return (
    <div className="bg-black">
      <div className={cn.join(" ")}>
        My slug page: {params.slug} - {locale} - {name}
      </div>
      <div>LOCALE:{locale}</div>
    </div>
  );
}
