import { DataRow } from "./data-row"


export const DataHeader = () => {
  return (
    <div className="border border-black">
      <table className="w-full text-start">
            <thead className="bg-black text-white">
                <tr className="">
                    <th>
                        Ref
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Quantite
                    </th>
                    <th>
                        P.U
                    </th>
                    <th>
                        Montant
                    </th>
                </tr>
            </thead>
            <DataRow/>
            <DataRow/>
            <DataRow/>
            <DataRow/>
            <DataRow/>
            <DataRow/>
            <DataRow/>
            <DataRow/>
            <DataRow/>
            <DataRow/>
            <DataRow/>
            <DataRow/>
      </table>
    </div>
  )
}

