import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventsState, Event } from "./types";

const initialState: EventsState = {
  upcoming: [],
  past: [],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent(state, { payload }: PayloadAction<Event>) {
      state.upcoming.push(payload);
    },
  },
});

export const eventsActions = eventsSlice.actions;
export default eventsSlice.reducer;
