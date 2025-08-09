import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { getToken } from "next-auth/jwt";


const authRouts = [
  "/auth/login",
  "/auth/register",
  "/auth/forget-password",
  "/auth/verify-email",
  "/auth/verify-email/success",
];
const adminPage = ["/dashboard", "/dashboard"];
const publicPages = ["/", ...authRouts];


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
  const isAuthpage = pathRegex(authRouts).test(req.nextUrl.pathname);
  const isAdminPage = pathRegex(adminPage).test(req.nextUrl.pathname);
  const token = await getToken({ req });
  if (isPublicPage) {
    if (isAuthpage && token) {
      return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    }
    return handleI18nRouting(req);
  }

  if (isAdminPage) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.nextUrl.origin));
    }
    if (token.user.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (authMiddleware as any)(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
