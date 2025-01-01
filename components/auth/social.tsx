"use client"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { DEFAUT_LOGIN_REDIRECT } from "@/lib/routes"


export const Social = () => {

  const onClick = (provider: "github" | "google") => {
    signIn(provider, {
      callbackUrl: DEFAUT_LOGIN_REDIRECT
    })
  }

  return (
    <div className='flex w-full items-center gap-x-2'>
      <Button
      size="lg"
      className="w-full"
      variant="outline"
      onClick={()=> onClick("google")}
      >
        <FcGoogle className="h-7 w-7"/>
      </Button>
      <Button
      size="lg"
      className="w-full"
      variant="outline"
      onClick={()=>onClick("github")}
      >
        <FaGithub className="h-7 w-7"/>
      </Button>
    </div>
  )
}


