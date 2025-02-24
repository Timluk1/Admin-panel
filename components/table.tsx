"use client"

import { useMemo, useState } from "react"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
    SortingState,
    OnChangeFn
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


import { dat, Payment } from "@/utils/data"
import { ActionsMenu } from "./action-menu"

interface ITableComponentProps {
    sorting: SortingState,
    setSorting: OnChangeFn<SortingState>;
}

export const TableComponent = ({ sorting, setSorting }: ITableComponentProps) => {
    const [data, setData] = useState<Payment[]>(dat);

    const onDeleted = (id: number) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    }

    const columns: ColumnDef<Payment>[] = useMemo(
        () => [
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
                cell: ({ row }) => <ActionsMenu setData={setData} onDeleted={onDeleted} row={row}/>,
            },
        ],
        []
    );

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: { sorting },
    });

    return (
        <Table className="w-full">
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <TableHead key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                            No results.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};



