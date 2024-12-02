import { createSlice } from "@reduxjs/toolkit";
interface IState {
  sidebarState: boolean;
  notificationsState: boolean;
  deleteHistoryState: boolean;
  searchState: boolean;
}
export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    sidebarState: false,
    notificationsState: false,
    deleteHistoryState: false,
    searchState: false,
  } as IState,
  reducers: {
    openSidebar: (state) => {
      state.sidebarState = true;
    },
    closeSidebar: (state) => {
      state.sidebarState = false;
    },
    toggleSidebar: (state) => {
      state.sidebarState = state.sidebarState === true ? false : true;
    },
    openNotifications: (state) => {
      state.notificationsState = true;
    },
    closeNotifications: (state) => {
      state.notificationsState = false;
    },
    openDeleteHistory: (state) => {
      state.deleteHistoryState = true;
    },
    closeDeleteHistory: (state) => {
      state.deleteHistoryState = false;
    },
    openSearch: (state) => {
      state.searchState = true;
    },
    closeSearch: (state) => {
      state.searchState = false;
    },
  },
});
export const {
  openSidebar,
  closeSidebar,
  toggleSidebar,
  openNotifications,
  closeNotifications,
  openDeleteHistory,
  closeDeleteHistory,
  openSearch,
  closeSearch,
} = uiSlice.actions;
export default uiSlice.reducer;
