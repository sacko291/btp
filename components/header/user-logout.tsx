import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

import React from 'react'
import { User } from "../sidebar/user"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { signOut } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { FaSignOutAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io"

export const CurentUser = () => {
  return (
    <HoverCard>
        <HoverCardTrigger>
        <div className="w-10 h-10 rounded-full bg-cyan-500 flex justify-center items-center">
            <h3 className="text-white">
                MS
            </h3>
        </div>
        </HoverCardTrigger>
        <HoverCardContent className="flex flex-col gap-1 absolute right-0 w-[400px]">
        <div className="flex items-center gap-4 w-full px-2">
            <div className="w-10 h-10 rounded-full bg-cyan-500 flex justify-center items-center">
                <h3 className="text-white">
                    MS
                </h3>
            </div>
            <div className="flex flex-col justify-between">
                <h2 className="text-[16px] ">Moussa Sacko</h2>
                <h3 className="text-[14px] font-light">Moussasacko418@gmail.com</h3>
            </div>
        </div> 
        <div className="flex gap-6 items-center px-5 py-2">
            <IoIosSettings />
            <Button variant="outline"><a href="/">Paramètre</a></Button>
        </div>
        <div className="flex gap-6 items-center px-5 py-2">
            <FaSignOutAlt />
            <Button
                variant="outline"
                onClick={async()=>{ await signOut()}}
                > Deconnexion
            </Button>
        </div>
        
        </HoverCardContent>
    </HoverCard>

  )
}

