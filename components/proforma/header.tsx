import { CompanyHeader } from "./company-header"
import { CustomerHeaderProforma } from "./customer-header"


export const ProformaHeader = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <CompanyHeader/>
      <CustomerHeaderProforma/>
    </div>
  )
}

