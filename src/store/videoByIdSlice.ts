import { createSlice } from "@reduxjs/toolkit";
import { videoDetails } from "../data";
import { IVideoById } from "../interfaces";
interface IState {
  videoById: IVideoById;
}
export const videoByIdSlice = createSlice({
  name: "videoByIdSlice",
  initialState: {
    videoById: videoDetails,
  } as IState,
  reducers: {},
});
export default videoByIdSlice.reducer;
