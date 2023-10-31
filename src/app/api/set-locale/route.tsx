import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("lang");

  cookies().set({
    name: "locale",
    value: locale ? locale : "it",
  });

  // return new Response(JSON.stringify({ locale }), {
  //   status: 200,
  // });

  const url = locale == `it` ? "/" : "/en/";
  redirect(url);
}
