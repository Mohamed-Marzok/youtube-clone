import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import videosReducer from "./videosSlice";
import videoByIdReducer from "./videoByIdSlice";
import notificationsReducer from "./notificationsSlice";
import watckLaterReducer from "./watckLaterSlice";
import likedReducer from "./LikedSlice";
import historyReducer from "./historySlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    videos: videosReducer,
    videoById: videoByIdReducer,
    notifications: notificationsReducer,
    watckLater: watckLaterReducer,
    liked: likedReducer,
    history: historyReducer,
    search: searchReducer,
  },
});

export type TState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;

export default store;
