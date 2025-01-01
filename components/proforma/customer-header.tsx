

export const CustomerHeaderProforma = () => {
    return (
      <div className="flex justify-between">
          <div className="p-2 h-full border-2 border-black box-border rounded-sm">
            <h2>Denomination social Entreprise </h2>
            <h2>Adresse</h2>
            <h2>Code Postale & Ville</h2>
            <h2>Email</h2>
            <h2>Tel : 01 00 00 00 00</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <h2 className="bg-gray-300 text-center rounded-sm p-1 border border-black box-border w-28">Devis N°</h2>
            <h2 className="border border-black rounded-sm text-center p-1 box-border w-28">DE 00001</h2>
          </div>
          <div className="flex gap-2">
            <h2 className="bg-gray-300 text-center rounded-sm p-1 box-border border border-black w-28">Date</h2>
            <h2 className="border border-black rounded-sm text-center box-border p-1 w-28">14/12/2024</h2>
          </div>
          <div className="flex gap-2">
            <h2 className="bg-gray-300 text-center  rounded-sm p-1 box-border border border-black w-28">Client</h2>
            <h2 className="border border-black text-center rounded-sm box-border p-1 w-28">001</h2>
          </div>
          <div className="flex gap-2">
            <h2 className="bg-gray-300 text-center rounded-sm p-1 border border-black w-28">Echeance</h2>
            <h2 className="border border-black text-center rounded-sm p-1 w-28">14/12/2024</h2>
          </div>
        </div>
      </div>
    )
  }