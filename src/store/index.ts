import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./events/slice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
