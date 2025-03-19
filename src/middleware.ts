import { NextRequest, NextResponse } from "next/server";

async function getLocale(request: NextRequest): Promise<string> {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get("accept-language");
  if (acceptLanguage) {
    console.log("acceptLanguage", acceptLanguage);
    // headers.set("accept-language", acceptLanguage.replaceAll("_", "-"));
  }
  // const headersObject = Object.fromEntries(headers.entries());
  // console.log("MDLWR headersObject", headersObject);

  const cookie = request.cookies.get("locale");
  let locale = cookie ? cookie.value : "it";
  return locale;
}

// export async function middleware(request: NextRequest) {
//   // const pathname = request.nextUrl.pathname;
//   const response = NextResponse.next();
//   // let currentLocale = await getLocale(request);
//   // console.log("CURRENT LOCALE", currentLocale);
//   // let locale = "" + currentLocale;

//   // const pathnameIsEnglish = pathname.startsWith(`/en`);

//   // if (pathnameIsEnglish) {
//   //   locale = "en";
//   // } else {
//   //   locale = "it";
//   // }

//   // if (pathname === "/" && !locale) {
//   //   locale = "it";
//   // }
//   // // return NextResponse.redirect(new URL(`/${locale}/home`, request.url));
//   // // return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));

//   // console.log("MDLWR LOCALE", locale);

//   // response.cookies.set({
//   //   name: "locale",
//   //   value: locale ? locale : "it",
//   // });

//   // if (currentLocale !== locale) {
//   //   console.log("SWITCH");
//   //   return NextResponse.redirect(
//   //     new URL(`/${locale === "en" ? "en/" : ""}`, request.url)
//   //   );
//   // }
//   return response;
//   // return NextResponse.redirect(new URL(`${pathname}`, request.url));
// }

export function middleware(request: Request) {
  // Store current request url in a custom header, which you can read later
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);

  return NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!.*\\.|_next|api\\/).*)"],
};
