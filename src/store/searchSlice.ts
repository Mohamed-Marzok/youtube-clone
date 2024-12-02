import { createSlice } from "@reduxjs/toolkit";
import { videoData } from "../data";
import { IVideo } from "../interfaces";
interface IState {
  searchVideos: IVideo[];
}
export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchVideos: [],
  } as IState,
  reducers: {
    filterVideosBySearch: (state, action) => {
      state.searchVideos = videoData.filter((video) =>
        video.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});
export const { filterVideosBySearch } = searchSlice.actions;
export default searchSlice.reducer;
