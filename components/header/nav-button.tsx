import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import  Link  from "next/link"

type NavButtonProps = {
    href: string;
    label: string;
    isActive?: boolean
}
export const NavButton = ({href, label, isActive} : NavButtonProps) => {
  return (
    <Button
        variant="ghost"
        asChild
        className={
            cn("outline-none text-gray-600 hover:bg-cyan-500 hover:text-white",
                isActive && "bg-cyan-500 text-white"
            )
        }
    >
        <Link href={href} >{label}</Link>
    </Button>
  )
}


