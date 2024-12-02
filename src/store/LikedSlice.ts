import { createSlice } from "@reduxjs/toolkit";
import { videoData } from "../data";
import { IVideo } from "../interfaces";

interface IState {
  likedVideos: IVideo[];
}

export const likedSlice = createSlice({
  name: "liked",
  initialState: {
    likedVideos: [],
  } as IState,
  reducers: {
    addNewVideoToLiked: (state, action) => {
      const newVideo = videoData.find((video) => video.id === action.payload);

      const isAlreadyAdded = state.likedVideos.some(
        (v) => v.id === action.payload
      );

      if (newVideo && !isAlreadyAdded) {
        state.likedVideos.push(newVideo);
      } else {
        state.likedVideos = state.likedVideos.filter(
          (v) => v.id !== action.payload
        );
      }
    },
  },
});

export const { addNewVideoToLiked } = likedSlice.actions;
export default likedSlice.reducer;
