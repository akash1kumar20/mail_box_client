import { createSlice } from "@reduxjs/toolkit";
const inboxInititalElement = {
  compose: null,
  profile: null,
  componentOpen: "inbox",
  trashIcon: null,
  trashAction: false,
};

const inboxItemSlice = createSlice({
  name: "inboxSlice",
  initialState: inboxInititalElement,
  reducers: {
    composeAction(state, action) {
      state.compose = action.payload;
    },
    profileAction(state, action) {
      state.profile = action.payload;
    },
    componentOpenAction(state, action) {
      state.componentOpen = action.payload;
    },
    trashIconAction(state, action) {
      state.trashIcon = action.payload;
    },
    trashActionHandler(state, action) {
      state.trashAction = action.payload;
    },
  },
});

export const inboxSliceAction = inboxItemSlice.actions;
export default inboxItemSlice.reducer;
