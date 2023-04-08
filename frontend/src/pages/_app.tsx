import { AppBar } from "@/components/AppBar";
import { AppDrawer, DrawerHeader } from "@/components/AppDrawer";
import "@/styles/globals.css";
import { Box, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { useState } from "react";
// import "./App.css";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default function App({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(!open);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <CssBaseline />
      <AppBar open={open} handleDrawerOpen={handleOpen} />
      <Box display="flex">
        <AppDrawer open={open} handleDrawerClose={handleClose} />

        <Main open={open}>
          <DrawerHeader />
          <Component {...pageProps} />
        </Main>
      </Box>
    </>
  );
}
