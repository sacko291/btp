import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchemas } from "./schemas"
import { getUserByEmail } from "./data/user"
import  bcrypt  from "bcryptjs"
 
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Google,
    GitHub,
    Credentials({
      async authorize(credentials){

        const validatedField = LoginSchemas.safeParse(credentials)

        if (validatedField.success) {
          const { email, password } = validatedField.data
          const user = await getUserByEmail(email)

          if (!user || !user.password)  return null

          const isValidUser = await bcrypt.compare(password, user.password)

          if (isValidUser) return user

        }

        return null

      }
    })
  ],
} satisfies NextAuthConfig