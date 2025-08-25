import { Box } from "@mui/material";
import NavBar from "../organisms/NavBar";

export default function StandardTemplate({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                {children}
            </Box>
        </>
    )
}