import { AppBar } from "@/components/AppBar";
import { AppDrawer } from "@/components/AppDrawer";
import "@/styles/globals.css";
import { Box, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import type { AppProps } from "next/app";

const drawerWidth = 240;

const Main = styled("main")(({ theme }) => ({
  backgroundColor: "rgb(231, 235, 240)",
  marginTop: theme.mixins.toolbar.minHeight,
  height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
  overflowY: "auto",
  flexGrow: 1,
}));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <AppBar drawerWidth={drawerWidth} />
      <Box display="flex">
        <AppDrawer drawerWidth={drawerWidth} />
        <Main>
          <Component {...pageProps} />
        </Main>
      </Box>
    </>
  );
}
