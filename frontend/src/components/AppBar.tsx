import { LocalTaxi } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

interface AppBarProps extends MuiAppBarProps {
  open: boolean;
  handleDrawerOpen?: () => void;
}

const drawerWidth = 240;

const TopBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppBar: React.FC<AppBarProps> = ({ open, handleDrawerOpen }) => {
  return (
    <TopBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Box display="flex" alignItems="center">
          <LocalTaxi />
          <Typography variant="h6" noWrap fontWeight="bold" ml={1}>
            代行サービス
          </Typography>
        </Box>
      </Toolbar>
    </TopBar>
  );
};
