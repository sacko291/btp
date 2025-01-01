

export const InvoiceFooter = () => {
  return (
    <div className="flex justify-between my-8">
      <div className="rounded-sm h-16 border-2 border-black">
        <table className="">
            <thead className="bg-gray-300 rounded-tl-md rounded-tr-md">
                <tr>
                    <th className="px-2">
                        Code
                    </th>
                    <th className="px-2">
                        Base Ht
                    </th>
                    <th className="px-2">
                        Taux TVA
                    </th>
                    <th className="px-2">
                        Montant TVA
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-center">0</td>
                    <td className="text-center">1 000</td>
                    <td className="text-center">20%</td>
                    <td className="text-center">200</td>
                </tr>
            </tbody>
        </table>
      </div>
      <div className="flex flex-col border-2 rounded-md border-black w-80">
        <div className="flex">
            <h2 className="bg-gray-300 rounded-tl-md p-1 w-1/2">Total HT</h2>
            <h2 className="p-1 w-1/2 text-end">1 000</h2>
        </div>
        <div className="flex">
            <h2 className="bg-gray-300 p-1 w-1/2">Net HT</h2>
            <h2 className="p-1 w-1/2 border-b border-black text-end">1 000</h2>
        </div>
        <div className="flex">
            <h2 className="bg-gray-300 p-1 w-1/2">Total TVA</h2>
            <h2 className="p-1 w-1/2 text-end">200</h2>
        </div>
        <div className="flex">
            <h2 className="bg-gray-300 p-1 w-1/2">Total TTC</h2>
            <h2 className="p-1 w-1/2 text-end">1 200</h2>
        </div>
        <div className="flex rounded-b-md bg-gray-300 ">
            <h2 className="p-1 w-1/2">NET A PAYER</h2>
            <h2 className="p-1 w-1/2 text-end">1 200</h2>
        </div>
      </div>
    </div>
  )
}


