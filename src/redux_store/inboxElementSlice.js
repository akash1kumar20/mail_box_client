import { createSlice } from "@reduxjs/toolkit";
const inboxInititalElement = {
  compose: null,
  profile: null,
  star: null,
  draft: null,
  trash: null,
  sent: null,
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
    starAction(state, action) {
      state.star = action.payload;
    },
    draftAction(state, action) {
      state.draft = action.payload;
    },
    trashAction(state, action) {
      state.trash = action.payload;
    },
    sentAction(state, action) {
      state.sent = action.payload;
    },
  },
});

export const inboxSliceAction = inboxItemSlice.actions;
export default inboxItemSlice.reducer;
