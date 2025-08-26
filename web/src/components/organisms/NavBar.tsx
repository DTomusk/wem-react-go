import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";

export default function NavBar() {
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
                        <Link href="/" sx={{ textDecoration: "none", color: "inherit" }}>Home</Link>
                        <Link href="/about" sx={{ textDecoration: "none", color: "inherit" }}>About</Link>
                        <Link href="/signup" sx={{ textDecoration: "none", color: "inherit" }}>Sign Up</Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}