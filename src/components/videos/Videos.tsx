import VideoCard from "./VideoCard";
import { IVideo } from "../../interfaces";
interface IProps {
  videos: IVideo[];
}
export default function Videos({ videos }: IProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {videos.map((video) => (
        <VideoCard key={video.title} video={video} />
      ))}
    </div>
  );
}
