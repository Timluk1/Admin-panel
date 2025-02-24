import { createContext } from "react";

interface ThemeContextProps {
    theme: "dark" | "white";
    setTheme: (theme: "dark" | "white") => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "dark",
    setTheme: () => {},
});
