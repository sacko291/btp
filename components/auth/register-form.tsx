"use client"

import Cardwraper from "@/components/auth/card-wraper"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { RegisterSchemas } from "@/schemas"
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
import { register } from "@/action/register"
import { useState, useTransition } from "react"

export const Registerform = () => {

  const [error, setError] = useState<string | undefined>("")
  const [succes, setSucces] = useState<string | undefined>("")
  const [isPanding, startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchemas>>({
    resolver: zodResolver(RegisterSchemas),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    }
  })

  const onSubmit = (values: z.infer<typeof RegisterSchemas>) => {
    setError("")
    setSucces("")
    startTransition(()=>{
      register(values).then((data) => {
        setError(data.error)
        setSucces(data.succes)
     })
    })
     
  }

  return (
    <Cardwraper
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-3">
      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Jean Marc" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="exemple@gmail.com" {...field} type="email"/>
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
      <Formerror message={error} />
      <Formesucces message={succes} />
      <Button type="submit" className="w-full">Create an account</Button>
      </form>
    </Form>
    </Cardwraper>
  )
}

