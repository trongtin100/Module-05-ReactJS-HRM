import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import staffReducer from "../features/staffSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    staff: staffReducer,
  },
});
