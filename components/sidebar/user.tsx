import { auth } from "@/auth"


export const User = async () => {
    const session = await auth()
  return (
        <div className="flex items-center gap-2 border rounded-md w-full p-2">
            <div className="flex flex-col justify-between items-center">
                <h2 className="text-[12px] font-bold">{session?.user?.name}</h2>
                <h3 className="text-[10px] font-light">{session?.user?.email}</h3>
            </div>
        </div>    
  )
}


