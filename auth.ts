import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import authConfig from "@/auth.config"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: "/auth/login",
        error: "auth/error"
    },
    callbacks: {
        async session({session, token}){
            if (session.user && token.sub) {
                session.user.id = token.sub
            }
            return session
        },
        async jwt({token, user}) {
            if (user) {
                token.sub = user.id
            }
            return token
        }
    },
    session: { strategy: "jwt" },
    ...authConfig,
})