import { useState } from "react";
import { Row } from "@tanstack/react-table";
import { Payment } from "@/utils/data";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DialogForm } from "./dialog-form";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Dispatch } from "react";
import { SetStateAction } from "react";

interface ActionsMenuProps {
    onDeleted: (id: number) => void;
    setData: Dispatch<SetStateAction<Payment[]>>;
    row: Row<Payment>;
}

export const ActionsMenu: React.FC<ActionsMenuProps> = ({ onDeleted, setData, row }) => {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const { id, ...fields } = row.original;

    const onUpdateRow = (data: Payment) => {
        setData((prev) => prev.map((item) => (item.id === data.id ? data : item)));
    }
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(String(row.id))}
                    >
                        Copy user ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onDeleted(row.original.id)}>
                        Delete user
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setDialogOpen(true)}>
                        Update user
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                    <Button variant="ghost" className="hidden" />
                </DialogTrigger>
                <DialogContent autoFocus={false}>
                    <DialogTitle>Update</DialogTitle>
                    <DialogDescription>Update value for user with id: {id}</DialogDescription>
                    <DialogForm id={id} onUpdateRow={onUpdateRow} initialValues={fields} onClose={() => setDialogOpen(false)} />
                </DialogContent>
            </Dialog>
        </>
    );
};
