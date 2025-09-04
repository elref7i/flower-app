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
const adminPage = ["/admin/dashboard", "/admin/products", "/admin/occasions", "/admin/categories"];
const publicPages = ["/", "/cart", "/not-authorized", ...authRouts];

const handleI18nRouting = createMiddleware(routing);

const authMiddleware = withAuth(
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
  function pathRegex(paths: string[]): RegExp {
    return RegExp(
      `^(/(${routing.locales.join("|")}))?(${paths
        .flatMap((p) => (p === "/" ? ["", "/"] : p))
        .join("|")})/?$`,
      "i",
    );
  }

  // ✅ check if path starts with /admin (even invalid ones)
  function isAdminPath(pathname: string): boolean {
    const cleanPath = pathname.replace(new RegExp(`^/(${routing.locales.join("|")})`), "");
    return cleanPath.startsWith("/admin");
  }

  const isPublicPage = pathRegex(publicPages).test(req.nextUrl.pathname);
  const isAuthpage = pathRegex(authRouts).test(req.nextUrl.pathname);
  const isAdminPage = pathRegex(adminPage).test(req.nextUrl.pathname);

  const isNotAuthorizedPage = pathRegex(["/not-authorized"]).test(req.nextUrl.pathname);
  const token = await getToken({ req });

  // ✅ Not Authorized
  if (isNotAuthorizedPage) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.nextUrl.origin));
    }
    if (token.user.role === "admin") {
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl.origin));
    }
    return handleI18nRouting(req);
  }

  // ✅ Public pages
  if (isPublicPage) {
    if (isAuthpage && token) {
      return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    }
    return handleI18nRouting(req);
  }

  // ✅ Admin paths (even invalid ones)
  if (isAdminPath(req.nextUrl.pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.nextUrl.origin));
    }
    if (token.user.role !== "admin") {
      return NextResponse.redirect(new URL("/not-authorized", req.nextUrl.origin));
    }

    // Important: let Next.js handle the rest → this way
    // /admin/invalid will trigger app/admin/not-found.tsx
    return handleI18nRouting(req);
  }

  // ✅ fallback
  return (authMiddleware as any)(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
