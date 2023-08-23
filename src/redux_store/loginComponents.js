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
      state.userEmail = actions.payload.email;
      state.token = actions.payload.idToken;
      localStorage.setItem("userEmail", state.userEmail);
      localStorage.setItem("token", state.token);
    },
    logout(state) {
      state.userEmail = "";
      state.token = "";
      localStorage.removeItem("userEmail");
      localStorage.removeItem("token");
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
