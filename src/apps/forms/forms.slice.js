import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    forms: (state, action) => {
      return state;
    },
  },
});

export default formSlice.reducer;

export const formActions = formSlice.actions;
