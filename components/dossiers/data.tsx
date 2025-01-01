import { MdDeleteForever } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";

const DataRowDossier = () => {
  return (
    <tbody className="border-b border-blue-600 cursor-pointer hover:bg-blue-400">
        <tr className="">
        <td className='text-center min-w-48 px-4 py-1'>012 345 678 99999</td>
        <td className='text-center w-auto px-4 py-1'>SAS</td>
        <td className='text-center w-auto px-4 py-1'>TIMES</td>
        <td className='text-center w-auto px-4 py-1'>7 rue des ..</td>
        <td className='text-center max-w-10 px-4 py-1'>93200</td>
        <td className='text-center w-auto px-4 py-1'>Saint Denis</td>
        <td className='text-center max-w-10  px-4 py-1'>75056</td>
        <td className='text-center w-auto px-4 py-1'>000 000 000</td>
        <td className='text-center w-auto px-4 py-2 flex cursor-pointer gap-2 justify-center'><MdDeleteForever /> <IoMdCreate /></td>
    </tr>
    </tbody>
    
  )
}

export default DataRowDossier
