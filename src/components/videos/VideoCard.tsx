import { Avatar } from "@mui/material";
import { IVideo } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import LaterAndLikedBtn from "./LaterAndLikedBtn";
import { useDispatch } from "react-redux";
import { TDispatch } from "../../store/store";
import { addNewVideoToHistory } from "../../store/historySlice";
import { formatRelative } from "date-fns";

interface IProps {
  video: IVideo;
}

export default function VideoCard({ video }: IProps) {
  const navigate = useNavigate();
  const dispatch: TDispatch = useDispatch();

  const handleVideoClick = async (id: number, title: string) => {
    dispatch(addNewVideoToHistory({ videoId: id, title }));
    navigate(`/video/${id}`);
  };

  return (
    <div
      onClick={() => handleVideoClick(video.id, video.title)}
      className="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-300 relative"
    >
      <LaterAndLikedBtn id={video.id} />
      <div className="relative">
        <p className="absolute left-1 bottom-1 text-white bg-gray-600 rounded-lg px-1 text-sm">
          {video.category === "live" ? (
            <span className="w-full bg-red-600 px-2 rounded-lg">live</span>
          ) : (
            video.time
          )}
        </p>
        <img
          className="w-full h-56 rounded-lg object-cover"
          src={video.videoImage}
          alt={`Thumbnail for ${video.title}`}
        />
      </div>

      <div className="flex items-start gap-3 mt-3">
        <Avatar
          src={video.channelImage}
          alt={`Profile picture of ${video.channelName}`}
          sx={{ width: 40, height: 40 }}
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{video.title}</p>
          <p className="text-gray-500 text-sm">{video.channelName}</p>
          <div className="flex gap-3 mt-2 text-gray-700">
            <p>{video.numofwatch.toLocaleString()} views</p>
            <p>{formatRelative(new Date(video.data), new Date())}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
