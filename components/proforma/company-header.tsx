import { FaUpload } from "react-icons/fa";

export const CompanyHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
      <input type="file" />
      </div>
      <div>
        <h1 className="text-5xl">DEVIS</h1>
      </div>
      <div className="p-2 border-2 border-black h-full rounded-sm">
        <h2 className="">Denomination social Entreprise </h2>
        <h2 className="">Adresse</h2>
        <h2 className="">Code Postale & Ville</h2>
        <h2 className="">Email</h2>
        <h2 className="">Tel : 01 00 00 00 00</h2>
      </div>
    </div>
  )
}


