"use client"

import { SelectSort } from "./select-sort"
import { TableComponent } from "./table"
import { useState } from "react";
import { SortingState } from "@tanstack/react-table";
import { keys } from "@/utils/data";

export const FullTable = () => {
    const [sorting, setSorting] = useState<SortingState>([{ id: "id", desc: false }]);

    const onSortItemChange = (value: string) => {
        setSorting([{ id: value, desc: false }]);
    };

    const selectSortProps = {
        onSortItemChange,
        sortBy: sorting[0].id,
        items: keys,
        className: "mb-5"
    };

    return (
        <div className="w-full">
            <SelectSort {...selectSortProps} />
            <TableComponent sorting={sorting} setSorting={setSorting} />
        </div>
    );
};
