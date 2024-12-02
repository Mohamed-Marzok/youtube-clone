import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TDispatch, TState } from "../../store/store";
import { openDeleteHistory } from "../../store/uiSlice";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
export default function DeleteAllBtn() {
  const dispatch: TDispatch = useDispatch();
  const historyVideosLength = useSelector(
    (state: TState) => state.history.historyVideos.length
  );
  return (
    <Button
      sx={{ marginX: "10px" }}
      color="error"
      onClick={() => dispatch(openDeleteHistory())}
      disabled={Boolean(!historyVideosLength)}
    >
      <DeleteOutlineOutlinedIcon />
      حذف الكل
    </Button>
  );
}
