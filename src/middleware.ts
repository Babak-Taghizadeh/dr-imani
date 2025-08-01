import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const isAdmin = token?.name === "Admin";

  const isProtectedRoute = req.nextUrl.pathname.startsWith("/admin");

  if (isProtectedRoute && !isAdmin) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/admin/:path*"],
};
