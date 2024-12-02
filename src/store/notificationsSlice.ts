import { createSlice } from "@reduxjs/toolkit";
import { notifications } from "../data";
import { INotification } from "../interfaces";
interface IState {
  notifications: INotification[];
}
export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    notifications: notifications,
  } as IState,
  reducers: {
    deleteNotificationById: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});
export const { deleteNotificationById } = notificationsSlice.actions;
export default notificationsSlice.reducer;
