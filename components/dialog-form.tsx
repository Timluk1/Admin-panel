import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form";
import { DialogFooter, DialogClose } from "./ui/dialog";
import { Input } from "@/components/ui/input";
import { Payment, typeStatus } from "@/utils/data";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const FormSchema = z.object({
    status: z.enum(["pending", "processing", "success", "failed"], { message: "Invalid status" }),
    email: z.string().email(),
    amount: z.number().positive(),
});

const formFields = [
    { name: "status", type: "text" },
    { name: "email", type: "email" },
    { name: "amount", type: "number" },
] as const;

interface DialogFormProps {
    id: number;
    initialValues: {
        status: typeStatus;
        email: string;
        amount: number;
    };
    onUpdateRow: (data: Payment) => void;
    onClose: () => void;
}

export const DialogForm: React.FC<DialogFormProps> = ({ id, initialValues, onUpdateRow, onClose }) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: initialValues,
    });

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        onUpdateRow({ id, ...data } as Payment);
        onClose();
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full">
                <div className="mb-5 space-y-2">
                    {formFields.map(({ name, type }) => (
                        <FormField
                            key={name}
                            control={form.control}
                            name={name}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary">{capitalize(name)}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={capitalize(name)}
                                            {...field}
                                            type={type}
                                            onChange={(e) => field.onChange(type === "number" ? Number(e.target.value) || 0 : e.target.value)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                </div>
                <DialogFooter>
                    <Button type="submit">Update</Button>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                </DialogFooter>
            </form>
        </Form>
    );
};
