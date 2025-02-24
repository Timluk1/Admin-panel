"use client"

import { SelectSort } from "./select-sort"
import { TableComponent } from "./table"
import { useState } from "react";
import { SortingState } from "@tanstack/react-table";

export const FullTable = () => {
    const [sorting, setSorting] = useState<SortingState>([{ id: "amount", desc: false }]);

    const onSortItemChange = (value: string) => {
        setSorting([{ id: value, desc: false }]);
    };

    const selectSortProps = {
        onSortItemChange,
        sortBy: sorting[0].id,
        items: ["status", "email", "amount"],
        className: "mb-5"
    };

    return (
        <div>
            <SelectSort {...selectSortProps} />
            <TableComponent sorting={sorting} setSorting={setSorting} />
        </div>
    );
};
