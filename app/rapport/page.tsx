
import { Header } from "@/components/header/header"
import { SibebarGestion } from "@/components/sidebar/sidebar-gestion"

const page = () => {
  return (
    <div className="flex">
          <SibebarGestion/>
          <Header/> 
      
    </div>
  )
}

export default page
