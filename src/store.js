import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import formsReducer from "./apps/forms/forms.slice";

const store = configureStore({
  reducer: {
    forms: formsReducer,
  },
});

export default store;

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
