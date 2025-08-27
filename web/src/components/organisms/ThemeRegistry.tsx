import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../../theme";
import { CssBaseline } from "@mui/material";
import { createContext, useContext, useState } from "react";

export type ThemeMode = "light" | "dark";

interface ThemeModeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextType>({
    mode: "light",
    toggleTheme: () => {},
});

export function useThemeMode() {
    return useContext(ThemeModeContext);
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<ThemeMode>("light");


    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    return (
        <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    )
}   