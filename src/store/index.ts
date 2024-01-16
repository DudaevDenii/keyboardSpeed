import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice/appSlice";
export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
