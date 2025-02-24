"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { MoreHorizontal } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { useState } from "react"
import { Row } from "@tanstack/react-table"
import { Input } from "./ui/input"
import { Payment } from "@/utils/data"
import { Label } from "./ui/label"

interface ActionsMenuProps {
    row: Row<Payment>;
}

export const ActionsMenu: React.FC<ActionsMenuProps> = ({ row }) => {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const { id, ...fields } = row.original;
    const fieldsListKeys = Object.keys(fields);

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
                    <DropdownMenuItem onClick={() => setDialogOpen(true)}>
                        Change amount
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Dialog to update the amount */}
            <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                    <Button variant="ghost" className="hidden" />
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>Update value</DialogTitle>
                    <div>
                        {fieldsListKeys.map((key) => (
                            <div key={key} className="field-container">
                                <Label>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                                <Input  />
                            </div>
                        ))}
                    </div>

                    <DialogDescription>
                        You can change the value of table
                    </DialogDescription>
                    <DialogFooter>
                        <Button onClick={() => {
                            row.original.amount = 52
                            setDialogOpen(false)
                        }
                        }>Update</Button>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};
