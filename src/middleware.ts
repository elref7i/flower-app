import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { getToken } from "next-auth/jwt";

const authRouts = ["/auth/login"];
const publicPages = ["/", ...authRouts];
const protectedPage = ["/cart", "/cart/checkout"];
const handleI18nRouting = createMiddleware(routing);

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.

  function onSuccess(req) {
    return handleI18nRouting(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/login",
    },
  },
);

export default async function middleware(req: NextRequest) {
  // Function to create a regex for matching paths
  function pathRegex(paths: string[]): RegExp {
    return RegExp(
      `^(/(${routing.locales.join("|")}))?(${paths
        .flatMap((p) => (p === "/" ? ["", "/"] : p))
        .join("|")})/?$`,
      "i",
    );
  }

  const isPublicPage = pathRegex(publicPages).test(req.nextUrl.pathname);
  const isAuthPage = pathRegex(authRouts).test(req.nextUrl.pathname);
  const isProtectedPage = pathRegex(protectedPage).test(req.nextUrl.pathname);
  if (isPublicPage || "/*") {
    const token = await getToken({ req });
    if (isProtectedPage && !token) return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    if (isAuthPage && token) {
      return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    }
    return handleI18nRouting(req);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
