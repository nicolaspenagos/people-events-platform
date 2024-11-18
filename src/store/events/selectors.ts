import { RootState } from "..";

export const selectUpcomingEvents = (state: RootState) => state.events.upcoming;

export const selectPastEvents = (state: RootState) => state.events.past;
