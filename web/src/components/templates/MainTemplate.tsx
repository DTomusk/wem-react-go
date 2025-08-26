import { Box } from "@mui/material";
import NavBar from "../organisms/NavBar";
import { Outlet } from "react-router-dom";

export default function MainTemplate() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Box sx={{ flexGrow: 0 }}>
                <NavBar />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: 1 }}>
                <Outlet />
            </Box>
        </Box>
    )
}