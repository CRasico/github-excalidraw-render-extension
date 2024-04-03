import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./features/content";

export default configureStore({
  reducer: {
    content: contentReducer,
  },
});
