import { Badge, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { openNotifications, toggleSidebar } from "../../store/uiSlice";
import { TDispatch, TState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import Search from "./search/Search";
export default function Navbar() {
  const dispatch: TDispatch = useDispatch();
  const navigate = useNavigate();
  const notificationsLength = useSelector(
    (state: TState) => state.notifications.notifications.length
  );
  return (
    <div className="p-2 border bg-white z-40 shadow-md flex justify-between fixed top-0 left-0 w-full ">
      <div className="flex">
        <IconButton onClick={() => dispatch(toggleSidebar())}>
          <MenuIcon />
        </IconButton>
        <img
          className="h-12 cursor-pointer"
          src="https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_640.png"
          onClick={() => navigate("/")}
        />
      </div>
      <Search />
      <div className="flex items-center gap-2 ">
        <VideoCallIcon />
        <IconButton
          size="large"
          aria-label="show  new notifications"
          color="inherit"
          onClick={() => dispatch(openNotifications())}
        >
          <Badge badgeContent={notificationsLength} color="error">
            <NotificationsNoneRoundedIcon />
          </Badge>
        </IconButton>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2024/05/20/16/24/ai-generated-8775742_640.png"
        />
      </div>
    </div>
  );
}
