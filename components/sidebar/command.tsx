import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command"
  import  Link  from "next/link"

export const CommandLateral = ({siteBarMenu}: {siteBarMenu: any}) => {
  return (
    <Command>
            <CommandList className="max-h-screen mb-5 no-scrollbar overflow-auto">
                {siteBarMenu.map((menu: any, key: number) => (
                    <CommandGroup heading={menu.group} key={key}>
                        {menu.items.map((option: any, optionKey: number) => (
                                <Link className="flex hover:bg-cyan-500 hover:text-white rounded-md" key={optionKey} href={option.url}>
                                    <CommandItem>{option.icon}</CommandItem>
                                    <CommandItem>{option.text}</CommandItem>
                                </Link>                  
                        ))}
                        <CommandSeparator />
                    </CommandGroup>

                )
                )}
                
            </CommandList>
        </Command>
  )
}


