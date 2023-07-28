import { configureStore } from "@reduxjs/toolkit";
import utilsReducer from "./utils/utilsSlice";

export const store = configureStore({
  reducer: {
    utils: utilsReducer,
  },
});
