import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Shorts from "./pages/Shorts"; // Example additional page
import Main from "./pages/Main";
import Subscriptions from "./pages/Subscriptions";
import History from "./pages/History";
import YourVideos from "./pages/YourVideos";
import WatchLater from "./pages/WatchLater";
import LikedVideos from "./pages/LikedVideos";
import Playlists from "./pages/Playlists";
import VideoById from "./pages/VideoById";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="shorts" element={<Shorts />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="history" element={<History />} />
        <Route path="playlists" element={<Playlists />} />
        <Route path="your_videos" element={<YourVideos />} />
        <Route path="watch_later" element={<WatchLater />} />
        <Route path="liked_videos" element={<LikedVideos />} />
        <Route path="video/:id" element={<VideoById />} />
      </Route>
    </Routes>
  );
}

export default App;
