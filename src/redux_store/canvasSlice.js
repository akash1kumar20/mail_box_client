import { createSlice } from "@reduxjs/toolkit";
const canvasState = {
  canvasVisibility: false,
  active: false,
};
const canvasSlice = createSlice({
  name: "canvas",
  initialState: canvasState,
  reducers: {
    showCanvas(state) {
      state.canvasVisibility = !state.canvasVisibility;
    },
    setCanvasVisibility(state, actions) {
      state.canvasVisibility = actions.payload;
    },
    activeCanvas(state) {
      state.active = !state.active;
    },
  },
});
export const canvasAction = canvasSlice.actions;
export default canvasSlice.reducer;
