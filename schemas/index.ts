import * as z from "zod"

export const LoginSchemas = z.object({
    email: z.string().email({
         message: "Email required"
    }),
    password: z.string().min(1, {
        message: "Password required"
    })
})

export const RegisterSchemas = z.object({
    email: z.string().email({
         message: "Email required"
    }),
    password: z.string().min(6, {
        message: "Minimum 6 character required"
    }),
    name: z.string().min(1, {
        message: "Name is required"
    })
})

export const UrssafSchemas = z.object({
    profession: z.string({
         message: "Email required"
    }).min(1, {
        message: "Email required"
   }),
    annee: z.string({
        message: "Date is required"
    }).min(1, {
        message: "Date required"
   }),
    revenu: z.string({
        message: "Revenu is required"
    }).min(1, {
        message: "Revenu required"
   })
})