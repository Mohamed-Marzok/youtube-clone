// import { useParams } from "react-router-dom";
import VideoSecation from "../components/video by id/VideoSecation";
import VideosSuggestions from "../components/video by id/VideosSuggestions";

export default function VideoById() {
  //   const { id } = useParams();
  return (
    <div className="container mx-auto flex justify-between flex-col gap-4 lg:flex-row h-full overflow-hidden pb-10">
      <VideoSecation />

      <VideosSuggestions />
    </div>
  );
}
