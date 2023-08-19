import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from "./canvasSlice";
import inboxReducer from "./inboxElementSlice";
const store = configureStore({
  reducer: { canvas: canvasReducer, inbox: inboxReducer },
});
export default store;
