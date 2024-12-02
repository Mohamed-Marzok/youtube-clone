import { useSelector, useDispatch } from "react-redux";
import BaisModal from "../ui/BaisModal";
import { TState } from "../../store/store";
import { closeNotifications } from "../../store/uiSlice";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteNotificationById } from "../../store/notificationsSlice";
import { useNavigate } from "react-router-dom";
import { addNewVideoToHistory } from "../../store/historySlice";

export default function NotificationsModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notifications = useSelector(
    (state: TState) => state.notifications.notifications
  );
  const notificationsState = useSelector(
    (state: TState) => state.ui.notificationsState
  );

  const handleClose = () => {
    dispatch(closeNotifications());
  };
  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    dispatch(deleteNotificationById(id));
  };
  const handleNotificationClick = (
    id: number,
    videoId: number,
    title: string
  ) => {
    navigate(`/video/${videoId}`);
    dispatch(deleteNotificationById(id));
    dispatch(addNewVideoToHistory({ videoId, title }));
    handleClose();
  };

  return (
    <BaisModal open={notificationsState} close={handleClose}>
      <div className="p-4 h-full overflow-auto overflow-x-hidden bg-gray-50 rounded-lg shadow-md cursor-pointer">
        {notifications.map((notification, index) => (
          <div
            onClick={() =>
              handleNotificationClick(
                notification.id,
                notification.videoId,
                notification.text
              )
            }
            key={index}
            className="relative flex items-center justify-between  mb-4 p-4 pr-10 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105"
          >
            <IconButton
              onClick={(e) => handleDelete(e, notification.id)}
              sx={{
                position: "absolute",
                top: "50%",
                right: "8px",
                transform: "translateY(-50%)",
              }}
              aria-label="delete"
              size="small"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
            <div className="flex items-center space-x-4">
              <img
                className="rounded-full w-12 h-12 object-cover border border-gray-300"
                src={notification.channelImage}
                alt="Channel"
              />
              <p className="text-gray-700 font-medium">{notification.text}</p>
            </div>
            <img
              className="w-16 h-16 object-cover rounded-md border border-gray-300"
              src={notification.videoImage}
              alt="Video"
            />
          </div>
        ))}
      </div>
    </BaisModal>
  );
}
