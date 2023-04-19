import { CalendarToday, Home, Person } from "@mui/icons-material";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Drawer } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Link from "next/link";

interface AppDrawerProps {
  open?: boolean;
  width: number;
  handleDrawerClose?: () => void;
}

const linkStyle = { textDecoration: "none", color: "inherit" };

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const AppDrawer: React.FC<AppDrawerProps> = ({
  open,
  width,
  handleDrawerClose,
}) => {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        {/* <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton> */}
      </DrawerHeader>
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
