import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
} from "@/components/ui/select";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeSelect = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const onValueChange = (value: string) => {
        setTheme(value as "dark" | "white");
    };
    return (
        <Select onValueChange={onValueChange} value={theme}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Them</SelectLabel>
                    <SelectItem value="white">White</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
