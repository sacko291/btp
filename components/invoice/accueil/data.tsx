import { MdDeleteForever } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";

export const DataRowInvoices = () => {
  return (
    <tbody className="border-b border-cyan-600 cursor-pointer hover:bg-cyan-400">
        <tr className="">
        <td className='text-center w-auto px-4 py-1'>SAS Singh</td>
        <td className='text-center w-auto px-4 py-1'>FA 001</td>
        <td className='text-center w-auto px-4 py-1'>test@gmail.com</td>
        <td className='text-center w-auto px-4 py-1'>10 500</td>
        <td className='text-center w-auto px-4 py-1'>27/01/2025</td>
        <td className='text-center w-auto px-4 py-2 flex cursor-pointer gap-2 justify-center'><MdDeleteForever /> <IoMdCreate /></td>
    </tr>
    </tbody>
    
  )
}

