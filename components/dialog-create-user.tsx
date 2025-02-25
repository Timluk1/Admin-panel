import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { DialogForm } from "./dialog-form";
import { typeFormField } from "@/utils/dialog-form-data";

interface IDialogCreateUserProps {
    isOpen: boolean;
    setIsOpen: () => void;
    onSubmit: (formData: typeFormField) => void;
}

export const DialogCreateUser: React.FC<IDialogCreateUserProps> = ({
    isOpen,
    setIsOpen,
    onSubmit,
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create user</DialogTitle>
                </DialogHeader>
                <DialogForm textSubmitButton="Create" onSubmit={onSubmit} />
            </DialogContent>
        </Dialog>
    );
};
