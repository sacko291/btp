"use server"

import z from "zod"
import { LoginSchemas } from "@/schemas"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"
import { DEFAUT_LOGIN_REDIRECT } from "@/lib/routes"
import { error } from "console"

export const login = async (values: z.infer<typeof LoginSchemas>) => {
    const validatedField = LoginSchemas.safeParse(values)

    if (!validatedField.success) {
        return { error: "Invalid Field"}
    }

    const { email, password} = validatedField.data

    try {
        await signIn("credentials", {email, password, redirectTo: DEFAUT_LOGIN_REDIRECT})
    } catch (error) {
        if ( error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid email or password"}
                default:
                    return { error: "something went wrong"};
            }
        }

        throw error
    }

}