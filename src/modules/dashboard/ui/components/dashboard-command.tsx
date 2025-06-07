import {  CommandList, CommandItem , CommandInput, CommandResonsiveDialog } from "@/components/ui/command"
import { SetStateAction , Dispatch} from "react";

interface Props{
    open:boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}
export const DashboardCommand = ({ open , setOpen } : Props) =>{
    return (
        <CommandResonsiveDialog open={open} onOpenChange={setOpen}>
            <CommandInput   
                placeholder="Find a meeting or agent"
            />
            <CommandList>
                <CommandItem>
                    Test
                </CommandItem>
            </CommandList>
        </CommandResonsiveDialog>
    )
}