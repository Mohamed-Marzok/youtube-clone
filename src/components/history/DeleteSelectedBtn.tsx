import { Button } from "@mui/material";
import { TDispatch, TState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteSomeItemInHistory } from "../../store/historySlice";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
interface IProps {
  selected: string[];
  SetSelected: (selected: string[]) => void;
}
export default function DeleteSelectedBtn({ selected, SetSelected }: IProps) {
  const dispatch: TDispatch = useDispatch();
  const historyVideosLength = useSelector(
    (state: TState) => state.history.historyVideos.length
  );
  return (
    <Button
      onClick={() => {
        dispatch(deleteSomeItemInHistory(selected));
        SetSelected([]);
      }}
      sx={{ marginX: "10px" }}
      color="warning"
      disabled={Boolean(!selected.length) || Boolean(!historyVideosLength)}
    >
      <DeleteSweepOutlinedIcon />
      حذف المحدد
    </Button>
  );
}
