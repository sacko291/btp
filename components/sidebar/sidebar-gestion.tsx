
import { IoTimer } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { CommandLateral } from "@/components/sidebar/command";
import { IoIosSettings, IoMdMenu } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils";
import { FaFileInvoice } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineApartment } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { IoMdArchive } from "react-icons/io";
import { SiShortcut } from "react-icons/si";

export const SibebarGestion = () => {

    const siteBarMenu = [
        {
            group: "Général",
            items: [
            {
                text: "Feuile de temps",
                icon: <IoTimer/>,
                url: ""
            },
            {
                text: "Table des échéances",
                icon: <MdDateRange/>,
                url: ""
            }
        ]
        },{
            group: "Gestion des dossiers",
            items: [
            {
                text: "Clients",
                icon: <MdOutlineApartment />,
                url: "/clients"
            },
            {
                text: "Services",
                icon: <MdCurrencyExchange />,
                url: "/services"
            },
            {
                text: "Ouvriers",
                icon: <GrUserWorker />,
                url: "/ouvrier"
            },
            {
                text: "Devis",
                icon: <FaFileInvoice />,
                url: "proforma"
            },
            {
                text: "Facturation",
                icon: <FaFileInvoice />,
                url: "invoice"
            },
            {
                text: "Trésorerie",
                icon: <GiCash />,
                url: "/tresoreri"
            },
            {
                text: "Archives",
                icon: <IoMdArchive />,
                url: "/archives"
            },
        ]
        },
        {
            group: "Raccourcis",
                items: [
                {
                    text: "Raccourcis",
                    icon: <SiShortcut />,
                    url: ""
                },
            ]
        },
        {
            group: "Autre choix",
                items: [
                {
                    text: "Paramètres",
                    icon: <IoIosSettings />,
                    url: ""
                },
            ]
        }
    ]
  return (
    <div className="border-separate h-screen flex gap-3 flex-col pt-5 px-2">
        <Sheet>
      <SheetTrigger asChild>
      <IoMdMenu className={
            cn("outline-none bg-cyan-500 hover:bg-cyan-600 cursor-pointer text-white size-10 p-1 rounded-md"
            )
        }/>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <CommandLateral siteBarMenu={siteBarMenu}/>
      </SheetContent>
    </Sheet>
    </div>
  )
}


