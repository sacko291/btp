

import { Header } from "@/components/header/header"
import { DataHeader } from "@/components/invoice/data-header"
import { InvoiceFooter } from "@/components/invoice/footer"
import { InvoiceHeader } from "@/components/invoice/header"
import { SibebarGestion } from "@/components/sidebar/sidebar-gestion"
import { BlackTheme } from "@/components/themes/black"
import { BlueTheme } from "@/components/themes/bleu"
import { GreenTheme } from "@/components/themes/green"
import { OrangeTheme } from "@/components/themes/orange"
import { RedTheme } from "@/components/themes/red"
import { Button } from "@/components/ui/button"


const page = () => {
  return (
    <div>
       <div className="flex h-32">
          <SibebarGestion/>
          <Header/>  
        </div>
        <div className="flex gap-3 mx-6">
          <div className="w-3/5 p-3 mx-2 my-14 bg-white">
              <InvoiceHeader/>
              <DataHeader/>
              <InvoiceFooter/>
          </div>
          <div className="w-2/5 h-full p-3 my-14 flex rounded-md shadow-md flex-col gap-3 bg-white">
            <h2 className="py-3 border-b-2 border-cyan-400">Parametre Facture</h2>
            <div className="flex gap-3 py-3 border-b-2 border-cyan-400">
              <h1 >Theme</h1>
              <BlackTheme/>
              <BlueTheme/>
              <OrangeTheme/>
              <GreenTheme/>
              <RedTheme/>
            </div>
            <Button className="bg-cyan-400 text-black hover:text-white hover:bg-cyan-500">Enregistrer</Button>
          </div>
        </div>
    </div>
    
  )
}

export default page
