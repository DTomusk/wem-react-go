import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguagePicker from "../molecules/LanguagePicker";
import { Link as RouterLink } from "react-router-dom";
import ThemeToggle from "../molecules/ThemeToggle";

export default function NavBar() {
    const { t } = useTranslation();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Typography variant="h4">W</Typography>
                    <Box sx={{ display: "flex", gap: 2, color: "white" }}>
                        <Link component={RouterLink} to="/" sx={{ textDecoration: "none", color: "inherit" }}>{t("home")}</Link>
                        <Link component={RouterLink} to="/about" sx={{ textDecoration: "none", color: "inherit" }}>{t("about")}</Link>
                        <Link component={RouterLink} to="/signup" sx={{ textDecoration: "none", color: "inherit" }}>{t("signup")}</Link>
                    </Box>
                    <ThemeToggle />
                    <LanguagePicker />
                </Toolbar>
            </AppBar>
        </Box>
    )
}