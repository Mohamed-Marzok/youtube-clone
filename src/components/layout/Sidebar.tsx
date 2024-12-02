import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { TDispatch, TState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../store/uiSlice";
import { sidebarBtns } from "../../data";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const sidebarstate = useSelector((state: TState) => state.ui.sidebarState);
  const dispatch: TDispatch = useDispatch();
  const navigate = useNavigate();
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => dispatch(closeSidebar())}
    >
      <List>
        {sidebarBtns.map((btn) => (
          <ListItem
            sx={{
              ".css-rizt0-MuiTypography-root": {
                width: "fit-content",
                marginRight: "10px",
              },
            }}
            key={btn.value}
            disablePadding
          >
            <ListItemButton
              onClick={() =>
                navigate(btn.value === "home" ? "/" : `/${btn.value}`)
              }
            >
              <btn.icon />
              <ListItemText primary={btn.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor={"right"}
        open={sidebarstate}
        onClose={() => dispatch(closeSidebar())}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
