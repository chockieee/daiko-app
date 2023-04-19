import { AppBar } from "@/components/AppBar";
import { AppDrawer } from "@/components/AppDrawer";
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
  backgroundColor: "rgb(231, 235, 240)",
  // paddingTop: theme.mixins.toolbar.minHeight,
  marginTop: theme.mixins.toolbar.minHeight,
  height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
  overflowY: "auto",
  // height: "auto",
  flexGrow: 1,
  // padding: theme.spacing(3),
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
  const handleClose = () => setOpen(!open);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <CssBaseline />
      <AppBar open={open} width={drawerWidth} handleDrawerOpen={handleOpen} />
      <Box display="flex">
        <AppDrawer
          open={open}
          width={drawerWidth}
          handleDrawerClose={handleClose}
        />
        <Main open={open}>
          {/* <Toolbar /> */}
          <Component {...pageProps} />
        </Main>
      </Box>
    </>
  );
}
