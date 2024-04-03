import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    value: JSON.parse(
      localStorage.getItem("github-excalidraw-content") ?? "{}",
    ),
  },
  reducers: {
    reloadContent: (state) => {
      const content = localStorage.getItem("github-excalidraw-content") ?? "{}";
      state.value = JSON.parse(content);
    },
    removeContent: (state) => {
      state.value = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { reloadContent, removeContent } = contentSlice.actions;

export default contentSlice.reducer;
