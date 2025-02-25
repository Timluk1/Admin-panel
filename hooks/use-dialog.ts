import { useState } from "react";

interface DialogHookReturn {
    isOpen: boolean;
    openDialog: () => void;
    closeDialog: () => void;
    toggleDialog: () => void;
}

interface IDialogHookProps {
    defaultOpen?: boolean;
}

const useDialog = ({
    defaultOpen = false,
}: IDialogHookProps = {}): DialogHookReturn => {
    const [isOpen, setIsOpen] = useState<boolean>(() => defaultOpen);
    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);
    const toggleDialog = () => setIsOpen((prev) => !prev);

    return { isOpen, openDialog, closeDialog, toggleDialog };
};

export { useDialog };
