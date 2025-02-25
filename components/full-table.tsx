"use client"

import { SelectSort } from "./select-sort"
import { TableComponent } from "./table"
import { DialogCreateUser } from "./dialog-create-user";
import { useState } from "react";
import { SortingState } from "@tanstack/react-table";
import { useDialog } from "@/hooks/use-dialog";
import { keys } from "@/utils/data";
import { Button } from "./ui/button";
import { useUsersTable } from "@/hooks/use-users-table";
import { typeFormField } from "@/utils/dialog-form-data";

export const FullTable = () => {
    const [sorting, setSorting] = useState<SortingState>([{ id: "id", desc: false }]);
    const { isOpen, toggleDialog } = useDialog();
    const { data, setData, columns } = useUsersTable();

    const onSortItemChange = (value: string) => {
        setSorting([{ id: value, desc: false }]);
    };

    const onSubmit = (formData: typeFormField) => {
        const id = Math.max(...data.map((item) => item.id)) + 1;
        setData((prev) => [...prev, { id, ...formData }]);
        toggleDialog();
    };


    const selectSortProps = {
        onSortItemChange,
        sortBy: sorting[0].id,
        items: keys,
        className: "mb-5",
    };

    return (
        <div className="w-full">
            <DialogCreateUser onSubmit={onSubmit} isOpen={isOpen} setIsOpen={toggleDialog} />
            <div className="flex justify-between items-center mb-5">
                <SelectSort {...selectSortProps} />
                <Button onClick={toggleDialog}>Create user</Button>
            </div>
            <TableComponent data={data} columns={columns} sorting={sorting} setSorting={setSorting} />
        </div>
    );
};
