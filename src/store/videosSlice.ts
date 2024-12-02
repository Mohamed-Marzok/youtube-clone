import { createSlice } from "@reduxjs/toolkit";
import { videoData } from "../data";
import { IVideo } from "../interfaces";
interface IState {
  videos: IVideo[];
}
export const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videos: videoData,
  } as IState,
  reducers: {
    filterVideosByCategory: (state, action) => {
      console.log(action.payload);
      if (action.payload !== "all_content") {
        state.videos = videoData.filter(
          (video) => video.category === action.payload
        );
      } else {
        state.videos = videoData;
      }
    },
  },
});
export const { filterVideosByCategory } = videosSlice.actions;
export default videosSlice.reducer;
