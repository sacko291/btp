import { MdDeleteForever } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";

export const DataRowOuvrier = () => {
  return (
    <tbody className="border-b border-cyan-600 cursor-pointer hover:bg-cyan-400">
        <tr className="">
        <td className='text-center w-auto px-4 py-1'>Lepetit</td>
        <td className='text-center w-auto px-4 py-1'>Enzo</td>
        <td className='text-center w-auto px-4 py-1'>06 00 00 00 00</td>
        <td className='text-center w-auto px-4 py-1'>25 rue ..........</td>
        <td className='text-center w-auto px-4 py-1'>93000</td>
        <td className='text-center w-auto px-4 py-1'>Drancy</td>
        <td className='text-center w-auto px-4 py-1'>peintre</td>
        <td className='text-center w-auto  px-4 py-1'>120€</td>
        <td className='text-center w-auto px-4 py-2 flex cursor-pointer gap-2 justify-center'><MdDeleteForever /> <IoMdCreate /></td>
    </tr>
    </tbody>
    
  )
}

