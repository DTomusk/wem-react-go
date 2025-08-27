import { FormControlLabel, Switch } from "@mui/material";
import { useThemeMode } from "../organisms/ThemeRegistry";

export default function ThemeToggle() {
    const { mode, toggleTheme } = useThemeMode();
    return (
        <FormControlLabel control={
            <Switch onClick={toggleTheme}/>} 
            label={mode === "light" ? "Light" : "Dark"}
            labelPlacement="start"
            />
    )
}