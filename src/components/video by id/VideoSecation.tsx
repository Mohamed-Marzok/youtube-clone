import { useSelector } from "react-redux";
import { TState } from "../../store/store";
import { Avatar } from "@mui/material";
import Comments from "./Comments";

export default function VideoSecation() {
  const video = useSelector((state: TState) => state.videoById.videoById);
  return (
    <div className="h-full lg:w-3/5 min-h-[50%]">
      <video
        className=" h-1/2 rounded-md aspect-video mb-3"
        controls
        src={video.videoUrl}
        autoPlay
      />
      <p className="text-2xl font-bold">{video.title}</p>
      <div className="flex mt-5">
        <div className="flex items-center gap-2">
          <Avatar src={video.channelImage} />
          <div className="flex flex-col">
            <p className="text-xl font-medium">{video.channelName}</p>
            <p className="text-sm text-gray-400">
              {video.numOfSubscribers.toLocaleString()}
            </p>
          </div>
          <div className="flex gap-2 mr-3">
            <button className="w-24 bg-gray-300 p-2 rounded-full hover:bg-gray-400">
              الانضمام
            </button>
            <button className="w-24 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-950">
              الاشتراك
            </button>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
}
