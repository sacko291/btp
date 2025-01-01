import { CompanyHeader } from "./company-header"
import { CustomerHeader } from "./customer-header"


export const InvoiceHeader = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <CompanyHeader/>
      <CustomerHeader/>
    </div>
  )
}

