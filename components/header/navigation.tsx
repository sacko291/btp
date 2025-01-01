"use client"

import { usePathname } from "next/navigation"
import { NavButton } from "./nav-button"
import { CurentUser } from './user-logout'


const routers = [
    {
        href: "/Tableaudebord",
        label: "Tableau De Bord"
    },
    {
        href: "/gestion",
        label: "Gestion"
    },
    {
        href: "/projet",
        label: "Projet"
    },
    {
        href: "/ressources",
        label: "Ressources"
    },
    {
        href: "/rapport",
        label: "Rapport"
    },
]

export const Navigation = () => {

    const pathname = usePathname()

  return (
    <nav className="w-full justify-end flex items-center gap-4">
        {routers.map((router: any, key: number) => (
            <NavButton key={key} href={router.href} label={router.label} isActive={pathname === router.href} />
        ))}
        <CurentUser/>
    </nav>
  )
}

