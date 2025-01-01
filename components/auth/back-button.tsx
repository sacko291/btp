"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

type BackbuttonProps = {
    label: string;
    href: string
}

export const Backbutton = ({label, href}: BackbuttonProps) => {
  return (
    <Button
    variant="link"
    size="sm"
    className="font-normal w-full"
    asChild
    >
        <Link href={href}>
            {label}
        </Link>
    </Button>
  )
}


