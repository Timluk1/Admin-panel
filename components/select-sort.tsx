import { cn } from "@/lib/utils"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from "./ui/select"

interface ISelectProps {
    onSortItemChange: (value: string) => void
    sortBy: string
    items: string[]
    className?: string
}

export const SelectSort: React.FC<ISelectProps> = ({ items, sortBy, onSortItemChange, className }) => {
    return (
        <div className={cn("flex justify-between items-center", className)}>
            <h2>Sort by: </h2>
            <Select onValueChange={onSortItemChange} value={sortBy}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Sort by</SelectLabel>
                        {items.map((value) => <SelectItem key={value} value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
