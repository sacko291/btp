import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { apiAuthPrefix, authRoutes, DEFAUT_LOGIN_REDIRECT, publicRoutes } from "@/lib/routes"
 
const { auth } = NextAuth(authConfig)

export default auth((req) => {

    const isLoggedIn = !!req.auth;
    const { nextUrl } = req;

    const isApiAuthPrefix = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isAuthRoutes = authRoutes.includes(nextUrl.pathname);
    const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);

    if (isApiAuthPrefix) {
        return null
    }

    if (isAuthRoutes) {
        if (isLoggedIn) {
            return Response.redirect( new URL(DEFAUT_LOGIN_REDIRECT, nextUrl))
        }
        return null
    }

    if (!isPublicRoutes && !isLoggedIn) {
        return Response.redirect(new URL("/auth/login", nextUrl))
    }

    return null
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  }