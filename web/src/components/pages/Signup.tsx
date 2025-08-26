import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Signup() {
    const { t } = useTranslation();
    return (
        <Typography variant="h1">{t("signup")}</Typography>
    )
}