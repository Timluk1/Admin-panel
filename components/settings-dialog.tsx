"use client";

import { useState } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog";
import { SidebarMenuButton } from "./ui/sidebar";
import { Settings } from "lucide-react";
import { ThemeSelect } from "./theme-select";

export const SettingsDialog = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <SidebarMenuButton onClick={handleOpen}>
                    <Settings />
                    Settings
                </SidebarMenuButton>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="mb-5">Settings</DialogTitle>
                    <DialogDescription className="mb-4">
                        Here you can customize the app for yourself.
                    </DialogDescription>
                </DialogHeader>

                <ThemeSelect />
            </DialogContent>
        </Dialog>
    );
};
