import { createSlice } from "@reduxjs/toolkit";
const initialStateLogin = {
  userEmail: "",
  token: "",
  isLogIn: null,
  data: "",
};
const loginComponentsSlice = createSlice({
  name: "inboxSlice",
  initialState: initialStateLogin,
  reducers: {
    login(state, actions) {
      state.userEmail = actions.payload.userEmail;
      state.token = actions.payload.token;
      localStorage.setItem("userEmail", state.userEmail);
      localStorage.setItem("token", state.token);
    },
    logout(state) {
      state.userEmail = "";
      state.token = "";
      localStorage.clear();
    },
    loginStatus(state, action) {
      state.isLogIn = action.payload;
    },
    addData(state, action) {
      state.data = action.payload;
    },
  },
});

export const loginComponentsSliceActions = loginComponentsSlice.actions;
export default loginComponentsSlice.reducer;
