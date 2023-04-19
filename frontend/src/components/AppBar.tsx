import { LocalTaxi } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

interface AppBarProps extends MuiAppBarProps {
  open: boolean;
  width: number;
  handleDrawerOpen?: () => void;
}

const TopBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, width }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${width}px)`,
    marginLeft: `${width}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppBar: React.FC<AppBarProps> = ({
  open,
  width,
  handleDrawerOpen,
}) => {
  return (
    <TopBar position="fixed" open={open} width={width}>
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
