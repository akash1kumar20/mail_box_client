import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from "./canvasSlice";
import inboxReducer from "./inboxElementSlice";
import loginReducer from "./loginComponents";
const store = configureStore({
  reducer: {
    canvas: canvasReducer,
    inbox: inboxReducer,
    loginComponents: loginReducer,
  },
});
export default store;
