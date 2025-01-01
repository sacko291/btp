import { Header } from "@/components/header/header"
import { CardProjet } from "@/components/projet/card"
import { EditProject } from "@/components/projet/edit-project"
import { SibebarGestion } from "@/components/sidebar/sidebar-gestion"
import { FaSearch } from "react-icons/fa"


const page = () => {
  return (
    <div className="">
      <div className="flex h-32">
        <SibebarGestion/>
        <Header/>  
      </div>
      <div className="flex flex-col gap-5 m-[5%] border shadow-sm border-cyan-400 rounded-md p-10">
        <div className="flex justify-between">
            <h1 className="text-4xl">Mes Projets</h1>
            <div className="m-4 flex justify-end items-center gap-2">
              <div className='flex gap-2 rounded-md border-cyan-600 border-2 items-center w-4/5 p-1'>
                  <FaSearch className='text-gray-200'/>
                  <input type="text" placeholder='Recherche.............' className='bg-cyan-300 w-4/5  text-black outline-none placeholder:text-gray-200'/>
                </div>
              <EditProject/>
            </div>
        </div>
        <div className="flex gap-[6%] flex-wrap">
          <CardProjet/>
          <CardProjet/>
          <CardProjet/>
          <CardProjet/>
          <CardProjet/>
          <CardProjet/>
          <CardProjet/>
          <CardProjet/>
        </div>
      </div>
    </div>
  )
}

export default page