import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth");
  console.log(token);

  if (request.nextUrl.pathname.startsWith("/app")) {
    if (!token) {
      return NextResponse.redirect(new URL("/signin", request.nextUrl.origin));
    }
    return NextResponse.next();
  }

  if (token && request.nextUrl.pathname.startsWith("/")) {
    return NextResponse.redirect(new URL("/app", request.nextUrl));
  }

  if (token && request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.redirect(new URL("/app", request.nextUrl));
  }

  if (token && request.nextUrl.pathname.startsWith("/cursos")) {
    return NextResponse.redirect(new URL("/app", request.nextUrl));
  }

  if (token && request.nextUrl.pathname.startsWith("/blog")) {
    return NextResponse.redirect(new URL("/app", request.nextUrl));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/", "/about", "/cursos", "/blog", "/app"],
};
