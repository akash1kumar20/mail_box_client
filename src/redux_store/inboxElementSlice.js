import { createSlice } from "@reduxjs/toolkit";
const inboxInititalElement = {
  compose: null,
  profile: null,
  inbox: null,
  star: null,
  draft: null,
  trash: null,
  sent: null,
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
    inboxAaction(state, action) {
      state.inbox = action.payload;
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
