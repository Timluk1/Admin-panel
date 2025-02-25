import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { capitalize } from "@/utils/capitalize";
import { Button } from "./ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { DialogFooter, DialogClose } from "./ui/dialog";
import { Input } from "@/components/ui/input";
import { FormSchema, formFields } from "@/utils/dialog-form-data";
import type { typeFormField } from "@/utils/dialog-form-data";

interface DialogFormProps {
    initialValues?: typeFormField;
    textSubmitButton: string;
    onSubmit: (data: typeFormField) => void;
}

export const DialogForm: React.FC<DialogFormProps> = ({
    onSubmit,
    textSubmitButton,
    initialValues,
}) => {
    const form = useForm<typeFormField>({
        resolver: zodResolver(FormSchema),
        defaultValues: initialValues,
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full h-full"
            >
                <div className="mb-5 space-y-2">
                    {formFields.map(({ name, type }) => (
                        <FormField
                            key={name}
                            control={form.control}
                            name={name}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary">
                                        {capitalize(name)}
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={capitalize(name)}
                                            {...field}
                                            type={type}
                                            value={field.value ?? ""}
                                            onChange={(e) => {
                                                if (type === "number") {
                                                    const value = e.target.value
                                                        ? parseFloat(
                                                              e.target.value,
                                                          )
                                                        : null;
                                                    field.onChange(value);
                                                } else {
                                                    field.onChange(
                                                        e.target.value,
                                                    );
                                                }
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                </div>
                <DialogFooter>
                    <Button type="submit">{textSubmitButton}</Button>
                    <DialogClose className="max-sm:mb-4" asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                </DialogFooter>
            </form>
        </Form>
    );
};
