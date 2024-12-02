import { useSelector } from "react-redux";
import Videos from "../components/videos/Videos";
import { TState } from "../store/store";

export default function WatchLater() {
  const videos = useSelector(
    (state: TState) => state.watckLater.watchLaterVideos
  );

  return (
    <div>
      <Videos videos={videos} />
    </div>
  );
}
