import { SlOptionsVertical } from "react-icons/sl";

export const CardProjet = () => {
  return (
    <div className="flex flex-col w-1/5 h-72 bg-white border-cyan-600 mb-5 border-2 rounded-md cursor-pointer hover:scale-110">
      <div className="h-1/2">
        <a href="/"><img src="/Projet_image5.png" alt="" className="w-full h-full rounded-t-sm" /></a>
      </div>
      <div className="h-1/2 flex flex-col gap-5 px-2">
        <div className="w-full text-center">
            <h1>NOM CHANTIER</h1>
            <h2>ADRESSE COMPLETE</h2>
        </div>
        <div className="flex justify-between w-full">
            <div className="bg-cyan-400 rounded-full w-10 h-10 p-3">
                <SlOptionsVertical />
            </div>
            <div className="bg-cyan-400 p-3 rounded-lg">
                <h2>En cours</h2>
            </div>
        </div>
      </div>
    </div>
  )
}
