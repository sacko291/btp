"use server"

import z from "zod"
import { RegisterSchemas } from "@/schemas"
import { db } from "@/lib/db"
import { PrismaClient } from "@prisma/client"
import { getUserByEmail } from "@/data/user"
import  bcrypt  from "bcryptjs"

const prisma = new PrismaClient()

export const register = async (values: z.infer<typeof RegisterSchemas>) => {
    
    const validatedFiled = RegisterSchemas.safeParse(values)

    if (!validatedFiled.success) {
        return { error: "Invalid Field"}
    }

    const { name, email, password } = validatedFiled.data
    const hastPassword = await bcrypt.hash(password, 10)

    const existingUser = await getUserByEmail(email)

    if (existingUser) {
        return { error: "User already exist"}
    }

    await db.user.create({
        data:{
            name,
            email,
            password: hastPassword
        }
    })


    return { succes: "user created"}

}