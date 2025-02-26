import { useState } from "react";
import type { Payment } from "@/utils/data";
import { initialData } from "@/utils/data";
import { ColumnDef } from "@tanstack/react-table";
import { ActionsMenu } from "@/components/action-menu";
import { toast } from "sonner";

const useUsersTable = () => {
    const [data, setData] = useState<Payment[]>(initialData);

    const onDeleted = (id: number) => {
        const item = data.filter((item) => item.id === id)[0];
        setData((prev) => prev.filter((item) => item.id !== id));
        toast.success(`Payment with ID ${id} has been deleted`, {
            description: `User: ${item.email}`,
            duration: 2000,
            style: {
                background: "red",
                color: "white",
            },
            action: {
                label: "Undo",
                onClick: () => {
                    setData((prev) => [...prev, item]);
                },
            },
        });
    };

    const columns: ColumnDef<Payment>[] = [
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "status",
            header: "Status",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "amount",
            header: "Amount",
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => (
                <ActionsMenu
                    setData={setData}
                    onDeleted={onDeleted}
                    row={row}
                />
            ),
        },
    ];

    return { data, setData, columns, onDeleted };
};

export { useUsersTable };
