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
import { Textarea } from "../ui/textarea"

export function EditProject () {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-cyan-500 p-4 text-2xl">Créer</Button>
      </DialogTrigger>
      <DialogContent className="w-4/5">
        <DialogHeader>
          <DialogTitle>Nouveau Projet </DialogTitle>
          <DialogDescription>
            
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
            <div className="flex justify-between gap-3">
                <div className="flex flex-col w-1/2 items-center gap-2">
                    <Label htmlFor="name" className="text-right">
                        Nom
                    </Label>
                    <Input id="name" className="col-span-3 w-full" />
                </div>
                <div className="flex flex-col w-1/2 items-center gap-2">
                    <Label htmlFor="username" className="text-right">
                        Adresse
                    </Label>
                    <Input id="adresse" className="col-span-3" />
                </div>
            </div>
            <div className="flex justify-between gap-3">
                <div className="flex flex-col w-1/2 items-center gap-2">
                    <Label htmlFor="username" className="text-right">
                        Responsable
                    </Label>
                    <Input id="responsable" className="col-span-3" />
                </div>
                <div className="flex flex-col w-1/2 items-center gap-2">
                    <Label htmlFor="username" className="text-right">
                        Telephone
                    </Label>
                    <Input id="telephone" className="col-span-3" />
                </div>
            </div>
            <div className="flex justify-between gap-3">
                <div className="flex flex-col w-1/2 items-center gap-2">
                    <Label htmlFor="username" className="text-right">
                        Date Debut
                    </Label>
                    <Input id="datedebut" className="col-span-3" />
                </div>
                <div className="flex flex-col w-1/2 items-center gap-2">
                    <Label htmlFor="username" className="text-right">
                        Date Fin
                    </Label>
                    <Input id="datefin" className="col-span-3" />
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
                        Statut
                    </Label>
                    <Input id="statut" className="col-span-3" />
                </div>
            </div>
          <div className="flex flex-col items-center gap-2">
            <Label htmlFor="username" className="text-right">
                Description
            </Label>
            <Textarea id="description" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Enregistrer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
