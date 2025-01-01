"use client"

import { HeaderLogo } from "@/components/header/header-logo"
import { Navigation } from "@/components/header//navigation"


export const Header = () => {
    
  return (
    <header className="w-full h-20 pt-6 px-6">
        <div className="flex items-center  justify-between w-full">
            <div className="flex items-center justify-between w-full">
                <HeaderLogo/>
                <Navigation/>
            </div>
        </div>
    </header>
  )
}


