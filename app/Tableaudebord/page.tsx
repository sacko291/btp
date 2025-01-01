import { Header } from "@/components/header/header"
import { SibebarGestion } from "@/components/sidebar/sidebar-gestion"

const page = () => {
  return (
    <div className="flex h-24">
          <SibebarGestion/>
          <Header />  
    </div>
  )
}

export default page
