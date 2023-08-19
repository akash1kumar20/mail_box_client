import { createSlice } from "@reduxjs/toolkit";
const inboxInititalElement = {
  compose: null,
  profile: null,
  star: null,
  draft: null,
};

const inboxItemSlice = createSlice({
  name: "inboxSlice",
  initialState: inboxInititalElement,
  reducers: {
    composeAction(state, action) {
      state.compose = action.payload;
    },
    profileAction(state, action) {
      state.compose = action.payload;
    },
    starAction(state, action) {
      state.compose = action.payload;
    },
    draftAction(state, action) {
      state.compose = action.payload;
    },
  },
});

export const inboxSliceAction = inboxItemSlice.actions;
export default inboxItemSlice.reducer;
