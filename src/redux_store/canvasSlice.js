import { createSlice } from "@reduxjs/toolkit";
const canvasState = {
  canvasVisibility: false,
};
const canvasSlice = createSlice({
  name: "canvas",
  initialState: canvasState,
  reducers: {
    showCanvas(state) {
      state.canvasVisibility = !state.canvasVisibility;
    },
  },
});
export const canvasAction = canvasSlice.actions;
export default canvasSlice.reducer;
