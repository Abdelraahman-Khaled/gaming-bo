import { NextRequest, NextResponse } from "next/server";
import { authRoutes, ProtectedRoutes } from "./routes";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  const isProtectedRoute = ProtectedRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/login", "/signup", "/my-profile"],
};
