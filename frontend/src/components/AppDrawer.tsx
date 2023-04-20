import { CalendarToday, Home, Person } from "@mui/icons-material";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Drawer, Toolbar } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

interface AppDrawerProps {
  drawerWidth: number;
}

const linkStyle = { textDecoration: "none", color: "inherit" };

export const AppDrawer: React.FC<AppDrawerProps> = ({ drawerWidth }) => {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <Link href="/" style={linkStyle}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText>ホーム</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/account" style={linkStyle}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText>マイページ</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/logs" style={linkStyle}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarToday />
              </ListItemIcon>
              <ListItemText>予約・利用履歴</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};
