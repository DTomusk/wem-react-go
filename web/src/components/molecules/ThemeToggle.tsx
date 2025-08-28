import { FormControlLabel, Switch } from "@mui/material";
import { useThemeMode } from "../organisms/ThemeRegistry";
import { useTranslation } from "react-i18next";

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();
  const { t, i18n } = useTranslation();

  return (
    <FormControlLabel
      key={i18n.language}
      control={
        <Switch 
          onClick={toggleTheme} 
          checked={mode === "dark"} 
        />
      }
      label={mode === "light" ? t("lightMode") : t("darkMode")}
      labelPlacement="start"
    />
  );
}
