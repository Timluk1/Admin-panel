"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog"
import { ThemeSelect } from "./theme-select";

interface ISettingsDialogProps {
    isOpen: boolean;
    onOpenChange: () => void;
}

export const SettingsDialog: React.FC<ISettingsDialogProps> = ({ isOpen, onOpenChange }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="mb-5">Settings</DialogTitle>
                </DialogHeader>

                <DialogDescription className="mb-4">
                    Here you can customize the app for yourself.
                </DialogDescription>

                <ThemeSelect />
            </DialogContent>
        </Dialog>
    );
};
