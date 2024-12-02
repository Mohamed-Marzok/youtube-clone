import { useSelector } from "react-redux";
import ToggleButtons from "../components/layout/ToggleButtons";
import Videos from "../components/videos/Videos";
import { TState } from "../store/store";

export default function Home() {
  const videos = useSelector((state: TState) => state.videos.videos);

  return (
    <div>
      <div className="m-5">
        <ToggleButtons />
        <Videos videos={videos} />
      </div>
    </div>
  );
}
