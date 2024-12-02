import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewVideoToWatchLater } from "../../store/watckLaterSlice";
import { addNewVideoToLiked } from "../../store/LikedSlice";
interface IProps {
  id: number;
}
export default function LaterAndLikedBtn({ id }: IProps) {
  const dispatch = useDispatch();
  const handleBtnWatchLaterClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    dispatch(addNewVideoToWatchLater(id));
    console.log(id);
  };
  const handleBtnLikedClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    dispatch(addNewVideoToLiked(id));
    console.log(id);
  };
  return (
    <div className="absolute top-1 right-1  bg-gray-50 flex flex-col z-10 py-2 rounded-full">
      <IconButton onClick={(e) => handleBtnWatchLaterClick(e)}>
        <WatchLaterOutlinedIcon />
      </IconButton>
      <IconButton onClick={(e) => handleBtnLikedClick(e)}>
        <FavoriteBorderOutlinedIcon />
      </IconButton>
    </div>
  );
}
