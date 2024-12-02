import { createSlice } from "@reduxjs/toolkit";
import { videoData } from "../data";
import { IVideo } from "../interfaces";

interface IState {
  watchLaterVideos: IVideo[];
}

export const watchLaterSlice = createSlice({
  name: "watchLaterSlice",
  initialState: {
    watchLaterVideos: [],
  } as IState,
  reducers: {
    addNewVideoToWatchLater: (state, action) => {
      const newVideo = videoData.find((video) => video.id === action.payload);

      const isAlreadyAdded = state.watchLaterVideos.some(
        (v) => v.id === action.payload
      );

      if (newVideo && !isAlreadyAdded) {
        state.watchLaterVideos.push(newVideo);
      } else {
        state.watchLaterVideos = state.watchLaterVideos.filter(
          (v) => v.id !== action.payload
        );
      }
    },
  },
});

export const { addNewVideoToWatchLater } = watchLaterSlice.actions;
export default watchLaterSlice.reducer;
