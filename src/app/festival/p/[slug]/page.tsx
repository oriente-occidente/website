import type { BasicSlugPageProps } from "@/types";
const locale = "it";
export async function generateStaticParams() {
  const posts: any = []; //await fetch("https://.../posts").then((res) => res.json());
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default function Page({ params, preview }: BasicSlugPageProps) {
  return <div>My page: {params.slug}</div>;
}
