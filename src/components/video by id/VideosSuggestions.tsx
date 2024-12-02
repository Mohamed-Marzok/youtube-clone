import { useSelector } from "react-redux";
import { TState } from "../../store/store";
import { IVideo } from "../../interfaces";
import { useNavigate } from "react-router-dom";

export default function VideosSuggestions() {
  const video = useSelector((state: TState) => state.videoById.videoById);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 overflow-y-auto">
      {video.videoSuggestions.map((suggestion: IVideo) => (
        <div
          key={suggestion.id}
          className="flex items-center gap-4 cursor-pointer hover:bg-gray-200"
          onClick={() => navigate(`/video/${suggestion.id}`)}
        >
          <img
            src={suggestion.videoImage}
            alt={suggestion.title}
            className="w-32 h-20 object-cover rounded-md"
          />
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{suggestion.title}</h3>
            <p className="text-sm text-gray-500">{suggestion.channelName}</p>
            <p className="text-sm text-gray-400">
              {suggestion.numofwatch} views • {suggestion.data}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
