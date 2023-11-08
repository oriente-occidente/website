import { draftMode } from "next/headers";
import type { BasicSlugPageProps } from "@/types";
const locale = "en";

export default function Page({ params }: BasicSlugPageProps) {
  return (
    <div className="text-xl">
      My slug page: {params.slug} - {locale}
    </div>
  );
}

// export async function generateStaticParams() {
//   const posts: any = []; //await fetch("https://.../posts").then((res) => res.json());
//   return posts.map((post: any) => ({
//     slug: post.slug,
//   }));
// }
