import { FaUpload } from "react-icons/fa";

export const CompanyHeader = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="">
        <input type="file" placeholder="."/>
      </div>
      <div>
        
      </div>
      <div className=" min-w-52 p-2 border-2 border-black h-full rounded-sm">
        <h2>Denomination social Entreprise </h2>
        <h2>Adresse</h2>
        <h2>Code Postale & Ville</h2>
        <h2>Email</h2>
        <h2>Tel : 01 00 00 00 00</h2>
      </div>
    </div>
  )
}


