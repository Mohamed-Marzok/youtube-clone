import { useSelector } from "react-redux";
import { TState } from "../store/store";
import Videos from "../components/videos/Videos";

export default function LikedVideos() {
  const videos = useSelector((state: TState) => state.liked.likedVideos);
  return (
    <div>
      <Videos videos={videos} />
    </div>
  );
}
