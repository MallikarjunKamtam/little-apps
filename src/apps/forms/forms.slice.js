import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    sport: [{ id: "", name: "" }],
    color: [{ id: "", name: "" }],
  },
};

const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    forms: (state, action) => {
      return state;
    },
    setInitialValues: (state, action) => {
      state.initialValues = action.payload;
      return state;
    },
  },
});

export default formSlice.reducer;

export const formActions = formSlice.actions;
export const formState = (state) => state;
