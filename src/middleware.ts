import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public paths that don't require authentication
  const publicPaths = ["/", "/login", "/register"];

  // Only get token if accessing protected route
  const isPublicPath = publicPaths.includes(pathname);
  let session = null;

  if (!isPublicPath) {
    session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  }

  const isAuthenticated = !!session;

  if (!isAuthenticated && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isAuthenticated && ["/login", "/register"].includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/graph",
    "/register",
    "/login",
  ],
};