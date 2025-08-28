import { MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LanguagePicker() {
    const { i18n } = useTranslation();

    return (
        <Select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)} sx={{ color: "white", border: "none" }}>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="de">Deutsch</MenuItem>
        </Select>
    )
}