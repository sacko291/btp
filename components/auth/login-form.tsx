"use client"

import Cardwraper from "@/components/auth/card-wraper"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { LoginSchemas } from "@/schemas"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Formerror } from "@/components/auth/form-error"
import { Formesucces } from "@/components/auth/form-succes"
import { login } from "@/action/login"
import { useState, useTransition } from "react"
import { useSearchParams } from "next/navigation"

export const Loginform = () => {

  const searchParams = useSearchParams()
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked" ? "Email already is with different provider" : ""
  const [error, setError] = useState<string | undefined>("")
  const [isPanding, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchemas>>({
    resolver: zodResolver(LoginSchemas),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchemas>) => {
    setError("")
    startTransition(()=>{
      login(values).then(data => {
        setError(data?.error)
     })
    })
     
  }

  return (
    <Cardwraper
      headerLabel="Welcom back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-3">
      <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="exemple@gmail.com" {...field} type="text"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="******" {...field} type="password"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Formerror message={error || urlError} />
      <Button type="submit" className="w-full">Login</Button>
      </form>
    </Form>
    </Cardwraper>
  )
}

