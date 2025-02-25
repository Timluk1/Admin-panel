import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectGroup,
    SelectLabel,
} from "./ui/select";

interface ISelectProps {
    onSortItemChange: (value: string) => void;
    sortBy: string;
    items: string[];
    className?: string;
    onCreateUser?: () => void;
}

export const SelectSort: React.FC<ISelectProps> = ({
    items,
    sortBy,
    onSortItemChange,
}) => {
    return (
        <div className="flex items-center gap-10">
            <h2 className="text-lg font-medium">Sort by:</h2>
            <Select onValueChange={onSortItemChange} value={sortBy}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Sort by</SelectLabel>
                        {items.map((value) => (
                            <SelectItem key={value} value={value}>
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};
    