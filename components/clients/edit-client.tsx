import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function EditClient () {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-cyan-500 p-4 text-2xl">Ajouter</Button>
      </DialogTrigger>
      <DialogContent className="w-4/5">
        <DialogHeader>
          <DialogTitle>Ajouter Client </DialogTitle>
          <DialogDescription>
            Veuillez renseignez les informations du nouveau Client
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
            <div className="flex justify-between gap-3">
                <div className="flex flex-col w-1/2 items-center gap-2">
                    <Label htmlFor="name" className="text-right">
                        Siren
                    </Label>
                    <Input id="siren" className="col-span-3 w-full" />
                </div>
                <div className="flex flex-col w-1/2 items-center gap-2">
                    <Label htmlFor="username" className="text-right">
                        Forme Juridique
                    </Label>
                    <Input id="formejuridique" className="col-span-3" />
                </div>
            </div>
            <div className="flex justify-between gap-3">
                <div className="flex flex-col w-1/2 items-center gap-2">
                    <Label htmlFor="username" className="text-right">
                        Rue
                    </Label>
                    <Input id="rue" className="col-span-3" />
                </div>
                <div className="flex flex-col w-1/2 items-center gap-2">
                    <Label htmlFor="username" className="text-right">
                        Code Postal
                    </Label>
                    <Input id="codepostal" className="col-span-3" />
                </div>
            </div>
            <div className="flex justify-between gap-3">
                <div className="flex flex-col w-1/2 items-center gap-2">
                    <Label htmlFor="username" className="text-right">
                        Ville
                    </Label>
                    <Input id="ville" className="col-span-3" />
                </div>
                <div className="flex flex-col w-1/2 items-center gap-2">
                    <Label htmlFor="username" className="text-right">
                        Denomination Social
                    </Label>
                    <Input id="denominationsocial" className="col-span-3" />
                </div>
            </div>
            <div className="flex justify-between gap-3">
                <div className="flex flex-col w-1/2 items-center gap-2">
                    <Label htmlFor="username" className="text-right">
                        Email
                    </Label>
                    <Input id="email" className="col-span-3" />
                </div>
                <div className="flex flex-col w-1/2 items-center gap-2">
                    <Label htmlFor="username" className="text-right">
                        Telephone
                    </Label>
                    <Input id="telephone" className="col-span-3" />
                </div>
            </div>
        </div>
        <DialogFooter>
          <Button type="submit">Enregistrer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
