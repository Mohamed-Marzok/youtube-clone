import { createSlice } from "@reduxjs/toolkit";
import { formatRelative, subDays } from "date-fns";
import { v4 as uuidv4 } from "uuid";
interface IState {
  historyVideos: {
    videoId: number;
    title: string;
    date: string;
    notificationId: string;
  }[];
}

export const historySlice = createSlice({
  name: "history",
  initialState: {
    historyVideos: [],
  } as IState,
  reducers: {
    addNewVideoToHistory: (state, action) => {
      const date = formatRelative(subDays(new Date(), 3), new Date());
      const newNotification = {
        ...action.payload,
        date: date,
        notificationId: uuidv4(),
      };
      state.historyVideos = [...state.historyVideos, newNotification];
    },
    deleteSomeItemInHistory: (state, action) => {
      console.log(action.payload);
      state.historyVideos = state.historyVideos.filter(
        (v) => !action.payload.some((nId: string) => v.notificationId === nId)
      );
    },

    deleteAllItemInHistory: (state) => {
      state.historyVideos = [];
    },
  },
});

export const {
  addNewVideoToHistory,
  deleteAllItemInHistory,
  deleteSomeItemInHistory,
} = historySlice.actions;
export default historySlice.reducer;
