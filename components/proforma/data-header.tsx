import { DataRowProforma } from "./data-row"


export const DataHeaderProforma = () => {
  return (
    <div className="border border-black">
      <table className="w-full text-start">
            <thead className="bg-black text-white">
                <tr className="">
                    <th className="py-1">
                        Ref
                    </th>
                    <th className="py-1">
                        Description
                    </th>
                    <th className="py-1">
                        Quantite
                    </th>
                    <th className="py-1">
                        P.U
                    </th>
                    <th className="py-1">
                        Montant
                    </th>
                </tr>
            </thead>
            <DataRowProforma/>
            <DataRowProforma/>
            <DataRowProforma/>
            <DataRowProforma/>
            <DataRowProforma/>
            <DataRowProforma/>
            <DataRowProforma/>
            <DataRowProforma/>
            <DataRowProforma/>
            <DataRowProforma/>
            <DataRowProforma/>
            <DataRowProforma/>
      </table>
    </div>
  )
}

