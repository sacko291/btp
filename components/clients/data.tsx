import { MdDeleteForever } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";

export const DataRowClient = () => {
  return (
    <tbody className="border-b border-blue-600 cursor-pointer hover:bg-blue-400">
        <tr className="">
        <td className='text-center w-auto px-4 py-1'>012 345 678 99999</td>
        <td className='text-center w-auto px-4 py-1'>SAS</td>
        <td className='text-center w-auto px-4 py-1'>SACKO</td>
        <td className='text-center w-auto px-4 py-1'>7 rue des ......</td>
        <td className='text-center w-auto px-4 py-1'>93200</td>
        <td className='text-center w-auto px-4 py-1'>Saint Denis</td>
        <td className='text-center w-auto px-4 py-1'>01 00 00 00 00</td>
        <td className='text-center w-auto px-4 py-1'>test@gmail.com</td>
        <td className='text-center w-auto px-4 py-2 flex cursor-pointer gap-2 justify-center'><MdDeleteForever /> <IoMdCreate /></td>
    </tr>
    </tbody>
    
  )
}


