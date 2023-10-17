import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
const locale = "it";

export default function Page({ params }: BasicSlugPageProps) {
  const { isEnabled: preview } = draftMode();
  return (
    <div className="text-xl">
      My slug page: {params.slug} - {locale} [{preview}]
    </div>
  );
}

// export async function generateStaticParams() {
//   const posts: any = []; //await fetch("https://.../posts").then((res) => res.json());
//   return posts.map((post: any) => ({
//     slug: post.slug,
//   }));
// }
