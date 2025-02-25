import { z } from "zod";

const FormSchema = z.object({
    status: z.enum(["pending", "processing", "success", "failed"], { message: "Invalid status" }),
    email: z.string().email(),
    amount: z.number().positive()
});

const formFields = [
    { name: "status", type: "text" },
    { name: "email", type: "email" },
    { name: "amount", type: "number" },
] as const;

type typeFormField = z.infer<typeof FormSchema>;

export { FormSchema, formFields };
export type { typeFormField };