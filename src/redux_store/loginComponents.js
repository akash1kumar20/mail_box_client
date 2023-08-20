import { createSlice } from "@reduxjs/toolkit";
const initialStateLogin = {
  createAccount: null,
  displayPassword: null,
};
const loginComponentsSlice = createSlice({
  name: "loginItems",
  initialState: initialStateLogin,
  reducers: {
    createAccountStatus(state, action) {
      state.createAccount = action.payload;
    },
    displayPasswordStatus(state, action) {
      state.displayPassword = action.payload;
    },
  },
});

export const loginComponentsSliceActions = loginComponentsSlice.actions;
export default loginComponentsSlice.reducer;
