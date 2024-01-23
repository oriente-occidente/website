import { redirect } from 'next/navigation';
import { cookies, draftMode } from 'next/headers';
import { NextRequest } from 'next/server';


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  draftMode().enable();
  if (!url) return new Response("Draft mode is enabled");

  //to avoid losing the cookie on redirect in the iFrame
  const cookieStore = cookies();
  const cookie = cookieStore.get("__prerender_bypass")!;
  cookies().set({
    name: "__prerender_bypass",
    value: cookie?.value,
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "none",
  });

  redirect(url);
}
