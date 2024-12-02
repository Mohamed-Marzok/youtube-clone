import { useDispatch, useSelector } from "react-redux";
import { TState } from "../../store/store";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { addNewVideoToHistory } from "../../store/historySlice";
import { Checkbox } from "@mui/material";
interface IProps {
  selected: string[];
  SetSelected: (selected: string[]) => void;
}
export default function HistoryCards({ selected, SetSelected }: IProps) {
  const historyVideos = useSelector(
    (state: TState) => state.history.historyVideos
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCardClick = (v: {
    videoId: number;
    title: string;
    date: string;
    notificationId: string;
  }) => {
    navigate(`/video/${v.videoId}`);
    dispatch(addNewVideoToHistory(v));
  };

  const handleCheckBoxClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    notificationId: string
  ) => {
    e.stopPropagation();
    if (!selected.includes(notificationId)) {
      SetSelected([...selected, notificationId]);
    } else {
      const newArr = selected.filter((s) => s !== notificationId);
      SetSelected(newArr);
    }
  };

  const videoJSX = useMemo(() => {
    return historyVideos?.map((v) => (
      <div
        key={v.notificationId}
        onClick={() => handleCardClick(v)}
        className="p-2 flex justify-between shadow-lg rounded-lg lg:p-5 cursor-pointer hover:translate-x-4 transition-all ease-linear  duration-200"
      >
        <div className="flex gap-2 items-center">
          <Checkbox
            name="historyItem"
            checked={selected.includes(v.notificationId)}
            onClick={(e) => handleCheckBoxClick(e, v.notificationId)}
          />
          <SmartDisplayIcon color="error" />
          <p className="text-lg font-medium">{v.title}</p>
        </div>
        <p className="text-sm text-gray-400">{v.date}</p>
      </div>
    ));
  }, [historyVideos, selected]);

  return (
    <div className="flex flex-col-reverse gap-4 container mx-auto">
      {videoJSX && videoJSX.length > 0 ? (
        videoJSX
      ) : (
        <p className="text-lg font-semibold text-gray-500">
          لم يتم العثور على مقاطع فيديو
        </p>
      )}
    </div>
  );
}
