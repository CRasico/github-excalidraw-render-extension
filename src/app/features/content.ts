import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    value: JSON.parse(localStorage.getItem("github-excalidraw-content") ?? ""),
  },
  reducers: {
    setContent: (state, value) => {
      state.value = value.payload;
    },
    reloadContent: (state) => {
      state.value = JSON.parse(
        localStorage.getItem("github-excalidraw-content") ?? "",
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setContent, reloadContent } = contentSlice.actions;

export default contentSlice.reducer;
