import { useDialog } from "@/hooks/use-dialog";
import { Row } from "@tanstack/react-table";
import { Payment } from "@/utils/data";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DialogForm } from "./dialog-form";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { typeFormField } from "@/utils/dialog-form-data";
import { toast } from "sonner";

interface ActionsMenuProps {
    onDeleted: (id: number) => void;
    setData: Dispatch<SetStateAction<Payment[]>>;
    row: Row<Payment>;
}

export const ActionsMenu: React.FC<ActionsMenuProps> = ({ onDeleted, setData, row }) => {
    const { isOpen, toggleDialog} = useDialog();

    const { id, ...fields } = row.original;

    const onSubmit = (data: typeFormField) => {
        setData((prev) => prev.map((item) => (item.id === id ? {id, ...data} : item)));
        toggleDialog();
    }

    const onCopyText = () => {
        navigator.clipboard.writeText(String(row.id));
        toast.success("User ID copied", {
            description: `ID ${id} successfully copied to clipboard.`,
            style: {
                backgroundColor: "green",
                color: "white",
            },
        });
    };


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
                        onClick={onCopyText}
                    >
                        Copy user ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onDeleted(row.original.id)}>
                        Delete user
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={toggleDialog}>
                        Update user
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={isOpen} onOpenChange={toggleDialog}>
                <DialogContent autoFocus={false}>
                    <DialogTitle>Update</DialogTitle>
                    <DialogDescription className="text-center">Update value for user with id: {id}</DialogDescription>
                    <DialogForm initialValues={fields} textSubmitButton="Update" onSubmit={onSubmit} />
                </DialogContent>
            </Dialog>
        </>
    );
};
