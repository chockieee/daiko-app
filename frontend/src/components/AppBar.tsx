import { LocalTaxi } from "@mui/icons-material";
import { AppBar as MuiAppBar, Box, Toolbar, Typography } from "@mui/material";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

interface AppBarProps extends MuiAppBarProps {
  drawerWidth: number;
}

export const AppBar: React.FC<AppBarProps> = ({ drawerWidth }) => {
  return (
    <MuiAppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center">
          <LocalTaxi />
          <Typography variant="h6" noWrap fontWeight="bold" ml={1}>
            代行サービス
          </Typography>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};
